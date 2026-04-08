import { 
  Settings, Building2, MapPin, Radio, Users, Key, AlertCircle, Palette 
} from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 dark:border-slate-800 dark:border-slate-800 pb-6">
         <h1 className="text-3xl font-bold text-navy dark:text-white dark:text-white flex items-center gap-3">
            <Settings className="w-8 h-8 text-primary" />
            Platform Architecture & Settings
         </h1>
         <p className="text-slate-500 dark:text-slate-400 mt-2">Manage properties, sensor mapping, integration keys, and vendor access.</p>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
         
         {/* Settings Nav */}
         <div className="md:col-span-4 lg:col-span-3">
            <nav className="flex flex-col space-y-1">
               <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary border-l-4 border-primary font-bold rounded-r-lg">
                  <Building2 className="w-5 h-5"/> Property Setup
               </a>
               <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-300 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-800 hover:text-navy dark:text-white dark:hover:text-white rounded-lg transition-colors font-medium">
                  <Palette className="w-5 h-5"/> Appearance
               </a>
               <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-300 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-800 hover:text-navy dark:text-white dark:hover:text-white rounded-lg transition-colors font-medium">
                  <MapPin className="w-5 h-5"/> Zone Templates
               </a>
               <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-300 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-800 hover:text-navy dark:text-white dark:hover:text-white rounded-lg transition-colors font-medium">
                  <Radio className="w-5 h-5"/> Sensor Mapping
               </a>
               <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-300 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-800 hover:text-navy dark:text-white dark:hover:text-white rounded-lg transition-colors font-medium">
                  <Users className="w-5 h-5"/> Vendor Access
               </a>
               <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-300 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900/50 dark:hover:bg-slate-800 hover:text-navy dark:text-white dark:hover:text-white rounded-lg transition-colors font-medium mt-4">
                  <Key className="w-5 h-5"/> API & Integrations
               </a>
            </nav>
         </div>

         {/* Settings Content Area */}
         <div className="md:col-span-8 lg:col-span-9 space-y-6">
            
            {/* Appearance Section */}
            <div className="bg-white dark:bg-slate-900 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 dark:border-slate-800 shadow-sm overflow-hidden">
               <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 dark:bg-slate-800/50">
                  <h3 className="font-bold text-lg text-navy dark:text-white dark:text-white">Appearance Settings</h3>
               </div>
               
               <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                     <h4 className="font-bold text-navy dark:text-white dark:text-white text-base">Interface Theme</h4>
                     <p className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-400 mt-1">Select or customize your UI theme.</p>
                  </div>
                  <ThemeToggle />
               </div>
            </div>

            <div className="bg-white dark:bg-slate-900 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 dark:border-slate-800 shadow-sm overflow-hidden">
               <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 dark:bg-slate-800/50">
                  <h3 className="font-bold text-lg text-navy dark:text-white dark:text-white">Active Properties</h3>
                  <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-colors">
                     + Add Property
                  </button>
               </div>
               
               <div className="p-6">
                  <div className="border border-slate-200 dark:border-slate-800 dark:border-slate-800 rounded-xl p-5 hover:border-primary/50 dark:hover:border-primary/50 transition-colors relative group">
                     <div className="flex justify-between items-start mb-2">
                        <div>
                           <h4 className="font-bold text-navy dark:text-white dark:text-white text-lg flex items-center gap-2">
                             Lumina Apartments <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">Pilot</span>
                           </h4>
                           <p className="text-sm text-slate-500 dark:text-slate-400 dark:text-slate-400 mt-1">1200 Tech Boulevard, Austin TX</p>
                        </div>
                        <button className="text-sm font-semibold text-primary">Edit</button>
                     </div>
                     <div className="flex gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/50 dark:border-slate-800 text-sm">
                        <div className="flex flex-col">
                           <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">Zones</span>
                           <span className="font-bold text-navy dark:text-white dark:text-white">4 Configured</span>
                        </div>
                        <div className="flex flex-col border-l border-slate-200 dark:border-slate-800 dark:border-slate-800 pl-4">
                           <span className="text-slate-400 font-medium text-xs uppercase tracking-wider">Sensors</span>
                           <span className="font-bold text-navy dark:text-white dark:text-white">12 Active, <span className="text-red-500 dark:text-red-400">1 Offline</span></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Quick Action Alert */}
            <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/50 rounded-2xl p-6 flex gap-4">
               <AlertCircle className="w-6 h-6 text-orange-500 dark:text-orange-400 shrink-0 mt-0.5" />
               <div>
                  <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-1">Unmapped Sensor Detected</h4>
                  <p className="text-orange-700 dark:text-orange-200/80 text-sm mb-3">Gateway RC-44 received a ping from a new generic motion sensor (ID: sn_091x8). It must be assigned to a zone to feed the optimization engine.</p>
                  <button className="px-4 py-2 bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-300 text-sm font-bold rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/60 transition-colors">
                     Review Sensor Log
                  </button>
               </div>
            </div>

         </div>

      </div>
    </div>
  );
}
