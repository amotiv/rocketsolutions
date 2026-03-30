import { 
  BarChart3, TrendingUp, Clock, Activity, Download, FileText, ArrowUpRight, ArrowDownRight
} from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-navy flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary" />
            Analytics & ROI
          </h1>
          <p className="text-slate-500 mt-1">Lumina Apartments — Last 30 Days Dashboard</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
            <FileText className="w-4 h-4" /> PDF Report
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-hover transition-colors shadow-sm flex items-center gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </button>
        </div>
      </div>

      {/* Top Value Realization KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-navy rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group">
           <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity"><TrendingUp className="w-32 h-32"/></div>
           <h3 className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Estimated Labor Saved</h3>
           <div className="text-5xl font-bold mb-2">48.5 hrs</div>
           <p className="text-slate-400 text-sm flex items-center gap-1">
             <ArrowUpRight className="w-4 h-4 text-green-400" /> 12% improvement vs last month
           </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
           <h3 className="text-slate-500 font-bold text-sm tracking-widest uppercase mb-2">High-Traffic Coverage</h3>
           <div className="text-5xl font-bold text-navy mb-2">94%</div>
           <p className="text-slate-500 text-sm flex items-center gap-1">
             <ArrowUpRight className="w-4 h-4 text-green-500" /> Peak events matched with service
           </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group">
           <h3 className="text-slate-500 font-bold text-sm tracking-widest uppercase mb-2">Avg SLA Response Time</h3>
           <div className="text-5xl font-bold text-navy mb-2">14m</div>
           <p className="text-slate-500 text-sm flex items-center gap-1">
             <ArrowDownRight className="w-4 h-4 text-green-500" /> 3m faster vs baseline
           </p>
        </div>
      </div>

      {/* Operations Breakdown */}
      <div className="grid lg:grid-cols-2 gap-8">
         
         <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-navy mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
               <Activity className="w-5 h-5 text-primary" /> Zone Activity Heatmap (Weekly)
            </h3>
            <div className="space-y-6">
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span className="font-bold text-navy">Main Lobby</span>
                     <span className="text-slate-500">Peak: 7AM-9AM</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 flex overflow-hidden">
                     <div className="bg-primary/20 w-1/4 h-full border-r border-white/50"></div>
                     <div className="bg-red-500 w-1/4 h-full border-r border-white/50"></div>
                     <div className="bg-orange-400 w-1/4 h-full border-r border-white/50"></div>
                     <div className="bg-primary/20 w-1/4 h-full"></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span className="font-bold text-navy">Fitness Center</span>
                     <span className="text-slate-500">Peak: 5AM-7AM, 5PM-8PM</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 flex overflow-hidden">
                     <div className="bg-red-500 w-1/6 h-full border-r border-white/50"></div>
                     <div className="bg-primary/20 w-1/2 h-full border-r border-white/50"></div>
                     <div className="bg-orange-500 w-2/6 h-full border-r border-white/50"></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span className="font-bold text-navy">5th Fl Lounge</span>
                     <span className="text-slate-500">Low Utilization</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 flex overflow-hidden">
                     <div className="bg-primary/10 w-full h-full"></div>
                  </div>
               </div>
               
               <p className="text-xs text-slate-500 italic pt-4">Data derived from anonymous occupancy threshold sensors over 30 days.</p>
            </div>
         </div>

         <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col">
            <h3 className="text-lg font-bold text-navy mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
               <Clock className="w-5 h-5 text-primary" /> Task Execution Quality
            </h3>
            <div className="flex-1 flex flex-col justify-center">
               
               <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                     <span className="block text-2xl font-bold text-navy mb-1">214</span>
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tasks Generated</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                     <span className="block text-2xl font-bold text-green-600 mb-1">210</span>
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tasks Verified</span>
                  </div>
               </div>

               <div className="p-5 bg-orange-50 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-800 text-sm mb-2">Operational Insight</h4>
                  <p className="text-sm text-orange-700">
                     There was a <strong>300% spike</strong> in required cleaning tasks in the Main Lobby due to extreme weather (Rain) on Feb 12th. The dynamic routing engine automatically accommodated this without requiring manager intervention, maintaining class-A standards.
                  </p>
               </div>

            </div>
         </div>

      </div>

    </div>
  );
}
