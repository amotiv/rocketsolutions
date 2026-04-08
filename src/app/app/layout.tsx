'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  Building2, LayoutDashboard, CheckSquare, 
  BarChart3, Users, Settings, Bell, Search, Menu, Rocket 
} from 'lucide-react';
import { useState } from 'react';

const SIDEBAR_LINKS = [
  { name: 'Properties', href: '/app/properties/1', icon: Building2 },
  { name: 'Tasks', href: '/app/tasks', icon: CheckSquare },
  { name: 'Reports', href: '/app/reports', icon: BarChart3 },
  { name: 'Vendors', href: '/app/vendors', icon: Users },
  { name: 'Settings', href: '/app/settings', icon: Settings },
];

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900/50 dark:bg-navy-dark flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
         <div 
           className="fixed inset-0 z-40 bg-slate-900/80 lg:hidden backdrop-blur-sm transition-opacity" 
           onClick={() => setSidebarOpen(false)}
         />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-navy transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
          <div className="h-16 flex items-center px-6 bg-navy-light border-b border-slate-700/50">
            <Link href="/app/properties/1" className="flex items-center gap-3 text-white">
              <div className="bg-primary/20 p-1.5 rounded-md">
                 <Rocket className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-lg tracking-tight">Rocket Ops</span>
            </Link>
          </div>
          
          <div className="flex-1 px-4 py-8 overflow-y-auto space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-2 mb-4">Command Center</div>
            {SIDEBAR_LINKS.map((item) => {
              const isActive = pathname?.startsWith(item.href) || (pathname === '/app' && item.name === 'Properties');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                    ${isActive 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent'}
                  `}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-slate-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="p-4 border-t border-slate-800">
             <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold text-sm">JS</div>
                <div className="flex flex-col">
                   <span className="text-sm font-bold text-white leading-tight">Jane Smith</span>
                   <span className="text-xs text-slate-400">Regional Manager</span>
                </div>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-slate-900 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 shrink-0 relative z-30 shadow-sm transition-colors">
           <div className="flex items-center flex-1">
              <button 
                className="lg:hidden p-2 -ml-2 mr-4 text-slate-500 dark:text-slate-400 dark:text-slate-400 hover:text-navy dark:text-white dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setSidebarOpen(true)}
              >
                 <Menu className="w-6 h-6" />
              </button>
              
              {/* Search Bar */}
              <div className="hidden sm:flex max-w-md w-full relative">
                 <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                 <input 
                   type="text" 
                   placeholder="Search properties, zones, tasks..." 
                   className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-700 dark:border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-slate-50 dark:bg-slate-900/50 dark:bg-slate-800 dark:text-white placeholder:text-slate-400 transition-colors"
                 />
              </div>
           </div>

           <div className="flex items-center gap-4">
              <button className="relative p-2 text-slate-400 hover:text-navy dark:text-white dark:hover:text-white transition-colors">
                 <Bell className="w-6 h-6" />
                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
              </button>
           </div>
        </header>

        {/* Scrollable Main Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto">
             {children}
          </div>
        </main>
      </div>
    </div>
  );
}
