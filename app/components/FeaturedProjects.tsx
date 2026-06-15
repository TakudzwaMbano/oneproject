'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Modern Nutec Residence',
    location: 'Johannesburg, Gauteng',
    service: 'Nutec Houses',
    image:
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Garden Wendy House',
    location: 'Pretoria, Gauteng',
    service: 'Wendy Houses',
    image:
      'https://images.pexels.com/photos/259936/pexels-photo-259936.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Complete Home Renovation',
    location: 'Cape Town, Western Cape',
    service: 'Full Service',
    image:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project.location}</p>
                </div>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide bg-brand-green text-white">
                  {project.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
