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
