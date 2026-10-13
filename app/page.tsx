import type { Metadata } from 'next';
import Link from 'next/link';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import AboutPreview from './components/AboutPreview';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import ContactPreview from './components/ContactPreview';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Greenbuild Nutec & Wendy Houses | Premium Construction Services',
  description:
    'Greenbuild delivers premium Nutec houses, Wendy houses, plumbing, electrical, flooring, painting, and paving services in Cape Town.',
  keywords: [
    'Nutec houses',
    'Wendy houses',
    'construction services',
    'plumbing',
    'electrical',
    'flooring',
    'painting',
    'paving',
    'Cape Town',
  ],
  openGraph: {
    title: 'Greenbuild Nutec & Wendy Houses',
    description:
      'Premium Nutec and Wendy house construction services with expert plumbing, electrical, flooring, painting, and paving.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greenbuild Nutec & Wendy Houses',
    description:
      'Premium Nutec and Wendy house construction services in Cape Town.',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <AboutPreview />
        <Services />
        <FeaturedProjects />
        <WhyChooseUs />
        <CallToAction />
        <FAQ />
        <ContactPreview />
        <section className="bg-brand-gray py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-brand-green">
                Price guide
              </p>
              <h2 className="text-3xl font-bold text-brand-charcoal md:text-4xl">
                Starting prices for Wendy houses and Nutec builds
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Wooden Wendy houses',
                  detail: 'Timber walls • From R12,000',
                },
                {
                  title: 'Nutec large boards',
                  detail: 'Lower-cost Nutec • From R12,000',
                },
                {
                  title: 'Nutec overlapping',
                  detail: 'Traditional finish • From R17,000',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-brand-line bg-white p-6 shadow-sm"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
                    Starting from
                  </p>
                  <h3 className="mb-3 text-2xl font-bold text-brand-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-base text-brand-charcoal/80">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/prices"
                className="inline-flex items-center justify-center rounded-full bg-brand-green px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-green-dark"
              >
                View full price guide
              </Link>
              <a
                href="https://wa.me/27842785134?text=Hi%2C%20I%20need%20a%20quote"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-charcoal px-8 py-4 text-sm font-semibold uppercase tracking-wide text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white"
              >
                Ask for custom quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
