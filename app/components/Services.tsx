'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Warehouse, Droplets, Zap, Layers, Paintbrush } from 'lucide-react';

const services = [
  {
    slug: 'nutec-houses',
    icon: Home,
    title: 'Nutec Houses',
    description:
      'Premium Nutec board construction for durable, weather-resistant structures built to last.',
  },
  {
    slug: 'wendy-houses',
    icon: Warehouse,
    title: 'Wendy Houses',
    description:
      'Custom Wendy houses for extra living space, home offices, or garden rooms.',
  },
  {
    slug: 'plumbing',
    icon: Droplets,
    title: 'Plumbing',
    description:
      'Expert plumbing installation and repairs for residential and commercial properties.',
  },
  {
    slug: 'electrical',
    icon: Zap,
    title: 'Electrical',
    description:
      'Professional electrical services including wiring, installations, and safety inspections.',
  },
  {
    slug: 'flooring',
    icon: Layers,
    title: 'Flooring',
    description:
      'Quality flooring solutions from tile to hardwood, installed with precision and care.',
  },
  {
    slug: 'painting-paving',
    icon: Paintbrush,
    title: 'Painting & Paving',
    description:
      'Complete painting services and professional paving for driveways and outdoor areas.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal">
            Our Services
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.slug} className="group h-full">
              <Link
                href={`/services/${service.slug}`}
                aria-label={`Learn more about ${service.title}`}
                className="block h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full bg-white p-8 shadow-lg shadow-slate-900/5 border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-brand-green"
                >
                  <service.icon className="w-10 h-10 text-brand-green mb-6" />
                  <h3 className="text-2xl font-bold text-brand-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
