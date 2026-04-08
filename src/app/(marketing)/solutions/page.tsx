import type { Metadata } from 'next';
import { Activity, CheckCircle2, Navigation, Eye, Rocket, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solutions | Rocket Solutions',
  description: 'Understand how Rocket Solutions optimizes cleaning efficiency, service quality, and visibility in your property.',
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-navy py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">The Rocket Solutions Platform</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A property-operations optimization system focused on deep cleaning efficiency, undisputed service quality, and real-time visibility.
          </p>
        </div>
      </section>

      {/* Core Solution Blocks */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Core Capabilities</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">Built for the demands of high-traffic environments.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface dark:bg-slate-900 p-8 rounded-2xl border border-surface-dark dark:border-slate-800">
              <Activity className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Occupancy-based optimization</h3>
              <p className="text-slate-600 dark:text-slate-300">Stop guessing. We monitor exact usage patterns using anonymous environmental sensors to dictate cleaning schedules based on real demand, not the clock.</p>
            </div>
            <div className="bg-surface dark:bg-slate-900 p-8 rounded-2xl border border-surface-dark dark:border-slate-800">
              <Navigation className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Task routing & prioritization</h3>
              <p className="text-slate-600 dark:text-slate-300">Automatically direct staff or vendors to high-traffic zones that need immediate attention, eliminating wasted labor on empty spaces.</p>
            </div>
            <div className="bg-surface dark:bg-slate-900 p-8 rounded-2xl border border-surface-dark dark:border-slate-800">
              <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Service verification</h3>
              <p className="text-slate-600 dark:text-slate-300">Gather digitally verifiable logs of all cleaning tasks. Property managers get dashboard proof of execution and reporting for total accountability.</p>
            </div>
            <div className="bg-surface dark:bg-slate-900 p-8 rounded-2xl border border-surface-dark dark:border-slate-800">
              <Eye className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Operational monitoring</h3>
              <p className="text-slate-600 dark:text-slate-300">Maintain a continuous pulse on your common areas. Spot usage spikes instantly and preempt resident, guest, or tenant complaints.</p>
            </div>
            <div className="bg-surface dark:bg-slate-900 p-8 rounded-2xl border border-surface-dark dark:border-slate-800 lg:col-span-2">
              <Rocket className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Pilot deployment & support</h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl">We don't just hand you software. Every deployment begins with a structured pilot program featuring dedicated rollout support, zone selection, sensor installation, and KPI tracking to prove exactly what you are saving before a large-scale rollout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Details */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Designed for real-world operations.</h2>
              <div className="space-y-6 mt-10">
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-primary rounded-full"></div>
                  <div>
                     <h4 className="font-bold text-lg">Anonymous environmental sensing</h4>
                     <p className="text-slate-400 mt-1">Our hardware measures activity through motion and environmental changes strictly without any cameras, recording, or personally identifiable data.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-primary rounded-full"></div>
                  <div>
                     <h4 className="font-bold text-lg">Vendor & staff coordination</h4>
                     <p className="text-slate-400 mt-1">Easily map tasks to your specific janitorial partners or internal staff with role-based routing.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1.5 h-auto bg-primary rounded-full"></div>
                  <div>
                     <h4 className="font-bold text-lg">Audit-ready monthly reports</h4>
                     <p className="text-slate-400 mt-1">Automated performance reporting delivers insights into response times, labor utilization, and high-traffic coverage metrics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
               <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">What Rocket Solutions is NOT</h3>
               <ul className="space-y-5">
                 <li className="flex items-start gap-3">
                   <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-white">Not a generic janitorial marketplace</strong>
                     <span className="text-sm text-slate-400">We don't source random cleaners; we optimize the operations of the professionals you already trust or provide our dedicated platform technicians.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-white">Not surveillance-heavy monitoring</strong>
                     <span className="text-sm text-slate-400">Our sensors are 100% anonymous. We track the flow of space, not the identity of individuals.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-white">Not a camera-first system</strong>
                     <span className="text-sm text-slate-400">No creepy optics. We rely on environmental and motion density data.</span>
                   </div>
                 </li>
                 <li className="flex items-start gap-3">
                   <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                   <div>
                     <strong className="block text-white">Not a consumer App</strong>
                     <span className="text-sm text-slate-400">This isn't for booking a maid. This is enterprise-grade facility optimization.</span>
                   </div>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
