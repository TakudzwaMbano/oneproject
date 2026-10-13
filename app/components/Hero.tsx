'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import houseImage from '../../images/nutechouse10.jpeg';

export default function Hero() {
  return (
    <>
      <section className="bg-brand-green py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl font-black leading-none tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                Nutec and Wendy houses, built to last.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                We supply, deliver and install Nutec houses and Wendy houses in Cape Town and across the Western Cape, and handle the plumbing, electrical, flooring, painting and paving too.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-brand-green transition-colors hover:bg-brand-gray"
                >
                  Get a free quote
                </Link>
                <a
                  href="https://wa.me/27842785134?text=Hi%2C%20I%20need%20a%20quote"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand-green"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="relative aspect-[4/3] w-full max-w-[560px] overflow-hidden border border-white/20 shadow-xl">
                <Image
                  src={houseImage}
                  alt="Completed Nutec house with windows and sliding entrance"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-brand-green/95 text-white">
        <div className="mx-auto max-w-6xl px-6 py-4 lg:px-8">
          <ul className="flex flex-wrap items-center justify-between gap-3 text-sm font-medium text-white/90">
            {['Supply and installation', 'Delivered to site', 'Plumbing and electrical in-house', 'Quotes on WhatsApp'].map((item) => (
              <li key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
