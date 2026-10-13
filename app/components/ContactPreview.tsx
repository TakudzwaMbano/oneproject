'use client';

import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function ContactPreview() {
  const phoneNumberDisplay = '071 901 2337';
  const telHref = 'tel:+27719012337';
  const waNumberDisplay = '084 278 5134';
  const waHref = 'https://wa.me/27842785134';

  function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      'Hi Greenbuild, I would like a quote.',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `What do you need?: ${formData.get('service')}`,
      `Town or city: ${formData.get('location')}`,
      `Size or details: ${formData.get('details') || 'Not provided'}`,
    ].join('\n');

    window.open(`${waHref}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="contact" className="bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="self-start"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">
            Greenbuild Security and Energy (Pty) Ltd
          </p>
          <h2 className="mb-5 text-4xl font-bold text-brand-charcoal md:text-5xl">Get a free quote</h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-brand-charcoal/80">
            Fill in the form and it opens WhatsApp with your details ready to send. Or call us directly.
          </p>
          <div className="space-y-3 text-lg font-bold text-brand-charcoal sm:text-xl">
            <a href={telHref} className="block w-fit hover:text-brand-green">{phoneNumberDisplay}</a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="block w-fit hover:text-brand-green">{waNumberDisplay}</a>
            <a href="mailto:sibandadanzel@gmail.com" className="block w-fit break-all hover:text-brand-green">
              sibandadanzel@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleQuoteSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid gap-5"
        >
          <label className="grid gap-2 font-semibold text-brand-charcoal" htmlFor="quote-name">
            Your name
            <input
              id="quote-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full rounded-md border-2 border-brand-line bg-white px-4 py-4 font-normal outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            />
          </label>
          <label className="grid gap-2 font-semibold text-brand-charcoal" htmlFor="quote-phone">
            Phone number
            <input
              id="quote-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className="w-full rounded-md border-2 border-brand-line bg-white px-4 py-4 font-normal outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            />
          </label>
          <label className="grid gap-2 font-semibold text-brand-charcoal" htmlFor="quote-service">
            What do you need?
            <select
              id="quote-service"
              name="service"
              className="w-full rounded-md border-2 border-brand-line bg-white px-4 py-4 font-normal outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            >
              <option>Nutec house</option>
              <option>Wendy house</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>Flooring</option>
              <option>Painting or paving</option>
            </select>
          </label>
          <label className="grid gap-2 font-semibold text-brand-charcoal" htmlFor="quote-location">
            Town or city
            <input
              id="quote-location"
              name="location"
              type="text"
              autoComplete="address-level2"
              required
              className="w-full rounded-md border-2 border-brand-line bg-white px-4 py-4 font-normal outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            />
          </label>
          <label className="grid gap-2 font-semibold text-brand-charcoal" htmlFor="quote-details">
            Size or details (optional)
            <textarea
              id="quote-details"
              name="details"
              rows={3}
              className="w-full resize-y rounded-md border-2 border-brand-line bg-white px-4 py-4 font-normal outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20"
            />
          </label>
          <button
            type="submit"
            className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-4 font-semibold text-white transition-colors hover:bg-brand-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
          >
            <MessageCircle className="h-5 w-5" />
            Send quote request on WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
