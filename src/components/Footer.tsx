import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Rocket Solutions
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Optimizing property cleaning and facility operations with anonymous occupancy sensing and smart task routing.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions" className="text-sm text-slate-400 hover:text-white transition-colors">Solutions</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/pilot-program" className="text-sm flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                  Pilot Program
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary">New</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/industries" className="text-sm text-slate-400 hover:text-white transition-colors">Industries</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal & Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
              </li>
              <li className="pt-4 border-t border-slate-800 mt-4">
                <a href="mailto:hello@rocketsolutions.com" className="hover:text-white transition-colors">hello@rocketsolutions.com</a>
              </li>
              <li>
                Service Area: Nationwide (US)
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Rocket Solutions. All rights reserved.
          </p>
          <div className="text-sm text-slate-500 flex items-center gap-1">
            Designed for better property operations.
          </div>
        </div>
      </div>
    </footer>
  );
}
