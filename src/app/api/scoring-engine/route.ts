import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(request: Request) {
  // This endpoint acts as the cron job trigger.
  // In production, this would be hit via Vercel Cron or GitHub Actions.

  try {
    // 1. Fetch all active zones
    const { data: zones, error: zonesError } = await supabase
      .from('zones')
      .select('*')

    if (zonesError || !zones) throw zonesError

    // 2. Evaluate each zone
    for (const zone of zones) {
       
       // Algorithm weights outlined in PRD
       // 25% Time Since Clean
       const hoursSinceClean = (new Date().getTime() - new Date(zone.last_cleaned_at).getTime()) / (1000 * 60 * 60)
       const timeScore = Math.min((hoursSinceClean / 24) * 25, 25) // Max 25 pts for 24 hours
       
       // 30% Recent Activity
       // (Simplified for MVP: randomly assign activity score, or read real events)
       // This mocks reading the events table sum for this zone.
       const activityScore = Math.floor(Math.random() * 30)
       
       // Total Score
       const totalScore = Math.floor(timeScore + activityScore)
       
       let newStatus = 'green'
       if (totalScore >= 70) newStatus = 'red'
       else if (totalScore >= 50) newStatus = 'orange'
       else if (totalScore >= 30) newStatus = 'yellow'

       // 3. Update the Zone
       await supabase
         .from('zones')
         .update({ 
            priority_score: totalScore,
            status: newStatus
         })
         .eq('id', zone.id)

       // 4. Dispatch Task if Red
       if (newStatus === 'red') {
          // Check if an open task already exists
          const { data: existingTasks } = await supabase
             .from('tasks')
             .select('id')
             .eq('zone_id', zone.id)
             .in('status', ['open', 'in_progress'])

          if (!existingTasks || existingTasks.length === 0) {
             await supabase.from('tasks').insert([{
                property_id: zone.property_id,
                zone_id: zone.id,
                task_type: `Routine Clean: ${zone.zone_type}`,
                priority: 'urgent',
                status: 'open'
             }])
          }
       }
    }

    return NextResponse.json({ success: true, message: 'Optimization engine run completed', evaluated_zones: zones.length }, { status: 200 })
  } catch (error) {
    console.error('Engine Error:', error)
    return NextResponse.json({ error: 'Engine execution failed' }, { status: 500 })
  }
}
