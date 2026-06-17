'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import aboutImage from '../../images/building.jpg';

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden shadow-2xl"
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={aboutImage}
                alt="Professional construction team at work"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-6">
              Building Quality Structures That Last
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Greenbuild Nutec and Wendy Houses specializes in the delivery and installation of premium Nutec houses and Wendy houses. Our team also provides expert plumbing, electrical, flooring, painting, and paving solutions for residential and commercial clients.
            </p>
            <Link
              href="#services"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-brand-charcoal text-white hover:bg-black transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
