import type { Metadata } from 'next';
import { Target, Flag, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Rocket Solutions',
  description: 'Our mission to help modern properties move beyond fixed cleaning schedules toward smarter, more responsive operations.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-navy py-20 text-center px-4 sm:px-6 lg:px-8 border-b border-slate-800">
         <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Moving beyond the fixed schedule.</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
               Rocket Solutions was built to help modern properties embrace smarter, data-guided operations instead of relying on inefficient legacy cleaning routines.
            </p>
         </div>
      </section>

      {/* Main Narrative */}
      <section className="py-20 lg:py-32">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
               
               <div className="space-y-8">
                  <div>
                     <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 flex items-center gap-2"><Flag className="w-5 h-5"/> Our Mission</h2>
                     <h3 className="text-3xl font-bold text-navy mb-4">Space is dynamic. Operations should be too.</h3>
                     <p className="text-lg text-slate-600 leading-relaxed text-balance">
                        For decades, the property management and facility operations industries have run on paper checklists and fixed service intervals. A restroom is cleaned at 10 AM, regardless of whether three people or three hundred people have used it. 
                     </p>
                  </div>
                  
                  <div>
                     <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-3 flex items-center gap-2"><Target className="w-5 h-5"/> Why We Exist</h2>
                     <p className="text-lg text-slate-600 leading-relaxed">
                        We saw firsthand how this disconnect wastes millions of dollars in labor while simultaneously driving up resident and guest complaints. Rocket Solutions exists to close that gap. By bringing anonymous occupancy data directly into vendor routing, we ensure that labor is spent precisely where it creates the highest value.
                     </p>
                  </div>
               </div>

               <div className="bg-surface rounded-3xl p-8 lg:p-12 border border-surface-dark shadow-lg relative">
                  <h3 className="text-2xl font-bold text-navy mb-6">Built by Operators</h3>
                  <div className="prose prose-slate prose-lg">
                     <p>
                        We aren't a generic AI startup looking for a problem to solve. We are operators who felt the pain of trying to maintain Class-A standards across massive footprints with shrinking operational budgets.
                     </p>
                     <p>
                        We knew that adding more managers, more cameras, or more complex apps wasn't the answer. The answer was simple, reliable visibility into how space was actually being used.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Privacy & Principles */}
      <section className="bg-slate-900 text-white py-20 lg:py-32">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach to Privacy & Quality</h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12">
               We strongly believe that operational optimization should never come at the cost of personal privacy or the human element of service.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 text-left">
               <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h4 className="font-bold text-lg mb-2">100% Anonymous</h4>
                  <p className="text-slate-400 text-sm">We count events, never people. No cameras. No microphones. No personally identifiable data.</p>
               </div>
               <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h4 className="font-bold text-lg mb-2">Efficiency, Not Exhaustion</h4>
                  <p className="text-slate-400 text-sm">We don't overwork cleaning staff; we redirect their efforts so their hard work is actually recognized and impactful.</p>
               </div>
               <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                  <h4 className="font-bold text-lg mb-2">Data-Backed Quality</h4>
                  <p className="text-slate-400 text-sm">Subjective complaints are replaced with objective completion logs, protecting both managers and vendors.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
