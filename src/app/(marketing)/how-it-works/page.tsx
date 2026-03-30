import type { Metadata } from 'next';
import { Search, Settings, ActivitySquare, ShieldCheck, ArrowDown, Map } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How It Works | Rocket Solutions',
  description: 'A simple, 4-step process to optimize your property cleaning workflows with anonymous sensing and intelligent routing.',
};

const STEPS = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: 'Assess & Target',
    description: 'We evaluate your property to identify the specific high-traffic zones (lobbies, gyms, restrooms) that drive the most complaints and consume the most labor.',
    number: '01'
  },
  {
    icon: <Settings className="w-8 h-8 text-primary" />,
    title: 'Install & Configure',
    description: 'We deploy small, battery-operated, anonymous environmental sensors in the targeted zones. We then map your specific cleaning workflows and vendor assignments into the system.',
    number: '02'
  },
  {
    icon: <ActivitySquare className="w-8 h-8 text-primary" />,
    title: 'Monitor & Prioritize',
    description: 'As space is used, the system silently counts occupancy events. Once a threshold is crossed, it auto-generates a prioritized task for your janitorial team.',
    number: '03'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Verify & Report',
    description: 'Cleaners verify task completion via a simple digital log. Property managers receive a dashboard view showing exact response times, missed areas, and total verifiable completions.',
    number: '04'
  }
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-navy py-20 text-center px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How Rocket Solutions Works</h1>
          <p className="text-xl text-slate-300">
            Intelligent property operations broken down into four simple, non-technical steps.
          </p>
        </div>
      </section>

      {/* 4-Step Flow Diagram */}
      <section className="py-20 lg:py-32 relative bg-surface overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
             {/* Path line connecting steps for desktop */}
             <div className="hidden lg:block absolute top-24 left-1/8 right-1/8 h-0.5 bg-slate-200 z-0"></div>

             {STEPS.map((step, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-200 flex items-center justify-center mb-6 relative">
                      {step.icon}
                      <span className="absolute -top-3 -right-3 text-xs font-bold bg-navy text-white w-6 h-6 rounded-full flex items-center justify-center">
                        {step.number}
                      </span>
                   </div>
                   <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                   <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                   
                   {/* Mobile connector */}
                   {index < STEPS.length - 1 && (
                      <ArrowDown className="w-6 h-6 text-slate-300 my-6 lg:hidden" />
                   )}
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Deep Dives */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
             
             {/* Sensing */}
             <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-navy mb-4">What does "Anonymous Sensing" mean?</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Our technology relies solely on motion density and environmental disruption. This means:
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span className="text-slate-700"><strong>No cameras or optics.</strong> We don't record video, ever.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span className="text-slate-700"><strong>No audio recording.</strong> Complete privacy for your tenants and guests.</span>
                     </li>
                     <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span className="text-slate-700"><strong>100% PII-free.</strong> The system only knows <em>how much</em> a space was used, never <em>who</em> used it.</span>
                     </li>
                  </ul>
                </div>
                <div className="bg-surface rounded-3xl p-8 border border-surface-dark flex items-center justify-center aspect-video">
                   <div className="text-center">
                     <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                        <ShieldCheck className="w-12 h-12 text-primary" />
                     </div>
                     <p className="font-bold text-navy uppercase tracking-widest text-sm">Privacy by Design</p>
                   </div>
                </div>
             </div>

             {/* Routing & Dashboard */}
             <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                <div className="md:order-2">
                  <h2 className="text-3xl font-bold text-navy mb-4">Task Routing & The Manager Dashboard</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Instead of handing cleaners a static sheet of paper, the Rocket Solutions engine dynamically routes tasks to a mobile-friendly view for your staff.
                  </p>
                  <p className="text-slate-600 mb-6">
                    <strong>For Cleaners:</strong> Simple notifications showing exact zones needing attention based on actual usage, saving them from walking the entire property blindly.
                  </p>
                  <p className="text-slate-600">
                    <strong>For Managers:</strong> A web-based dashboard showing the live status of your building. You see completion rates, response times to peak messes, and total labor hours saved.
                  </p>
                </div>
                <div className="md:order-1 bg-navy rounded-3xl p-8 border border-slate-700 aspect-video flex items-center justify-center shadow-2xl relative overflow-hidden">
                   {/* Abstract dashboard graphic */}
                   <div className="w-full h-full border border-slate-700 rounded-xl bg-slate-900/50 p-4 flex flex-col gap-4">
                      <div className="flex gap-2">
                         <div className="h-4 w-1/4 bg-slate-700 rounded-sm"></div>
                         <div className="h-4 w-8 bg-primary rounded-sm ml-auto"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-2">
                         <div className="h-16 bg-slate-800 rounded-lg"></div>
                         <div className="h-16 bg-slate-800 rounded-lg"></div>
                         <div className="h-16 bg-slate-800 rounded-lg"></div>
                      </div>
                      <div className="flex-1 bg-slate-800 rounded-lg p-3">
                         <div className="h-3 w-1/3 bg-slate-700 rounded mb-4"></div>
                         <div className="space-y-2">
                            <div className="h-2 w-full bg-slate-700 rounded-full border border-slate-600"><div className="h-full w-3/4 bg-primary rounded-full"></div></div>
                            <div className="h-2 w-full bg-slate-700 rounded-full border border-slate-600"><div className="h-full w-1/2 bg-yellow-400 rounded-full"></div></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* Sample Workflow */}
      <section className="bg-slate-50 border-t border-slate-200 py-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-navy mb-8">Sample Workflow: Apartment Clubhouse & Gym</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-left space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0 text-slate-500 font-bold">1</div>
                  <div>
                    <strong className="block text-navy text-lg">7:00 AM - Morning Rush</strong>
                    <span className="text-slate-600">30 residents use the gym and clubhouse restrooms before work. Sensors detect the peak threshold.</span>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold">2</div>
                  <div>
                    <strong className="block text-navy text-lg">9:15 AM - Auto-Route</strong>
                    <span className="text-slate-600">The day porter arrives. Instead of sweeping empty corridors, their mobile device directs them immediately to the gym restrooms.</span>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 text-green-600 font-bold">3</div>
                  <div>
                    <strong className="block text-navy text-lg">9:30 AM - Verification</strong>
                    <span className="text-slate-600">The porter marks the task complete. The manager sees the timestamps verified on their dashboard, ensuring the space is perfect for mid-day tours.</span>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
