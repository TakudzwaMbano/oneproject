'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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
              <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Greenbuild Security and Energy (Pty) Ltd
              </span>
              <h1 className="text-4xl font-black leading-none tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                Nutec and Wendy houses, built to last.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
                We supply, deliver and install Nutec houses and Wendy houses in Cape Town, and handle the plumbing, electrical, flooring, painting and paving too.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-brand-green transition-colors hover:bg-brand-gray"
                >
                  Get a free quote
                </Link>
                <a
                  href="https://wa.me/27842785134?text=Hi%2C%20I%20need%20a%20quote"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border-2 border-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-brand-green"
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
              <svg
                className="h-auto w-full max-w-[560px] rounded-none border border-white/20 bg-[#eaf2e4]"
                viewBox="0 0 480 360"
                role="img"
                aria-label="Illustration of a Nutec board house with a pitched roof and veranda"
              >
                <defs>
                  <pattern id="lap" width="20" height="30" patternUnits="userSpaceOnUse">
                    <rect width="20" height="30" fill="#243838" />
                    <rect y="27" width="20" height="3" fill="#355150" />
                  </pattern>
                </defs>
                <rect width="480" height="360" fill="#eaf2e4" />
                <rect y="300" width="480" height="60" fill="#c9d3c5" />
                <polygon points="60,150 240,50 420,150" fill="#3f7f18" />
                <rect x="80" y="150" width="320" height="150" fill="url(#lap)" />
                <rect x="80" y="150" width="320" height="150" fill="none" stroke="#1e2f2f" strokeWidth="2" />
                <rect x="125" y="195" width="60" height="105" fill="#6aae2e" stroke="#1e2f2f" strokeWidth="2" />
                <circle cx="173" cy="250" r="4" fill="#1e2f2f" />
                <rect x="230" y="190" width="70" height="60" fill="#fbfcfa" stroke="#1e2f2f" strokeWidth="2" />
                <path d="M265 190v60M230 220h70" stroke="#1e2f2f" strokeWidth="2" />
                <rect x="325" y="190" width="50" height="60" fill="#fbfcfa" stroke="#1e2f2f" strokeWidth="2" />
                <path d="M350 190v60" stroke="#1e2f2f" strokeWidth="2" />
                <polygon points="60,150 420,150 435,162 45,162" fill="#6aae2e" />
              </svg>
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
