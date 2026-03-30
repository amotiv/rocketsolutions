'use client';

import { useState } from 'react';
import { 
  CheckSquare, AlertTriangle, ScanLine, 
  MapPin, Clock, ChevronRight, CheckCircle2 
} from 'lucide-react';

export default function MobileCleanerWorkflow() {
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [taskCompleted, setTaskCompleted] = useState<string | null>(null);

  // Simulated task list for a cleaner
  const tasks = [
    {
      id: 'task-1',
       zone: 'Main Lobby',
       priority: 'Urgent',
       type: 'Clean Touchpoints',
       time: 'Due Now',
       notes: 'Mud tracked in from rain. Focus on entryway mats and glass doors.',
       checklist: ['Vacuum mats', 'Wipe glass doors', 'Empty trash'],
       color: 'bg-red-50 text-red-700 border-red-200',
       badge: 'bg-red-500 text-white'
    },
    {
       id: 'task-2',
       zone: '2nd Fl Restroom (B)',
       priority: 'Inspect',
       type: 'Restock & Check',
       time: 'Due 10:30 AM',
       notes: 'Activity threshold crossed. Ensure paper towels are stocked.',
       checklist: ['Check toilet paper', 'Refill soap', 'Check paper towels', 'Wipe counters'],
       color: 'bg-orange-50 text-orange-700 border-orange-200',
       badge: 'bg-orange-500 text-white'
    },
    {
      id: 'task-3',
      zone: 'Fitness Center',
      priority: 'Routine',
      type: 'Surface Sanitize',
      time: 'Due By 1:00 PM',
      notes: 'Standard mid-day wipe down.',
      checklist: ['Wipe all cardio screens', 'Check sanitizing wipe dispensers'],
      color: 'bg-white text-navy border-slate-200',
      badge: 'bg-slate-500 text-white'
    }
  ];

  const handleComplete = (id: string) => {
    setTaskCompleted(id);
    setActiveTask(null);
  };

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 sm:mt-10 relative flex flex-col">
      
      {/* Mobile App Header */}
      <div className="bg-navy text-white px-6 py-5 shrink-0">
         <div className="flex justify-between items-center mb-4">
            <div>
               <h1 className="text-xl font-bold">My Route</h1>
               <p className="text-slate-400 text-sm">Lumina Apartments</p>
            </div>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold shadow-lg">
               CM
            </div>
         </div>
         <div className="flex gap-2">
            <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
               {tasks.filter(t => t.id !== taskCompleted).length} Tasks Left
            </span>
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border border-green-500/30">
               On Schedule
            </span>
         </div>
      </div>

      {/* Task Queue View */}
      {!activeTask && (
        <div className="p-4 space-y-4 overflow-y-auto flex-1 pb-20">
           {tasks.map((task) => {
             if (taskCompleted === task.id) return null;
             
             return (
               <div 
                 key={task.id} 
                 onClick={() => setActiveTask(task.id)}
                 className={`p-4 rounded-2xl border cursor-pointer hover:shadow-md transition-all ${task.color}`}
               >
                  <div className="flex justify-between items-start mb-2">
                     <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${task.badge}`}>
                       {task.priority}
                     </span>
                     <span className="text-xs font-bold opacity-70 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {task.time}
                     </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{task.zone}</h3>
                  <p className="text-sm opacity-80 mb-3 font-medium flex items-center gap-1">
                    <CheckSquare className="w-4 h-4" /> {task.type}
                  </p>
                  <div className="flex justify-between items-center pt-3 border-t border-black/10">
                     <span className="text-xs font-medium opacity-70">{task.checklist.length} items to check</span>
                     <span className="flex items-center text-sm font-bold opacity-90">Start <ChevronRight className="w-4 h-4"/></span>
                  </div>
               </div>
             )
           })}

           {tasks.every(t => t.id === taskCompleted) && (
              <div className="flex flex-col items-center justify-center py-20 text-center opacity-60">
                 <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                 <h3 className="font-bold text-lg text-navy">All caught up!</h3>
                 <p className="text-slate-500 text-sm">No pending high-priority zones.</p>
              </div>
           )}
        </div>
      )}

      {/* Active Task Execution View */}
      {activeTask && (
        <div className="absolute inset-0 bg-white z-10 flex flex-col animate-in slide-in-from-right-full duration-300">
           
           {/* Task Header */}
           <div className="bg-slate-100 px-4 py-4 border-b border-slate-200 flex items-center gap-3 shrink-0">
             <button onClick={() => setActiveTask(null)} className="p-2 text-slate-500 bg-white rounded-full shadow-sm hover:text-navy">
                <ChevronRight className="w-5 h-5 rotate-180" />
             </button>
             <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{tasks.find(t => t.id === activeTask)?.priority} Task</span>
                <h2 className="font-bold text-navy leading-tight">{tasks.find(t => t.id === activeTask)?.zone}</h2>
             </div>
           </div>

           {/* Task Content */}
           <div className="flex-1 overflow-y-auto p-5 pb-32">
              <div className="mb-6 bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 text-sm">
                 <strong>Supervisor Note:</strong> {tasks.find(t => t.id === activeTask)?.notes}
              </div>

              <h3 className="font-bold text-navy mb-4 border-b border-slate-100 pb-2">Required Checklist</h3>
              <div className="space-y-3 mb-8">
                 {tasks.find(t => t.id === activeTask)?.checklist.map((item, i) => (
                    <label key={i} className="flex items-center gap-3 p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                       <input type="checkbox" className="w-5 h-5 text-primary border-slate-300 rounded focus:ring-primary" />
                       <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </label>
                 ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                 <button className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors">
                    <ScanLine className="w-6 h-6 mb-2 text-navy" />
                    <span className="text-xs font-bold text-navy">Scan Zone QR</span>
                 </button>
                 <button className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50 transition-colors">
                    <AlertTriangle className="w-6 h-6 mb-2 text-red-500" />
                    <span className="text-xs font-bold text-navy">Flag Issue</span>
                 </button>
              </div>
           </div>
           
           {/* Completion Action */}
           <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t border-slate-200 shrink-0 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
              <button 
                onClick={() => handleComplete(activeTask)}
                className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:bg-primary-hover shadow-lg shadow-primary/30"
              >
                 <CheckCircle2 className="w-5 h-5" /> Mark Task Complete
              </button>
           </div>
        </div>
      )}

    </div>
  );
}
