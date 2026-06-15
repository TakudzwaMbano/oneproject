'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Users, Shield, Wallet, Clock, ThumbsUp } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5]"
          >
            <Image
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional construction work"
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
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-10">
              Why Clients Choose Greenbuild
            </h2>

            <div className="grid gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 border border-gray-200 hover:border-brand-green transition-colors"
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
