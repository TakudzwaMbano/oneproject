'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3]"
          >
            <Image
              src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional construction team at work"
              fill
              className="object-cover"
            />
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
