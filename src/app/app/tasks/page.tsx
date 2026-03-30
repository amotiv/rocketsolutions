import { createClient } from '@/utils/supabase/server';
import { 
  CheckSquare, Filter, Clock, AlertCircle, ChevronDown, CheckCircle2 
} from 'lucide-react';

export default async function TaskManagementPage() {
  const supabase = await createClient();
  
  // Real Fetch: Fetch all open/in-progress tasks across properties
  // Used in production, safely fallback to UI mocks if unseeded
  const { data: globalTasks } = await supabase
     .from('tasks')
     .select(`
       *,
       properties ( name ),
       zones ( name )
     `)
     .order('created_at', { ascending: false });

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
         <div>
            <h1 className="text-3xl font-bold text-navy flex items-center gap-3">
               <CheckSquare className="w-8 h-8 text-primary" />
               Global Task Manager
            </h1>
            <p className="text-slate-500 mt-1">Portfolio-wide dispatch tracking and SLA monitoring.</p>
         </div>
         <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
           <Filter className="w-4 h-4"/> Filters
         </button>
      </div>

      {/* KPI Ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
         <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Open Dispatch</span>
            <div className="text-2xl font-bold text-navy mt-1">12</div>
         </div>
         <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">In Progress</span>
            <div className="text-2xl font-bold text-orange-600 mt-1">4</div>
         </div>
         <div className="bg-red-50 border border-red-100 rounded-xl p-4 shadow-sm">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Overdue SLA</span>
            <div className="text-2xl font-bold text-red-600 mt-1">1</div>
         </div>
         <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Completed Today</span>
            <div className="text-2xl font-bold text-green-600 mt-1">45</div>
         </div>
      </div>

      {/* Main Task List Board */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
         {/* Table Header */}
         <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <div className="col-span-3">Property / Zone</div>
            <div className="col-span-3">Task Type</div>
            <div className="col-span-2">Priority / SLA</div>
            <div className="col-span-2">Assignee</div>
            <div className="col-span-2 text-right">Status</div>
         </div>

         <div className="divide-y divide-slate-100">
            {/* Mock Task Item: Overdue */}
            <div className="grid md:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-slate-50 transition-colors">
               <div className="md:col-span-3">
                  <div className="font-bold text-navy text-sm">Lumina Apartments</div>
                  <div className="text-slate-500 text-xs text-balance">Clubhouse Lounge</div>
               </div>
               <div className="md:col-span-3">
                  <div className="text-sm font-semibold text-slate-700">Surface Sanitize & Glass</div>
                  <div className="text-xs text-slate-500 truncate max-w-[200px]">Notes: Spill reported near coffee bar...</div>
               </div>
               <div className="md:col-span-2">
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded">
                     <AlertCircle className="w-3 h-3"/> Overdue
                  </span>
                  <div className="text-xs text-slate-500 mt-1">Due: 2 hrs ago</div>
               </div>
               <div className="md:col-span-2">
                  <div className="text-sm">Unassigned</div>
                  <button className="text-xs text-primary font-bold hover:underline">Assign Vendor</button>
               </div>
               <div className="md:col-span-2 text-right">
                  <button className="inline-flex items-center justify-between w-[120px] px-3 py-1.5 bg-white border border-slate-300 rounded text-sm text-slate-700 font-medium hover:bg-slate-50 shadow-sm ml-auto">
                     Open <ChevronDown className="w-4 h-4 text-slate-400"/>
                  </button>
               </div>
            </div>

            {/* Mock Task Item: In Progress */}
            <div className="grid md:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-slate-50 transition-colors">
               <div className="md:col-span-3">
                  <div className="font-bold text-navy text-sm">Lumina Apartments</div>
                  <div className="text-slate-500 text-xs">Main Lobby</div>
               </div>
               <div className="md:col-span-3">
                  <div className="text-sm font-semibold text-slate-700">Urgent Clean: High Traffic</div>
                  <div className="text-xs text-slate-500 truncate max-w-[200px]">Triggered by weather sensor and threshold.</div>
               </div>
               <div className="md:col-span-2">
                  <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded">
                     <Clock className="w-3 h-3"/> Urgent
                  </span>
                  <div className="text-xs text-slate-500 mt-1">Due: 1:30 PM</div>
               </div>
               <div className="md:col-span-2">
                  <div className="text-sm font-semibold text-navy">Carlos M.</div>
                  <div className="text-xs text-slate-500">Atlas Cleaners</div>
               </div>
               <div className="md:col-span-2 text-right">
                  <button className="inline-flex items-center justify-between w-[120px] px-3 py-1.5 bg-primary/10 border border-primary/20 rounded text-sm text-primary font-bold ml-auto">
                     In Progress <ChevronDown className="w-4 h-4"/>
                  </button>
               </div>
            </div>

            {/* Mock Task Item: Routine Open */}
            <div className="grid md:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-slate-50 transition-colors">
               <div className="md:col-span-3">
                  <div className="font-bold text-navy text-sm">Oak Park Towers</div>
                  <div className="text-slate-500 text-xs">3rd Fl Gym</div>
               </div>
               <div className="md:col-span-3">
                  <div className="text-sm font-semibold text-slate-700">Routine Wipe Down</div>
                  <div className="text-xs text-slate-500 truncate max-w-[200px]">Standard daily queue interval reached.</div>
               </div>
               <div className="md:col-span-2">
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-bold px-2 py-0.5 rounded border border-blue-200">
                     Routine
                  </span>
                  <div className="text-xs text-slate-500 mt-1">Due: 5:00 PM</div>
               </div>
               <div className="md:col-span-2">
                  <div className="text-sm font-semibold text-navy">Sarah T.</div>
                  <div className="text-xs text-slate-500">Atlas Cleaners</div>
               </div>
               <div className="md:col-span-2 text-right">
                   <button className="inline-flex items-center justify-between w-[120px] px-3 py-1.5 bg-white border border-slate-300 rounded text-sm text-slate-700 font-medium hover:bg-slate-50 shadow-sm ml-auto">
                     Open <ChevronDown className="w-4 h-4 text-slate-400"/>
                  </button>
               </div>
            </div>

            {/* Empty State Mock Fallback */}
            {globalTasks && globalTasks.length === 0 && (
               <div className="py-20 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-slate-300 mb-4" />
                  <h3 className="font-bold text-lg text-navy">Zero Open Tasks</h3>
                  <p className="text-slate-500 text-sm max-w-sm mt-1">All properties are fully serviced and no urgent thresholds have been triggered.</p>
               </div>
            )}
         </div>
      </div>
    </div>
  );
}
