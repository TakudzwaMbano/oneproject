'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Get in touch with our team for professional Nutec house, Wendy house, plumbing, electrical, flooring, painting, and paving services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-brand-green text-white hover:bg-brand-green-dark transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wide border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
