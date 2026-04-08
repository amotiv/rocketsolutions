'use client';

import Link from 'next/link';
import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';

const NAV_LINKS = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pilot Program', href: '/pilot-program' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-surface-dark dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <span className="font-bold text-xl tracking-tight text-navy dark:text-white">
                Rocket Solutions
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-navy dark:text-white/70 hover:text-primary transition-colors flex items-center"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-8 ml-2">
              <ThemeToggle />
              <Link
                href="/login"
                className="text-sm font-bold text-navy dark:text-white hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                href="/contact"
                 className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover shadow-sm transition-all hover:shadow-md"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy dark:text-white hover:text-primary hover:bg-surface-dark dark:hover:bg-slate-800 transition-colors focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-surface-dark dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 shadow-lg">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-navy dark:text-white/80 hover:text-primary hover:bg-surface dark:hover:bg-slate-800 dark:bg-slate-900 rounded-md transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-surface-dark dark:border-slate-800 space-y-3">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-base font-bold text-navy dark:text-white hover:text-primary hover:bg-surface dark:hover:bg-slate-800 dark:bg-slate-900 rounded-md transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover shadow-sm"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
