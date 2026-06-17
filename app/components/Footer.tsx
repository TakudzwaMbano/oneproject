'use client';

import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Nutec Houses', href: '#services' },
  { name: 'Wendy Houses', href: '#services' },
  { name: 'Plumbing', href: '#services' },
  { name: 'Electrical', href: '#services' },
  { name: 'Flooring', href: '#services' },
  { name: 'Painting & Paving', href: '#services' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="text-xl font-bold text-white">GREENBUILD</span>
              <span className="block text-[10px] font-medium tracking-widest uppercase text-brand-green mt-1">
                NUTEC & WENDY HOUSES
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Greenbuild Security and Energy (PVT) LTD specializes in premium Nutec houses, Wendy houses, and comprehensive property improvement services across South Africa.
            </p>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-green flex-shrink-0" />
              <a
                href="mailto:sibandadanzel@gmail.com"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                sibandadanzel@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                <div>
                  <span className="block text-sm text-gray-400">Phone</span>
                  <a
                    href="tel:+27719012337"
                    className="text-sm text-white hover:text-brand-green transition-colors"
                  >
                    +27 71 901 2337
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-green flex-shrink-0" />
                <div>
                  <span className="block text-sm text-gray-400">
                    Alternative
                  </span>
                  <a
                    href="tel:+27842785134"
                    className="text-sm text-white hover:text-brand-green transition-colors"
                  >
                    +27 84 278 5134
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8">
          <p className="text-sm text-gray-500 text-center">
            2026 Greenbuild Security and Energy (PVT) LTD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
