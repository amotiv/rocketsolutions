'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface p-10 rounded-2xl border border-green-200 text-center shadow-xl">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Message Sent</h3>
        <p className="text-slate-600 mb-6">Our team will reach out to you shortly to discuss your property needs.</p>
        <button onClick={() => setSubmitted(false)} className="text-primary font-medium hover:underline">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-3xl border border-surface-dark shadow-2xl space-y-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy/80 mb-1">Full Name *</label>
          <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy/80 mb-1">Company *</label>
          <input required type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Acme Management" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-navy/80 mb-1">Role/Title *</label>
          <input required type="text" id="role" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Operations Director" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy/80 mb-1">Work Email *</label>
          <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="jane@company.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy/80 mb-1">Phone Number</label>
          <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="(555) 123-4567" />
        </div>
        <div>
           <label htmlFor="propertyType" className="block text-sm font-medium text-navy/80 mb-1">Property Type</label>
           <select id="propertyType" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow">
               <option value="">Select...</option>
               <option value="multifamily">Multifamily</option>
               <option value="hotel">Hotel</option>
               <option value="commercial">Commercial/Office</option>
               <option value="other">Other</option>
           </select>
        </div>
        <div>
          <label htmlFor="locations" className="block text-sm font-medium text-navy/80 mb-1">Locations (#)</label>
          <input type="number" id="locations" min="1" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="1" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-navy/80 mb-1">City</label>
          <input type="text" id="city" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Austin" />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-navy/80 mb-1">State</label>
          <input type="text" id="state" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="TX" />
        </div>
      </div>

      <div className="space-y-3">
         <label className="block text-sm font-medium text-navy/80">I am interested in: *</label>
         <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
               <input type="checkbox" className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary" value="pilot" />
               <span className="text-sm text-slate-700">Pilot Program</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
               <input type="checkbox" className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary" value="consultation" />
               <span className="text-sm text-slate-700">General Consultation</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
               <input type="checkbox" className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary" value="partnership" />
               <span className="text-sm text-slate-700">Partnership</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
               <input type="checkbox" className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary" value="vendor" />
               <span className="text-sm text-slate-700">Vendor Inquiry</span>
            </label>
         </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy/80 mb-1">Message</label>
        <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" placeholder="Tell us about your operations..."></textarea>
      </div>

      <button type="submit" className="w-full bg-navy text-white hover:bg-navy-light font-bold py-4 px-8 rounded-lg transition-colors shadow-xl">
        Send Message
      </button>
    </form>
  );
}
