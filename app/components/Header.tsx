'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import logoImage from '../../images/logo.png';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden">
              <Image
                src={logoImage}
                alt="Greenbuild logo"
                sizes="48px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${
                  isScrolled ? 'text-brand-charcoal' : 'text-white'
                }`}
              >
                GREENBUILD
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase transition-colors ${
                  isScrolled ? 'text-brand-green' : 'text-brand-green'
                }`}
              >
                NUTEC & WENDY HOUSES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-green ${
                  isScrolled ? 'text-brand-charcoal' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold uppercase tracking-wide bg-brand-green text-white hover:bg-brand-green-dark transition-colors"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex h-12 w-12 items-center justify-center border transition-all duration-300 ${
              isScrolled
                ? 'border-brand-charcoal text-brand-charcoal bg-white'
                : 'border-white text-white bg-white/10'
            } hover:bg-white hover:text-brand-charcoal`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-20 z-40 bg-white border-b border-gray-200 shadow-lg lg:hidden"
            >
              <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-6 py-6">
                <div className="mb-6 border-b border-gray-200 pb-6">
                  <p className="text-xs font-semibold tracking-[0.35em] uppercase text-brand-green mb-3">
                    Navigation
                  </p>
                  <h2 className="text-2xl font-semibold text-brand-charcoal">
                    Explore Greenbuild
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Quick access to services, gallery, and contact.
                  </p>
                </div>

                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-sm px-4 py-4 text-base font-semibold uppercase tracking-[0.15em] text-brand-charcoal transition-colors hover:bg-brand-gray"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-none bg-brand-green px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-green-dark"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
