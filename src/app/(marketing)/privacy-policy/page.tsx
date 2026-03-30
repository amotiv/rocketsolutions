import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rocket Solutions',
  description: 'How Rocket Solutions handles website data and anonymous environmental sensor data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-surface py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-8 border-b border-slate-200 pb-6">Privacy Policy</h1>
            
            <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
               <p><em>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</em></p>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">1. Introduction</h2>
                  <p>
                     Rocket Solutions ("we," "our," or "us") respects your privacy. This Privacy Policy outlines how we collect, use, and handle information through our website (rocketsolutions.com) and our proprietary operational optimization systems deployed in commercial properties.
                  </p>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">2. Website Data & Analytics</h2>
                  <p>When you visit our website, we may collect standard analytical information:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                     <li><strong>Cookies & Tracking:</strong> We use basic analytics (such as Google Analytics 4) to understand how visitors interact with our site, including pages visited and time spent.</li>
                     <li><strong>Log Data:</strong> As is standard for most websites, our servers automatically record information that your browser sends.</li>
                  </ul>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">3. Lead Capture & Form Data</h2>
                  <p>When you fill out a contact form, pilot inquiry, or request a consultation, we collect the information you voluntarily provide:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                     <li>Name, Email, Phone Number</li>
                     <li>Company, Role, and Property Information</li>
                     <li>Message contents regarding your specific operational needs</li>
                  </ul>
                  <p className="mt-3">We use this data solely to respond to your inquiry and provide requested services. <strong>We do not, and will never, sell your contact information to third-party data brokers.</strong></p>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3 bg-primary/10 inline-block px-3 py-1 rounded">4. Hardware & Sensor Data Guarantees</h2>
                  <p className="mt-4">Our core service involves deploying property sensors. Our approach to privacy here is absolute:</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                     <li><strong>Anonymous Only:</strong> Our sensors measure environmental changes and motion density (e.g., "30 events in the lobby"). They do not capture who caused the event.</li>
                     <li><strong>No Optics:</strong> Our hardware does not contain cameras or optical lenses. We do not record video or capture imagery.</li>
                     <li><strong>No Audio:</strong> Our hardware does not contain microphones. We do not record or process audio conversations.</li>
                     <li><strong>No PII:</strong> The sensor data transmitted to our servers contains no Personally Identifiable Information of any resident, guest, or employee.</li>
                  </ul>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">5. Contact Us</h2>
                  <p>If you have any questions or concerns about this policy or our privacy practices, please contact us at:</p>
                  <p className="font-medium mt-2">hello@rocketsolutions.com</p>
               </section>
            </div>
         </div>
      </div>
    </div>
  );
}
