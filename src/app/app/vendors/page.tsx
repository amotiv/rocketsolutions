import { 
  Users, UserPlus, Search, 
  MapPin, ShieldAlert, Star, 
  MoreVertical, Clock, CheckCircle2,
  AlertTriangle, Filter
} from 'lucide-react';
import Link from 'next/link';

export default function VendorsPage() {
  // Premium mock data for Vendors list
  const MOCK_VENDORS = [
    {
      id: 'v1',
      name: 'Carlos Martinez',
      initials: 'CM',
      role: 'Daily Porter',
      status: 'Clocked In',
      assignment: 'Lumina - Zone A',
      score: 98,
      lastActive: 'Just now',
      color: 'bg-blue-500'
    },
    {
      id: 'v2',
      name: 'Sarah Jenkins',
      initials: 'SJ',
      role: 'Deep Clean Specialist',
      status: 'Off Duty',
      assignment: 'Unassigned',
      score: 94,
      lastActive: '4 hrs ago',
      color: 'bg-emerald-500'
    },
    {
      id: 'v3',
      name: 'David Okafor',
      initials: 'DO',
      role: 'Maintenance Tech',
      status: 'En Route',
      assignment: 'Oakwood - Unit 4B',
      score: 87,
      lastActive: '12 mins ago',
      color: 'bg-orange-500'
    },
    {
      id: 'v4',
      name: 'Elena Rodriguez',
      initials: 'ER',
      role: 'Daily Porter',
      status: 'Delayed',
      assignment: 'Lumina - Fitness',
      score: 92,
      lastActive: '1 hr ago',
      color: 'bg-purple-500'
    },
    {
      id: 'v5',
      name: 'Michael Chang',
      initials: 'MC',
      role: 'Audit Manager',
      status: 'Clocked In',
      assignment: 'City Center Tower',
      score: 99,
      lastActive: '5 mins ago',
      color: 'bg-slate-700'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header section with search and actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-navy flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Vendor & Staff Directory
          </h1>
          <p className="text-slate-500 mt-1">
            Manage your cleaning contractors, track schedules, and review performance SLAs.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary-hover transition-colors shadow-sm shadow-primary/30 flex items-center gap-2">
            <UserPlus className="w-4 h-4" /> Onboard Vendor
          </button>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Active Shift */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
           <span className="text-slate-500 text-sm font-medium mb-1">Active on Shift</span>
           <div className="flex items-end gap-3 mt-auto">
             <span className="text-3xl font-bold text-navy">12</span>
             <span className="text-slate-400 text-sm mb-1 flex items-center gap-1">
               <span className="relative flex h-2 w-2 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               Live
             </span>
           </div>
        </div>

        {/* Total Roster */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
           <span className="text-slate-500 text-sm font-medium mb-1">Total Roster</span>
           <div className="flex items-end gap-3 mt-auto">
             <span className="text-3xl font-bold text-navy">48</span>
             <span className="text-slate-400 text-sm mb-1">Registered staff</span>
           </div>
        </div>

        {/* Aggregate Service Score */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
           <span className="text-slate-500 text-sm font-medium mb-1">Avg Service Score</span>
           <div className="flex items-end gap-3 mt-auto">
             <span className="text-3xl font-bold text-blue-600">94.2</span>
             <span className="text-blue-500 text-sm mb-1 font-medium bg-blue-50 px-2 rounded flex items-center gap-1">
               <Star className="w-3 h-3 fill-current" /> Top Tier
             </span>
           </div>
        </div>

        {/* SLA Warning */}
        <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm flex flex-col relative overflow-hidden">
           <div className="absolute -right-4 -top-4 p-4 opacity-5"><ShieldAlert className="w-24 h-24 text-red-500"/></div>
           <span className="text-red-500 text-sm font-bold mb-1 relative z-10">SLA Warnings</span>
           <div className="flex items-end gap-3 mt-auto relative z-10">
             <span className="text-3xl font-bold text-red-600">2</span>
             <span className="text-red-400 text-sm mb-1">Staff at risk</span>
           </div>
        </div>
      </div>

      {/* Roster Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
           <div className="flex items-center gap-2">
             <h2 className="font-bold text-navy text-lg tracking-tight">Active Roster</h2>
             <span className="bg-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full text-xs font-bold">5 shown</span>
           </div>
           <div className="relative max-w-sm w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search staff by name or role..." 
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
           </div>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-xs uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100">
                <th className="px-6 py-4">Staff Member</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Current Status</th>
                <th className="px-6 py-4 hidden md:table-cell">Current Assignment</th>
                <th className="px-6 py-4">Performance</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_VENDORS.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm ${vendor.color}`}>
                        {vendor.initials}
                      </div>
                      <div>
                        <div className="font-bold text-navy">{vendor.name}</div>
                        <div className="text-xs text-slate-500 font-medium">ID: {vendor.id.toUpperCase()}072</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-slate-700">{vendor.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      {vendor.status === 'Clocked In' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-green-50 text-green-700 border border-green-200 w-fit">
                          <CheckCircle2 className="w-3 h-3" /> Clocked In
                        </span>
                      )}
                      {vendor.status === 'Off Duty' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200 w-fit">
                          <Clock className="w-3 h-3" /> Off Duty
                        </span>
                      )}
                      {vendor.status === 'En Route' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 w-fit">
                          <MapPin className="w-3 h-3" /> En Route
                        </span>
                      )}
                      {vendor.status === 'Delayed' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-red-50 text-red-700 border border-red-200 w-fit">
                          <AlertTriangle className="w-3 h-3" /> Delayed
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">{vendor.lastActive}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                    <div className="text-sm text-slate-600">
                      {vendor.assignment !== 'Unassigned' ? (
                        <Link href="/app/properties/1" className="hover:text-primary hover:underline font-medium">
                          {vendor.assignment}
                        </Link>
                      ) : (
                        <span className="text-slate-400 italic">Unassigned</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                       <div className="flex-1 w-24 bg-slate-100 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${vendor.score >= 95 ? 'bg-green-500' : vendor.score >= 90 ? 'bg-blue-500' : vendor.score >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                            style={{ width: `${vendor.score}%` }}
                          ></div>
                       </div>
                       <span className={`text-xs font-bold ${vendor.score >= 90 ? 'text-navy' : 'text-orange-600'}`}>
                         {vendor.score}
                       </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-primary hover:text-primary-hover hover:bg-primary/5 px-3 py-1.5 rounded transition-colors hidden sm:block font-bold">
                        Schedule
                      </button>
                      <button className="text-slate-400 hover:text-navy p-1.5 rounded hover:bg-slate-100 transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
