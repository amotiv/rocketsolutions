import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Rocket Solutions',
  description: 'Terms and conditions governing the use of the Rocket Solutions website and informational resources.',
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-surface py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-8 border-b border-slate-200 pb-6">Terms of Use</h1>
            
            <div className="prose prose-slate max-w-none text-slate-600 space-y-8">
               <p><em>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</em></p>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">1. Agreement to Terms</h2>
                  <p>
                     By accessing or using the Rocket Solutions website (the "Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use our Site.
                  </p>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">2. Informational Nature & No Guarantees</h2>
                  <p>
                     The content provided on this Site is for general informational purposes only. While we highlight the potential benefits of occupancy-based cleaning optimization, <strong>we make no guarantees regarding specific quantitative outcomes, labor savings, or operational absolute performance</strong> prior to a formalized pilot program or service contract. Every property is unique, and actual results will vary.
                  </p>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">3. Intellectual Property Ownership</h2>
                  <p>
                     All content, features, and functionality on the Site—including but not limited to design, text, graphics, logos, algorithms, methodologies, and service marks—are the exclusive property of Rocket Solutions and are protected by United States and international copyright, trademark, and intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our express written permission.
                  </p>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">4. Limitation of Liability</h2>
                  <p>
                     To the fullest extent permitted by law, Rocket Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                     <li>Your access to or use of or inability to access or use the Site;</li>
                     <li>Any conduct or content of any third party on the Site;</li>
                     <li>Any unauthorized access, use, or alteration of your transmissions or content.</li>
                  </ul>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">5. Non-Client Status</h2>
                  <p>
                     Using this website or submitting a form does not create a formal vendor-client relationship. Such a relationship is only established upon the execution of a definitive written Services Agreement or Pilot Agreement.
                  </p>
               </section>

               <section>
                  <h2 className="text-xl font-bold text-navy mb-3">6. Contact Information</h2>
                  <p>For inquiries regarding these Terms of Use, please contact us at:</p>
                  <p className="font-medium mt-2">hello@rocketsolutions.com</p>
               </section>
            </div>
         </div>
      </div>
    </div>
  );
}
