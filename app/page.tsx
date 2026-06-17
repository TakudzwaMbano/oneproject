import type { Metadata } from 'next';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import AboutPreview from './components/AboutPreview';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import ContactPreview from './components/ContactPreview';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Greenbuild Nutec & Wendy Houses | Premium Construction Services',
  description:
    'Greenbuild delivers premium Nutec houses, Wendy houses, plumbing, electrical, flooring, painting, and paving services across South Africa.',
  keywords: [
    'Nutec houses',
    'Wendy houses',
    'construction services',
    'plumbing',
    'electrical',
    'flooring',
    'painting',
    'paving',
    'South Africa',
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
      'Premium Nutec and Wendy house construction services across South Africa.',
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
        <ContactPreview />
      </main>
      <Footer />
    </>
  );
}
