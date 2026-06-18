'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../../images/hero.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-charcoal">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
      >
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-charcoal/75" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-6">
              GREENBUILD SECURITY AND ENERGY (PTY) LTD
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Nutec & Wendy House Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Delivering durable Nutec houses, Wendy houses, and professional property improvement services across South Africa.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-brand-green text-white hover:bg-brand-green-dark transition-colors sm:w-auto"
              >
                Request a Quote
              </Link>
              <Link
                href="#projects"
                className="inline-flex w-full items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wide border-2 border-white text-white hover:bg-white hover:text-brand-charcoal transition-colors sm:w-auto"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
