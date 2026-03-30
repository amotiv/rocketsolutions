'use client';

import { useState } from 'react';

export default function PilotForm() {
  const [submitted, setSubmitted] = useState(false);

  // A basic mock form submission. In production, this would hit an API endpoint connected to a CRM.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-surface p-8 rounded-2xl border border-green-200 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Request Received</h3>
        <p className="text-slate-600 mb-6">Thank you for your interest in a Rocket Solutions Pilot. Our team will contact you within 24 hours to schedule your consultation.</p>
        <button onClick={() => setSubmitted(false)} className="text-primary font-medium hover:underline">Submit another request</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-surface-dark shadow-xl space-y-6">
      <h3 className="text-2xl font-bold text-navy mb-6">Request Your Pilot Consultation</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy/80 mb-1">Full Name *</label>
          <input required type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy/80 mb-1">Work Email *</label>
          <input required type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="jane@property.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy/80 mb-1">Company *</label>
          <input required type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Acme Management" />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-navy/80 mb-1">Role/Title</label>
          <input type="text" id="role" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Regional Manager" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium text-navy/80 mb-1">Property Type *</label>
          <select required id="propertyType" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow">
            <option value="">Select a type...</option>
            <option value="multifamily">Multifamily</option>
            <option value="hotel">Hotel / Resort</option>
            <option value="commercial">Commercial / Office</option>
            <option value="mixed">Mixed-Use</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="size" className="block text-sm font-medium text-navy/80 mb-1">Units / Rooms / Sq Ft</label>
          <input type="text" id="size" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="e.g. 300 units" />
        </div>
      </div>
      
      <div>
         <label htmlFor="currentModel" className="block text-sm font-medium text-navy/80 mb-1">Current Cleaning Model</label>
         <select id="currentModel" className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow">
            <option value="">Select...</option>
            <option value="in_house">In-House Staff</option>
            <option value="vendor">3rd Party Vendor</option>
            <option value="hybrid">Hybrid</option>
         </select>
      </div>

      <div>
        <label htmlFor="painPoint" className="block text-sm font-medium text-navy/80 mb-1">Biggest Cleaning Challenge</label>
        <textarea id="painPoint" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" placeholder="What are you hoping to solve?"></textarea>
      </div>

      <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-primary/30">
        Request Consultation
      </button>
      <p className="text-xs text-center text-slate-500 mt-4">By submitting this form, you agree to our Privacy Policy.</p>
    </form>
  );
}
