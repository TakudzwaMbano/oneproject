'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sibandadanzel@gmail.com',
    href: 'mailto:sibandadanzel@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+27 71 901 2337',
    href: 'https://wa.me/27719012337?text=Hi,%20I%20need%20a%20quote',
  },
  {
    icon: Phone,
    label: 'Alternative',
    value: '+27 84 278 5134',
    href: 'tel:+27842785134',
  },
  {
    icon: MapPin,
    label: 'Coverage',
    value: 'South Africa',
    href: null,
  },
];

export default function ContactPreview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceText = formData.service || 'General inquiry';
    const messageText = `Hello Greenbuild, I would like a quote for: ${serviceText}.\nName: ${formData.name}.\nEmail: ${formData.email}.\nPhone: ${formData.phone}.\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/27719012337?text=${encodeURIComponent(messageText)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-charcoal mb-8">
              Contact Us
            </h2>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-brand-green flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block text-lg font-semibold text-brand-charcoal hover:text-brand-green transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="block text-lg font-semibold text-brand-charcoal">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-brand-gray border-l-4 border-brand-green">
              <p className="text-gray-600 leading-relaxed">
                We are ready to discuss your project requirements and provide a
                detailed quote. Contact us today to get started on your Nutec
                house, Wendy house, or property improvement project.
              </p>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-brand-gray p-8 lg:p-10">
              <h3 className="text-xl font-bold text-brand-charcoal mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-brand-green mx-auto mb-4 flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-brand-charcoal mb-2">
                    Message Sent
                  </h4>
                  <p className="text-gray-600">
                    Thank you for contacting us. We will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-brand-charcoal mb-2 uppercase tracking-wide"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-charcoal focus:border-brand-green focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-brand-charcoal mb-2 uppercase tracking-wide"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-charcoal focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-brand-charcoal mb-2 uppercase tracking-wide"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-charcoal focus:border-brand-green focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-semibold text-brand-charcoal mb-2 uppercase tracking-wide"
                    >
                      Service Required
                    </label>
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-charcoal focus:border-brand-green focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="nutec">Nutec Houses</option>
                      <option value="wendy">Wendy Houses</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="flooring">Flooring</option>
                      <option value="painting">Painting & Paving</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-brand-charcoal mb-2 uppercase tracking-wide"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-white border border-gray-300 text-brand-charcoal focus:border-brand-green focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wide bg-brand-green text-white hover:bg-brand-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
