'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, Truck, MapPin } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    text: 'Professional Installation',
  },
  {
    icon: Award,
    text: 'Quality Workmanship',
  },
  {
    icon: Truck,
    text: 'Reliable Delivery',
  },
  {
    icon: MapPin,
    text: 'South African Service Coverage',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-charcoal py-6 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-4"
            >
              <item.icon className="w-6 h-6 text-brand-green flex-shrink-0" />
              <span className="text-sm font-medium text-white uppercase tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
