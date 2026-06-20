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
    type: 'whatsapp',
    label: '+27 84 278 5134',
    icon: MessageCircle,
    href: 'https://wa.me/27842785134?text=Hi,%20I%20need%20a%20quote',
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
  const phoneNumberDisplay = '061 620 5964';
  const telHref = 'tel:+27616205964';
  const waHref = 'https://wa.me/27616205964?text=Hi,%20I%20need%20a%20quote';

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
        </motion.div>

        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="w-full flex justify-center gap-3 sm:gap-6 flex-nowrap">
            <motion.a
              href={telHref}
              className="inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold text-sm sm:text-lg shadow-lg border border-gray-300 whitespace-nowrap"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Phone className="w-6 h-6" />
              <span className="whitespace-nowrap">{phoneNumberDisplay}</span>
            </motion.a>

            <motion.a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-4 px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm sm:text-lg shadow-lg border border-gray-300 whitespace-nowrap"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="whitespace-nowrap">{phoneNumberDisplay}</span>
            </motion.a>
          </div>

          <motion.a
            href="mailto:sibandadanzel@gmail.com"
            className="inline-flex items-center gap-2 sm:gap-4 px-8 sm:px-12 py-3 sm:py-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-sm sm:text-lg shadow-lg border border-gray-300 mx-auto mt-2 whitespace-nowrap"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <Mail className="w-6 h-6" />
            <span className="whitespace-nowrap">Email</span>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 p-8 bg-gray-800 rounded-lg border border-gray-700 text-center"
        >
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We are ready to discuss your project requirements and provide a detailed quote. Contact us today to get started — our team will
            respond as quickly as possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
