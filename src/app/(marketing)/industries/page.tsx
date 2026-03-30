import type { Metadata } from 'next';
import { Building, Hotel, Briefcase, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Industries | Rocket Solutions',
  description: 'See how Rocket Solutions transforms operations for Multifamily, Hotels, Commercial properties, and Mixed-Use spaces.',
};

const INDUSTRIES = [
  {
    icon: <Building className="w-12 h-12 text-primary" />,
    title: 'Multifamily',
    id: 'multifamily',
    painPoints: ['Amenity spaces get dirty unpredictably', 'Wasted labor on underused areas', 'Complaints from residents'],
    zones: ['Gym', 'Clubhouse', 'Mailroom', 'Lounge', 'Restrooms', 'Corridors'],
    benefits: ['Higher service visibility', 'Better common-area cleanliness', 'Smarter labor allocation'],
    useCase: 'Rather than cleaning the gym three times a day routinely, the system alerts your staff the moment 20 people have used it, ensuring the space is always fresh for the next resident.'
  },
  {
    icon: <Hotel className="w-12 h-12 text-primary" />,
    title: 'Hotels & Resort Ops',
    id: 'hotels',
    painPoints: ['Peak lobby activity overwhelms staff', 'Public restrooms degrade quickly', 'Guest complaints impact reviews'],
    zones: ['Main Lobby', 'Public Restrooms', 'Pool Deck', 'Conference Centers', 'Elevator Banks', 'Bars & Dining Entrances'],
    benefits: ['Responsive guest experience', 'Protect 5-star brand standards', 'Reduce unnecessary rounds'],
    useCase: 'A sudden influx of conference attendees fills the lobby restroom. The system detects the traffic surge and pushes a priority ticket to the nearest porter before the space becomes unsanitary.'
  },
  {
    icon: <Briefcase className="w-12 h-12 text-primary" />,
    title: 'Commercial / Office',
    id: 'commercial',
    painPoints: ['Hybrid scheduling makes occupancy volatile', 'Paying for cleaning empty floors', 'Delayed response to conference room messes'],
    zones: ['Reception', 'Shared Kitchens', 'Conference Rooms', 'Collaborative Spaces', 'Bathrooms'],
    benefits: ['Right-size janitorial contracts', 'Eliminate ghost-cleaning', 'Maintain a premium office environment'],
    useCase: 'With hybrid work, your 4th floor might be empty on a Friday. The system redirects your night crew away from unused areas toward high-traffic collaboration zones utilized earlier that day.'
  },
  {
    icon: <Layers className="w-12 h-12 text-primary" />,
    title: 'Mixed-Use Developments',
    id: 'mixed-use',
    painPoints: ['Massive footprint is hard to monitor', 'Public retail traffic vs private residential areas', 'Unpredictable footfall events'],
    zones: ['Retail Plazas', 'Parking Garages', 'Transit Connections', 'Shared Courtyards', 'Restrooms'],
    benefits: ['Harmonize public and private cleaning', 'Dynamic storm/event response', 'Cross-functional vendor management'],
    useCase: 'During a weekend pop-up event in the retail plaza, foot traffic spikes by 300%. The system dynamically boosts cleaning frequencies for the public zones and diverts attention away from quieter residential corridors.'
  }
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-navy py-24 border-b border-slate-800 text-center px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Built for modern portfolios.
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every asset class has unique operational demands. We tailor anonymous occupancy sensing to solve your specific common-area challenges.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {INDUSTRIES.map((ind, index) => (
              <div key={ind.id} id={ind.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                   <div className="mb-6">{ind.icon}</div>
                   <h2 className="text-3xl font-bold text-navy mb-6">{ind.title}</h2>
                   
                   <div className="mb-8">
                     <p className="font-semibold text-lg text-navy mb-3">The Challenge:</p>
                     <ul className="list-disc pl-5 space-y-2 text-slate-600">
                       {ind.painPoints.map((point, i) => <li key={i}>{point}</li>)}
                     </ul>
                   </div>
                   
                   <div className="mb-8">
                     <p className="font-semibold text-lg text-navy mb-3">Key Benefits:</p>
                     <ul className="list-disc pl-5 space-y-2 text-slate-600">
                       {ind.benefits.map((point, i) => <li key={i}>{point}</li>)}
                     </ul>
                   </div>

                   <Link href="/pilot-program" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors">
                      Start a {ind.title} Pilot <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <div className="bg-surface rounded-3xl p-8 lg:p-12 border border-surface-dark shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       {ind.icon}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-navy mb-4 border-b border-slate-200 pb-4">Target Zones</h3>
                      <div className="flex flex-wrap gap-2 mb-10">
                        {ind.zones.map((zone, i) => (
                          <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
                            {zone}
                          </span>
                        ))}
                      </div>
                      
                      <div className="bg-navy rounded-xl p-6 text-white shadow-inner">
                         <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">Operational Use Case</div>
                         <p className="text-slate-300 leading-relaxed italic">"{ind.useCase}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-primary py-20 text-center px-4">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to optimize your portfolio?</h2>
            <p className="text-white/80 text-xl mb-10">Stop paying for fixed-schedule cleaning that doesn't align with your actual usage.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-primary bg-white rounded-lg hover:bg-slate-50 transition-all shadow-xl">
               Get in Touch with Our Team
            </Link>
         </div>
      </section>
    </div>
  );
}
