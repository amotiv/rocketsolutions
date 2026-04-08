'use client';

import { useState } from 'react';
import { 
  Building2, CheckCircle2, AlertCircle, Clock, CheckSquare, 
  MapPin, Activity, ArrowUpRight, Ban, TrendingUp 
} from 'lucide-react';

const MOCK_ZONES = [
  { id: 'z1', name: 'Main Lobby', score: 88, status: 'RED', label: 'Clean Now', lastCleaned: '12 hrs ago', activity: 'High entry (Raining)', assignedTo: 'Carlos M. (Porter)', action: '' },
  { id: 'z2', name: '2nd Fl Restroom', score: 65, status: 'ORANGE', label: 'Inspect Soon', lastCleaned: '2 hrs ago', activity: '45 uses detected', assignedTo: '', action: 'System monitor' },
  { id: 'z3', name: 'Fitness Center', score: 42, status: 'YELLOW', label: 'Monitoring', lastCleaned: '4 hrs ago', activity: 'Normal (Morning)', assignedTo: '', action: 'Await 60 threshold' },
  { id: 'z4', name: 'Package Rm & Mail', score: 12, status: 'GREEN', label: 'No Action', lastCleaned: '', activity: '', assignedTo: '', action: '', result: 'Saved 20m of labor', skipped: true }
];

const INITIAL_MOCK_PROPERTY_TASKS = [
  { id: 't1', title: 'Clubhouse Glass Wipe', priority: 'Overdue', assignee: 'Unassigned', status: 'Open' },
  { id: 't2', title: 'Lobby Entry Mats', priority: 'Active', assignee: 'Carlos M.', status: 'In Progress' },
  { id: 't3', title: 'Gym Restrooms (B)', priority: 'Completed', assignee: '', status: 'Completed', verifiedAt: '9:15 AM' }
];

export default function PropertyCommandCenter() {
  const [tasks, setTasks] = useState(INITIAL_MOCK_PROPERTY_TASKS);
  
  const handleAssign = (id: string) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, priority: 'Active', assignee: 'Alex R.', status: 'In Progress' } : t
    ));
  };
  
  const handleComplete = (id: string) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, priority: 'Completed', status: 'Completed', verifiedAt: 'Just now' } : t
    ));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header & Status KPIs */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-navy flex items-center gap-3">
              <Building2 className="w-8 h-8 text-primary" />
              The Lumina Apartments
            </h1>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 1200 Tech Boulevard, Austin TX 
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full ml-2">Active Pilot</span>
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              Export Report
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm shadow-primary/30">
              Manage Zones
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
             <span className="text-slate-500 text-sm font-medium mb-1">Current Status</span>
             <div className="flex items-center gap-2 mt-auto">
               <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
               </span>
               <span className="text-2xl font-bold text-navy">Attention Needed</span>
             </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
             <span className="text-slate-500 text-sm font-medium mb-1 line-clamp-1">Open Tasks</span>
             <div className="flex items-end gap-3 mt-auto">
               <span className="text-3xl font-bold text-navy">3</span>
               <span className="text-slate-400 text-sm mb-1">Active priority</span>
             </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10"><AlertCircle className="w-12 h-12 text-red-500"/></div>
             <span className="text-red-500 text-sm font-bold mb-1 relative z-10">Overdue SLA</span>
             <div className="flex items-end gap-3 mt-auto relative z-10">
               <span className="text-3xl font-bold text-red-600">1</span>
               <span className="text-red-400 text-sm mb-1 flex items-center gap-1"><ArrowUpRight className="w-3 h-3"/> from yesterday</span>
             </div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
             <span className="text-slate-500 text-sm font-medium mb-1">Service Score</span>
             <div className="flex items-end gap-3 mt-auto">
               <span className="text-3xl font-bold text-green-600">92%</span>
               <span className="text-green-500 text-sm mb-1 font-medium bg-green-50 px-2 rounded">Excellent</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Main Zone Grid (2 cols wide) */}
        <div className="lg:col-span-2 space-y-6">
           <h2 className="text-xl font-bold text-navy flex items-center gap-2">
             <Activity className="w-5 h-5 text-primary" /> Live Zone Status
           </h2>
           
           <div className="grid sm:grid-cols-2 gap-4">
              
              {MOCK_ZONES.map(zone => (
                <div key={zone.id} className={`bg-white rounded-2xl shadow-sm p-5 relative overflow-hidden group transition-all
                  ${zone.status === 'RED' ? 'border-2 border-red-200 hover:border-red-300' : 
                    zone.status === 'ORANGE' ? 'border-2 border-orange-200 hover:border-orange-300' : 
                    zone.status === 'YELLOW' ? 'border border-slate-200 hover:border-yellow-300' : 
                    'border border-slate-200 opacity-80 hover:opacity-100'}
                `}>
                   <div className={`absolute top-0 right-0 w-2 h-full 
                      ${zone.status === 'RED' ? 'bg-red-500' : 
                        zone.status === 'ORANGE' ? 'bg-orange-400' : 
                        zone.status === 'YELLOW' ? 'bg-yellow-400' : 'bg-green-500'}
                   `}></div>
                   <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-navy line-clamp-1">{zone.name}</h3>
                        <p className="text-xs text-slate-500">Priority Score: <strong className={`text-sm
                           ${zone.status === 'RED' ? 'text-red-600' : 
                             zone.status === 'ORANGE' ? 'text-orange-500' : 
                             zone.status === 'YELLOW' ? 'text-yellow-600' : 'text-green-600'}
                        `}>{zone.score}/100</strong></p>
                      </div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded border
                         ${zone.status === 'RED' ? 'bg-red-100 text-red-700 border-transparent' : 
                           zone.status === 'ORANGE' ? 'bg-orange-100 text-orange-700 border-transparent' : 
                           zone.status === 'YELLOW' ? 'bg-yellow-100 text-yellow-700 border-transparent' : 
                           'bg-green-100 text-green-700 border-green-200'}
                      `}>{zone.label}</span>
                   </div>
                   
                   {zone.skipped ? (
                     <div className="flex items-center justify-center h-[72px] bg-slate-50 rounded-lg border border-slate-100 mb-4 text-sm text-slate-500 gap-2">
                        <Ban className="w-4 h-4" /> Routine Clean Skipped (Empty)
                     </div>
                   ) : (
                     <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm border-b border-slate-100 pb-2">
                           <span className="text-slate-500 flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> Last Cleaned:</span>
                           <span className="font-medium text-navy">{zone.lastCleaned}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                           <span className="text-slate-500 flex items-center gap-1"><Activity className="w-3.5 h-3.5"/> Activity Spike:</span>
                           <span className="font-medium text-navy text-right">{zone.activity}</span>
                        </div>
                     </div>
                   )}
                   
                   <p className="text-sm">
                     {zone.skipped ? (
                        <><strong>Result:</strong> {zone.result}</>
                     ) : zone.assignedTo ? (
                        <><strong>Assigned to:</strong> <span className="text-primary hover:underline cursor-pointer">{zone.assignedTo}</span></>
                     ) : (
                        <><strong>Next Action:</strong> {zone.action}</>
                     )}
                   </p>
                </div>
              ))}

           </div>
        </div>

        {/* Right Sidebar: Live Task Queue */}
        <div className="space-y-6">
           <h2 className="text-xl font-bold text-navy flex items-center gap-2">
             <CheckSquare className="w-5 h-5 text-primary" /> Live Task Queue
           </h2>
           
           <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[400px]">
              <div className="p-4 border-b border-slate-100 bg-slate-50/50 rounded-t-2xl flex justify-between items-center shrink-0">
                 <span className="text-sm font-bold text-slate-600 tracking-wider uppercase">Active Dispatch</span>
                 <span className="flex h-2 w-2 relative">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                 </span>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {tasks.map(task => (
                    <div key={task.id} className="animate-in slide-in-from-right-4 fade-in duration-300">
                      {task.priority === 'Overdue' && (
                        <div className="p-3 bg-red-50 border border-red-100 rounded-xl relative">
                           <div className="absolute top-3 right-3 text-red-500 text-xs font-bold flex items-center gap-1"><Clock className="w-3 h-3"/> Overdue</div>
                           <h4 className="font-bold text-navy text-sm mb-1 pr-16 leading-tight">{task.title}</h4>
                           <p className="text-xs text-slate-500 mb-2">Assignee: {task.assignee}</p>
                           <button onClick={() => handleAssign(task.id)} className="w-full text-xs font-bold py-1.5 bg-white border border-slate-200 rounded shadow-sm text-navy hover:bg-slate-50 transition-all">Assign Task</button>
                        </div>
                      )}
                      
                      {task.priority === 'Active' && (
                        <div onClick={() => handleComplete(task.id)} className="p-3 border border-slate-200 rounded-xl bg-white shadow-sm hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group" title="Click to verify and complete">
                           <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-navy text-sm group-hover:text-primary transition-colors">{task.title}</h4>
                              <span className="bg-primary/10 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded group-hover:bg-primary group-hover:text-white transition-colors">In Prog</span>
                           </div>
                           <p className="text-xs text-slate-500 mb-2">Assignee: {task.assignee}</p>
                           <div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-primary h-1.5 rounded-full w-1/2"></div></div>
                        </div>
                      )}
                      
                      {task.priority === 'Completed' && (
                        <div className="p-3 border border-slate-200 rounded-xl bg-slate-50 opacity-75">
                           <div className="flex justify-between items-start mb-1">
                              <h4 className="font-bold text-slate-600 text-sm strike-through line-through">{task.title}</h4>
                              <span className="text-green-600"><CheckCircle2 className="w-4 h-4" /></span>
                           </div>
                           <p className="text-xs text-slate-500">Verified at {task.verifiedAt}</p>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              
              <div className="p-3 border-t border-slate-100 text-center shrink-0">
                 <button className="text-sm text-primary font-medium hover:underline">View Complete History</button>
              </div>
           </div>
        </div>

      </div>

      {/* 7-Day Trends Section */}
      <div className="pt-6 border-t border-slate-200">
         <h2 className="text-xl font-bold text-navy flex items-center gap-2 mb-6">
           <TrendingUp className="w-5 h-5 text-primary" /> 7-Day Operational Trends
         </h2>
         <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <span className="text-slate-500 text-sm font-medium">Estimated Labor Avoided</span>
               <div className="mt-2 text-3xl font-bold text-green-600 mb-2">14.5 hrs</div>
               <p className="text-xs text-slate-500">Saved by skipping low-occupancy zones (Mailroom, 5th Fl Lounge).</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
               <span className="text-slate-500 text-sm font-medium">Avg Response Time to Spike</span>
               <div className="mt-2 text-3xl font-bold text-navy mb-2">18 min</div>
               <p className="text-xs text-slate-500">Time from Red priority trigger to verified task completion.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
               <div className="h-20 w-full flex items-end gap-2 px-4 border-b border-slate-100 pb-2">
                 {/* Mock mini bar chart */}
                 <div className="w-1/7 bg-primary/20 rounded-t h-1/2 w-full"></div>
                 <div className="w-1/7 bg-primary/40 rounded-t h-3/4 w-full"></div>
                 <div className="w-1/7 bg-primary/30 rounded-t h-2/3 w-full"></div>
                 <div className="w-1/7 bg-primary   rounded-t h-full w-full"></div>
                 <div className="w-1/7 bg-primary/60 rounded-t h-[80%] w-full"></div>
                 <div className="w-1/7 bg-primary/20 rounded-t h-1/3 w-full"></div>
                 <div className="w-1/7 bg-primary/10 rounded-t h-1/4 w-full"></div>
               </div>
               <p className="text-xs text-center text-slate-500 mt-2 font-medium uppercase tracking-wider">Occupancy Volume Profile</p>
            </div>
         </div>
      </div>

    </div>
  );
}
