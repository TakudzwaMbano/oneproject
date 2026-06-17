'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Users, Shield, Wallet, Clock, ThumbsUp } from 'lucide-react';
import reasonImage from '../../images/building5.jpg';

const reasons = [
  {
    icon: Users,
    title: 'Experienced Professionals',
  },
  {
    icon: Shield,
    title: 'Quality Materials',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
  },
  {
    icon: Clock,
    title: 'Reliable Delivery',
  },
  {
    icon: CheckCircle,
    title: 'Attention to Detail',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1fr] items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden shadow-2xl"
          >
            <div className="aspect-[4/5] relative">
              <Image
                src={reasonImage}
                alt="Professional construction work"
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
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-10">
              Why Clients Choose Greenbuild
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green"
                >
                  <reason.icon className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span className="font-semibold text-brand-charcoal">
                    {reason.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
