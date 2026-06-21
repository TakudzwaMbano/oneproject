'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { OptimizedImage } from '../components/OptimizedImage';
import building from '../../images/new hero.jpeg';
import building5 from '../../images/building5.jpg';
import cabin from '../../images/cabin.jpg';
import bathroom from '../../images/bathroom.jpg';
import electrcalwiring from '../../images/electrcalwiring.jpg';
import electrical from '../../images/electrical.jpg';
import electrical4 from '../../images/electrical4.jpeg';
import electrical5 from '../../images/electrical5.jpeg';
import electrical6 from '../../images/electrical6.jpeg';
import flooring from '../../images/flooring.jpg';
import heroImage from '../../images/hero.jpg';
import IMG20260615 from '../../images/IMG-20260615-WA0020.jpg';
import IMG20260617WA0034 from '../../images/IMG-20260617-WA0034.jpg';
import IMG20260617WA0045 from '../../images/IMG-20260617-WA0045.jpg';
import IMG20260617WA0050 from '../../images/IMG-20260617-WA0050.jpg';
import IMG20260617WA0052 from '../../images/IMG-20260617-WA0052.jpg';
import IMG20260617WA0057 from '../../images/IMG-20260617-WA0057.jpg';
import IMG20260617WA0058 from '../../images/IMG-20260617-WA0058.jpg';
import IMG20260617WA0061 from '../../images/IMG-20260617-WA0061.jpg';
import IMG20260617WA0062 from '../../images/IMG-20260617-WA0062.jpg';
import IMG20260617WA0063 from '../../images/IMG-20260617-WA0063.jpg';
import IMG20260617WA0064 from '../../images/IMG-20260617-WA0064.jpg';
import IMG20260617WA0065 from '../../images/IMG-20260617-WA0065.jpg';
import IMG20260617WA0067 from '../../images/IMG-20260617-WA0067.jpg';
import IMG20260617WA0071 from '../../images/IMG-20260617-WA0071.jpg';
import IMG20260617WA0073 from '../../images/IMG-20260617-WA0073.jpg';
import IMG20260617WA0075 from '../../images/IMG-20260617-WA0075.jpg';
import IMG20260617WA0076 from '../../images/IMG-20260617-WA0076.jpg';
import plumb2 from '../../images/plumb2.jpg';
import plumbin3 from '../../images/plumbin3.jpg';
import plumbin4 from '../../images/plumbin4.jpg';
import plumbing from '../../images/plumbing.jpg';
import tiling from '../../images/tiling.jpg';
import tiling3 from '../../images/tiling3.jpg';
import toilet from '../../images/toilet.jpg';
import woodenfloor1 from '../../images/woodenfloor1.jpeg';
import woodenfloor2 from '../../images/woodenfloo2.jpeg';

const galleryImages = [
  { src: building, alt: 'Nutec house exterior', caption: 'Nutec house exterior' },
  { src: building5, alt: 'Commercial project elevation', caption: 'Commercial build finish' },
  { src: cabin, alt: 'Wendy house project', caption: 'Wendy house installation' },
  { src: bathroom, alt: 'Finished bathroom renovation', caption: 'Bathroom renovation' },
  { src: electrcalwiring, alt: 'Electrical wiring installation', caption: 'Electrical installation' },
  { src: electrical, alt: 'Completed electrical upgrade', caption: 'Electrical upgrade' },
  { src: electrical4, alt: 'Electrical panel work', caption: 'Electrical panel' },
  { src: electrical5, alt: 'Electrical conduit installation', caption: 'Conduit installation' },
  { src: electrical6, alt: 'Professional electrical service', caption: 'Electrical service' },
  { src: flooring, alt: 'Flooring installation', caption: 'Flooring and tiling' },
  { src: heroImage, alt: 'Construction site overview', caption: 'Project overview' },
  { src: IMG20260615, alt: 'Structural framing progress', caption: 'Structural framing' },
  { src: IMG20260617WA0034, alt: 'Site progress photo', caption: 'Site progress' },
  { src: IMG20260617WA0045, alt: 'Finished exterior detail', caption: 'Exterior detail' },
  { src: IMG20260617WA0050, alt: 'Specialized build work', caption: 'Specialized build' },
  { src: IMG20260617WA0052, alt: 'Project completion photo', caption: 'Completion view' },
  { src: IMG20260617WA0057, alt: 'Construction detail shot', caption: 'Construction detail' },
  { src: IMG20260617WA0058, alt: 'Property improvement work', caption: 'Property improvement' },
  { src: IMG20260617WA0061, alt: 'Project craftsmanship', caption: 'Craftsmanship' },
  { src: IMG20260617WA0062, alt: 'Modern building finish', caption: 'Modern finish' },
  { src: IMG20260617WA0063, alt: 'Exterior paving work', caption: 'Paving work' },
  { src: IMG20260617WA0064, alt: 'Exterior wall detail', caption: 'Wall detail' },
  { src: IMG20260617WA0065, alt: 'Professional site work', caption: 'Site work' },
  { src: IMG20260617WA0067, alt: 'Renovation project', caption: 'Renovation progress' },
  { src: IMG20260617WA0071, alt: 'Project entrance view', caption: 'Entrance view' },
  { src: IMG20260617WA0073, alt: 'Project detail imagery', caption: 'Detail imagery' },
  { src: IMG20260617WA0075, alt: 'Construction quality check', caption: 'Quality check' },
  { src: IMG20260617WA0076, alt: 'Final project presentation', caption: 'Final presentation' },
  { src: plumb2, alt: 'Plumbing installation', caption: 'Plumbing work' },
  { src: plumbin3, alt: 'Plumbing project detail', caption: 'Plumbing detail' },
  { src: plumbin4, alt: 'Finished plumbing fit-out', caption: 'Plumbing fit-out' },
  { src: plumbing, alt: 'Pipework installation', caption: 'Pipework installation' },
  { src: tiling, alt: 'Floor tiling detail', caption: 'Floor tiling' },
  { src: tiling3, alt: 'Tiling finish', caption: 'Tiling finish' },
  { src: woodenfloor1, alt: 'Wooden floor installation', caption: 'Wooden floor installation' },
  { src: woodenfloor2, alt: 'Wide plank wooden floor', caption: 'Wide plank wooden floor' },
  { src: toilet, alt: 'Sanitary installation', caption: 'Sanitary installation' },
];

function clampIndex(index: number, length: number) {
  return (index + length) % length;
}

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = useMemo(
    () => (activeIndex !== null ? galleryImages[activeIndex] : null),
    [activeIndex]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveIndex(null);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === null ? null : clampIndex(current + 1, galleryImages.length)
        );
      }
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === null ? null : clampIndex(current - 1, galleryImages.length)
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <main className="min-h-screen bg-gray-50 text-brand-charcoal">
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-green">
              Gallery
            </p>
            <h1 className="text-4xl font-semibold tracking-tight">
              Professional work. Every detail captured.
            </h1>
            <p className="max-w-2xl text-gray-600 leading-relaxed">
              Explore our full project gallery with high-impact images of Nutec houses, Wendy houses, plumbing, electrical, flooring, painting, and paving projects.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#services"
                className="inline-flex items-center justify-center border border-brand-charcoal px-5 py-3 text-sm font-semibold uppercase tracking-wide text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {galleryImages.map((image, index) => (
            <article
              key={`${image.caption}-${index}`} 
              className="overflow-hidden border border-gray-200 bg-white"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group block w-full text-left"
              >
                <div className="relative h-80 w-full overflow-hidden transition duration-500 ease-out group-hover:brightness-90">
                  <OptimizedImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                </div>
                <div className="px-4 py-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-charcoal">
                    {image.caption}
                  </p>
                </div>
              </button>
            </article>
          ))}
        </div>
      </section>

      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8">
          <div className="relative w-full max-w-6xl">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-0 top-0 z-20 inline-flex h-12 w-12 items-center justify-center rounded-none bg-white text-brand-charcoal shadow-lg transition-colors hover:bg-brand-gray hover:text-white"
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>

            <div className="relative h-[75vh] overflow-hidden rounded-none bg-black">
              <OptimizedImage
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                quality={70}
                loading="eager"
                sizes="100vw"
              />
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-200">
                {activeImage.caption}
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === null
                        ? null
                        : clampIndex(current - 1, galleryImages.length)
                    )
                  }
                  className="inline-flex items-center justify-center rounded-none border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-brand-green hover:bg-brand-green hover:text-white"
                >
                  <ChevronLeft className="mr-2" size={18} />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((current) =>
                      current === null
                        ? null
                        : clampIndex(current + 1, galleryImages.length)
                    )
                  }
                  className="inline-flex items-center justify-center rounded-none border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-brand-green hover:bg-brand-green hover:text-white"
                >
                  Next
                  <ChevronRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
