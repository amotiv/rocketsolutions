import type { Metadata } from 'next';
import { PackageOpen, MapPin, Gauge, ShieldCheck, Map, Target } from 'lucide-react';
import PilotForm from '@/components/Forms/PilotForm';

export const metadata: Metadata = {
  title: 'Pilot Program | Rocket Solutions',
  description: 'Request a pilot program to measure the ROI and operational impact of occupancy-based cleaning optimization.',
};

const INCLUDED = [
  'Initial site assessment & mapping',
  'Strategic zone selection based on pain points',
  'Hardware sensor installation & calibration',
  'Cleaning optimization workflow setup',
  'Weekly automated reporting & KPI tracking',
  'Comprehensive review at end of pilot'
];

const ZONES = [
  'Main Lobbies', 'Public Restrooms', 'Fitness Centers', 'Clubhouses & Lounges', 'Mail & Package Rooms', 'Coworking Spaces'
];

const KPIS = [
  { name: 'Service Response Time', desc: 'Time taken to address a high-traffic threshold event.' },
  { name: 'Labor Utilization', desc: 'Percentage of labor hours spent on actual active zones vs empty zones.' },
  { name: 'High-Traffic Coverage', desc: 'Ratio of peak events matched with corresponding service verifications.' },
  { name: 'Complaints / Issue Visibility', desc: 'Measured reduction in resident/guest complaints.' },
  { name: 'Proof-of-Service Rate', desc: 'Percentage of assigned tasks fully verified.' }
];

export default function PilotProgramPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/30 text-sm font-bold mb-6 tracking-wider uppercase">
            Limited Availability
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prove the ROI on your property.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            The Rocket Solutions Pilot Program is designed to show rapid, measurable value in one property using targeted high-traffic zones.
          </p>
        </div>
      </section>

      {/* Main Content & Form */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Details Side */}
            <div className="lg:col-span-7 space-y-16">
               <div>
                  <h2 className="text-3xl font-bold text-navy mb-6">What's included in the Pilot?</h2>
                  <ul className="space-y-4">
                     {INCLUDED.map((item, i) => (
                        <li key={i} className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                           <PackageOpen className="w-6 h-6 text-primary flex-shrink-0" />
                           <span className="text-navy font-medium">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h2 className="text-3xl font-bold text-navy mb-6">Typical Pilot Zones</h2>
                  <p className="text-slate-600 mb-6 font-medium">We focus on your highest-impact areas to prove value quickly.</p>
                  <div className="flex flex-wrap gap-3">
                     {ZONES.map((zone, i) => (
                        <span key={i} className="px-4 py-2 bg-white border border-slate-300 shadow-sm rounded-lg text-navy font-semibold flex items-center gap-2">
                           <MapPin className="w-4 h-4 text-primary" /> {zone}
                        </span>
                     ))}
                  </div>
               </div>

               <div>
                  <h2 className="text-3xl font-bold text-navy mb-6">The KPIs We Track</h2>
                  <div className="space-y-4">
                     {KPIS.map((kpi, i) => (
                        <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                           <h4 className="text-lg font-bold text-navy flex items-center gap-2 mb-2">
                              <Target className="w-5 h-5 text-primary" /> {kpi.name}
                           </h4>
                           <p className="text-slate-600 pl-7">{kpi.desc}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-5 relative">
               <div className="sticky top-28 xl:top-32">
                  <PilotForm />
               </div>
            </div>

         </div>
      </section>
    </div>
  );
}
