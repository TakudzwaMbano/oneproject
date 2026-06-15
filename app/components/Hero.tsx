'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/106059719/pexels-photo-106059719.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern Nutec house construction"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-6">
              GREENBUILD SECURITY AND ENERGY (PVT) LTD
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Nutec & Wendy House Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Delivering durable Nutec houses, Wendy houses, and professional property improvement services across South Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-brand-green text-white hover:bg-brand-green-dark transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wide border-2 border-white text-white hover:bg-white hover:text-brand-charcoal transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] border border-white/20">
                <Image
                  src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern wooden cabin structure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square border border-white/20">
                <Image
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Construction detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="relative aspect-[3/4] border border-white/20">
                <Image
                  src="https://images.pexels.com/photos/259936/pexels-photo-259936.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Wendy house exterior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
