import type { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/Forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Rocket Solutions',
  description: 'Get in touch to discuss occupancy-based cleaning optimization for your property.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      
      <section className="bg-navy py-16 lg:py-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's talk operations.</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out to schedule a consultation, request a pilot, or explore a strategic partnership.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 lg:-mt-20 relative z-10 w-full">
         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-xl">
               <h2 className="text-3xl font-bold text-navy mb-8">Get In Touch</h2>
               
               <div className="space-y-8">
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                     </div>
                     <div>
                        <h4 className="font-bold text-navy text-lg mb-1">Email Us</h4>
                        <a href="mailto:hello@rocketsolutions.com" className="text-slate-600 hover:text-primary transition-colors">hello@rocketsolutions.com</a>
                     </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                     </div>
                     <div>
                        <h4 className="font-bold text-navy text-lg mb-1">Service Area</h4>
                        <p className="text-slate-600">Nationwide (US) Deployment</p>
                     </div>
                  </div>
               </div>

               <hr className="my-10 border-slate-200" />

               <div>
                  <h4 className="font-bold text-navy text-lg mb-4">Want a demo immediately?</h4>
                  <p className="text-slate-600 mb-6">Tell us your pain points and property size using the form, and we'll prep a tailored consultation walkthrough for your team.</p>
               </div>
            </div>

            <div className="lg:col-span-7">
               <ContactForm />
            </div>

         </div>
      </section>
    </div>
  );
}
