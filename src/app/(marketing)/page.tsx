import Link from "next/link";
import { ArrowRight, BarChart3, Building2, CheckCircle2, Clock, MapPin, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-navy dark:bg-navy-dark text-white overflow-hidden py-24 lg:py-32 transition-colors">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start pt-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-hover border border-primary/30 text-sm font-medium mb-8">
            <Zap className="h-4 w-4" />
            <span>The future of property operations</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-balance">
            Smarter cleaning for high-traffic properties.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl text-balance leading-relaxed">
            Rocket Solutions helps multifamily, hotel, and commercial properties optimize cleaning and service delivery using anonymous occupancy sensing, smart task routing, and service verification.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/pilot-program"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-all shadow-lg hover:shadow-primary/25"
            >
              Book a Pilot Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-white/10 dark:bg-slate-900/10 border border-white/20 rounded-lg hover:bg-white/20 dark:bg-slate-900/20 transition-all backdrop-blur-sm"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="bg-surface dark:bg-slate-900 py-12 border-b border-surface-dark dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-center text-navy dark:text-white/60 uppercase tracking-widest mb-8">
            Designed for operational excellence at scale
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70 items-center justify-items-center grayscale">
            {/* Placeholder trust marks suitable for launch MVP */}
            <div className="flex items-center gap-2 font-bold text-xl text-navy dark:text-white"><Building2 className="w-8 h-8"/> Class-A Properties</div>
            <div className="flex items-center gap-2 font-bold text-xl text-navy dark:text-white"><MapPin className="w-8 h-8"/> Multi-Family</div>
            <div className="flex items-center gap-2 font-bold text-xl text-navy dark:text-white"><BarChart3 className="w-8 h-8"/> Measured ROI</div>
            <div className="flex items-center gap-2 font-bold text-xl text-navy dark:text-white"><Shield className="w-8 h-8"/> Privacy First</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 lg:py-32 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Fixed cleaning schedules are wasting your labor.</h2>
            <p className="text-lg text-navy dark:text-white/70 text-balance">
              Most properties operate in the dark—cleaning empty rooms while high-traffic areas become a mess.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-surface dark:bg-slate-900 rounded-2xl border border-surface-dark dark:border-slate-800">
              <Clock className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Wasted Labor</h3>
              <p className="text-navy dark:text-white/70">Staff spend hours cleaning underutilized spaces simply because the schedule says so.</p>
            </div>
            <div className="p-8 bg-surface dark:bg-slate-900 rounded-2xl border border-surface-dark dark:border-slate-800">
              <Building2 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">Missed Peak Usage</h3>
              <p className="text-navy dark:text-white/70">High-traffic amenities get dirty fast. Complaints happen before you even know there's a problem.</p>
            </div>
            <div className="p-8 bg-surface dark:bg-slate-900 rounded-2xl border border-surface-dark dark:border-slate-800">
              <BarChart3 className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-bold text-navy dark:text-white mb-3">No Visibility</h3>
              <p className="text-navy dark:text-white/70">Property managers lack real-time proof that service actually happened when and where it was needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section (How It Works Preview) */}
      <section className="bg-navy dark:bg-navy-dark text-white py-20 lg:py-32 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl leading-tight font-bold mb-6">Occupancy-based optimization transforms operations.</h2>
              <p className="text-lg text-slate-300 mb-8">
                Rocket Solutions brings real-time data to space management. We focus on common-area quality and efficient service delivery, completely anonymously.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: 'Sense Activity', desc: 'Privacy-first sensors detect usage patterns in high-traffic zones.' },
                  { title: 'Score Priority', desc: 'Our system identifies which areas actually need attention.' },
                  { title: 'Route Service', desc: 'Directs staff or vendors precisely to where they are most needed.' },
                  { title: 'Verify Completion', desc: 'Logs cleaning execution to give managers a reliable audit trail.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] bg-navy-light rounded-2xl border border-slate-700/50 p-6 shadow-2xl overflow-hidden relative">
                {/* Simulated dashboard UI */}
                <div className="absolute top-0 left-0 right-0 h-12 border-b border-slate-700/50 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="mt-10 space-y-4">
                  <div className="h-8 w-1/3 bg-slate-700/50 rounded animate-pulse"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-primary/20 rounded border border-primary/30 flex flex-col justify-center px-4">
                       <span className="text-sm text-primary uppercase font-bold tracking-wider">High Priority</span>
                       <span className="text-white font-bold text-lg">Main Lobby</span>
                    </div>
                    <div className="h-24 bg-slate-800 rounded flex flex-col justify-center px-4">
                       <span className="text-sm text-slate-400 uppercase font-bold tracking-wider">Clean</span>
                       <span className="text-white font-bold text-lg">2nd Fl Lounge</span>
                    </div>
                  </div>
                  <div className="h-48 bg-slate-800 rounded mt-4 p-4">
                     <div className="flex justify-between items-center border-b border-slate-700 pb-2 mb-2">
                        <span className="text-slate-300 font-medium">Recent Services</span>
                        <span className="text-primary text-sm">View All</span>
                     </div>
                     <div className="space-y-3 mt-4">
                        <div className="flex justify-between items-center text-sm">
                           <span className="text-slate-400">Gym Restroom A</span>
                           <span className="text-green-400 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Verified</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                           <span className="text-slate-400">Clubhouse Kitchen</span>
                           <span className="text-green-400 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Verified</span>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Preview */}
      <section className="py-20 lg:py-32 bg-surface dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Built for complex property operations.</h2>
            <p className="text-lg text-navy dark:text-white/70">
              A smarter framework crafted for specific industry use cases.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Multifamily', desc: 'Ensure clubhouse, gym, and lobbies meet resident expectations during peak hours.' },
              { title: 'Hotels', desc: 'Optimize common-area turnover without disturbing guest experience.' },
              { title: 'Commercial', desc: 'Adapt cleaning routines dynamically as office occupancy fluctuates daily.' },
              { title: 'Mixed-Use', desc: 'Harmonize public retail areas with private residential zones seamlessly.' },
            ].map((industry, i) => (
              <div key={i} className="group bg-white dark:bg-slate-900 p-6 rounded-2xl border border-surface-dark dark:border-slate-800 hover:border-primary/50 transition-all hover:shadow-lg">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2 group-hover:text-primary transition-colors">{industry.title}</h3>
                <p className="text-sm text-navy dark:text-white/70 leading-relaxed mb-4">{industry.desc}</p>
                <Link href="/industries" className="text-primary text-sm font-semibold inline-flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pilot CTA */}
      <section className="relative py-24 bg-navy dark:bg-navy-dark text-center px-4 sm:px-6 transition-colors">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start your first pilot.</h2>
          <p className="text-xl text-slate-300 mb-10 text-balance">
            Deploy in one property. Target your highest-traffic zones.
            Measure the ROI and operational impact immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/pilot-program"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-navy dark:text-white bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-lg"
            >
              Request a Pilot Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 dark:bg-slate-900/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
