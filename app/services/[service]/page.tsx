import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '../../../lib/services';
import { nutecHousesPricing, overlappingNutecWendyPricing, wendyHousesPricing } from '../../../lib/pricing';
import PricingTable from '../../../app/components/PricingTable';

type Props = {
  params: {
    service: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.service);

  if (!service) {
    return {
      title: 'Service Not Found | Greenbuild',
      description: 'The requested service could not be found.',
    };
  }

  return {
    title: `${service.title} | Greenbuild Nutec & Wendy Houses`,
    description: service.description,
    keywords: [
      service.title,
      'Nutec',
      'Wendy house',
      'construction',
      'South Africa',
    ],
    openGraph: {
      title: `${service.title} | Greenbuild`,
      description: service.description,
      type: 'article',
      images: [
        {
          url: service.image.src,
          alt: `${service.title} image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Greenbuild`,
      description: service.description,
      images: [service.image.src],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.service);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-gray py-24">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-8">
        <section className="mb-10 border border-gray-200 bg-white shadow-sm">
          <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
            <Image
              src={service.image}
              alt={`${service.title} preview`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-brand-charcoal/35" />
            <div className="absolute left-6 bottom-6 inline-flex bg-white/90 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand-charcoal">
              {service.title}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-green mb-4">
            Service Details
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </section>

        <section className="mb-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.gallery.map((image, index) => (
              <article key={index} className="overflow-hidden border border-gray-200 bg-white shadow-sm">
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={image}
                    alt={`${service.title} gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {params.service === 'wendy-houses' && (
          <PricingTable tables={[wendyHousesPricing, overlappingNutecWendyPricing]} />
        )}
        {params.service === 'nutec-houses' && (
          <PricingTable tables={[nutecHousesPricing]} />
        )}


        <div className="grid gap-8 lg:grid-cols-[1fr_280px] items-start">
          <article className="space-y-8">
            {service.details.map((detail, index) => (
              <section key={index} className="bg-white p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-brand-charcoal mb-3">
                  What we deliver
                </h2>
                <p className="text-gray-600 leading-relaxed">{detail}</p>
              </section>
            ))}
          </article>

          <aside className="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-charcoal mb-4">Why choose us?</h3>
            <ul className="space-y-3 text-gray-600 list-disc list-inside">
              <li>Experienced local contractors</li>
              <li>Durable results built for South African conditions</li>
              <li>Clear communication and on-time delivery</li>
            </ul>
            <Link
              href="/#contact"
              className="mt-8 inline-flex w-full items-center justify-center bg-brand-green px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-brand-green-dark transition-colors"
            >
              Book a Consultation
            </Link>
          </aside>
        </div>

        <div className="mt-12">
          <Link
            href="/#services"
            className="inline-flex items-center text-sm font-semibold text-brand-charcoal hover:text-brand-green transition-colors"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </main>
  );
}
