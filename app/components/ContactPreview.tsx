'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const contactButtons = [
  {
    type: 'phone',
    label: '+27 71 901 2337',
    icon: Phone,
    href: 'tel:+27719012337',
    bgColor: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
  },
  {
    type: 'whatsapp',
    label: '+27 71 901 2337',
    icon: MessageCircle,
    href: 'https://wa.me/27719012337?text=Hi,%20I%20need%20a%20quote',
    bgColor: 'bg-teal-500',
    hoverColor: 'hover:bg-teal-600',
  },
  {
    type: 'email',
    label: 'Email',
    icon: Mail,
    href: 'mailto:sibandadanzel@gmail.com',
    bgColor: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
  },
];

export default function ContactPreview() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your project? Contact us through any of these channels
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-8">
          {contactButtons.map((button, index) => (
            <motion.a
              key={index}
              href={button.href}
              target={button.type === 'whatsapp' ? '_blank' : undefined}
              rel={button.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg ${button.bgColor} ${button.hoverColor} transition-all duration-300 shadow-lg`}
            >
              <button.icon className="w-6 h-6" />
              <span>{button.label}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 bg-gray-800 rounded-lg border border-gray-700 text-center"
        >
          <p className="text-gray-300 leading-relaxed">
            We are ready to discuss your project requirements and provide a detailed quote. 
            Contact us today to get started on your Nutec house, Wendy house, or property 
            improvement project. Our team will respond as quickly as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
