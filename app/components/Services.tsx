'use client';

import { motion } from 'framer-motion';
import { Home, Warehouse, Droplets, Zap, Layers, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Nutec Houses',
    description:
      'Premium Nutec board construction for durable, weather-resistant structures built to last.',
  },
  {
    icon: Warehouse,
    title: 'Wendy Houses',
    description:
      'Custom Wendy houses for extra living space, home offices, or garden rooms.',
  },
  {
    icon: Droplets,
    title: 'Plumbing',
    description:
      'Expert plumbing installation and repairs for residential and commercial properties.',
  },
  {
    icon: Zap,
    title: 'Electrical',
    description:
      'Professional electrical services including wiring, installations, and safety inspections.',
  },
  {
    icon: Layers,
    title: 'Flooring',
    description:
      'Quality flooring solutions from tile to hardwood, installed with precision and care.',
  },
  {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 border border-gray-200 hover:border-brand-green transition-colors"
            >
              <service.icon className="w-10 h-10 text-brand-green mb-6" />
              <h3 className="text-xl font-bold text-brand-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
