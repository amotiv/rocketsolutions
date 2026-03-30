import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// We use the admin service role specifically for backend webhooks 
// to bypass Row Level Security since IoT devices won't have user JWTs.
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { sensor_id, event_type, value } = body

    if (!sensor_id || !event_type) {
      return NextResponse.json({ error: 'Missing required sensor payload values' }, { status: 400 })
    }

    // 1. Log the raw event into the database
    const { error: eventError } = await supabase
      .from('events')
      .insert([
        { 
          sensor_id, 
          event_type, 
          value: value || 1 
        }
      ])

    if (eventError) {
      console.error('Event Insert Error:', eventError)
      return NextResponse.json({ error: 'Failed to record event' }, { status: 500 })
    }

    // 2. Update the sensor heartbeat
    await supabase
      .from('sensors')
      .update({ last_heartbeat: new Date().toISOString() })
      .eq('id', sensor_id)

    return NextResponse.json({ success: true, message: 'Event ingested successfully' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
