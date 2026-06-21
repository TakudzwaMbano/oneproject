'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import project1 from '../../images/new hero.jpeg';
import project2 from '../../images/nutechouse10.jpeg';
import project3 from '../../images/building5.jpg';

const projects = [
  {
    title: 'Modern Nutec Residence',
    location: 'Johannesburg, Gauteng',
    service: 'Nutec Houses',
    image: project1,
  },
  {
    title: 'Office Overlap Nutech / Nutech Offices',
    location: 'Pretoria, Gauteng',
    service: 'Nutech Offices',
    image: project2,
  },
  {
    title: 'Complete Home Renovation',
    location: 'Cape Town, Western Cape',
    service: 'Full Service',
    image: project3,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-brand-charcoal">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-green mb-4">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h2>
          </div>
          <Link
            href="#"
            className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white hover:text-brand-green transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden bg-slate-950 shadow-2xl shadow-slate-950/20"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.location}</p>
                <span className="inline-flex bg-brand-green px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  {project.service}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
