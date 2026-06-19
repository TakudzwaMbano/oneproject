export type ServiceSlug =
  | 'nutec-houses'
  | 'wendy-houses'
  | 'plumbing'
  | 'electrical'
  | 'flooring'
  | 'painting-paving';

import type { StaticImageData } from 'next/image';
import nutecImage from '../images/building.jpg';
import nutecImage2 from '../images/building5.jpg';
import nutecImage3 from '../images/hero.jpg';
import wendyImage from '../images/wendyhouse1.jpeg';
import wendyImage2 from '../images/wendyhouse2.jpeg';
import wendyImage3 from '../images/wendyhouse3.jpeg';
import wendyImage4 from '../images/cabin.jpg';
import plumbingImage from '../images/plumbing.jpg';
import plumbingImage2 from '../images/plumb2.jpg';
import plumbingImage3 from '../images/plumbin3.jpg';
import electricalImage from '../images/electrical.jpg';
import electricalImage2 from '../images/electrical4.jpeg';
import electricalImage3 from '../images/electrical5.jpeg';
import electricalImage4 from '../images/electrical6.jpeg';
import electricalImage5 from '../images/electrcalwiring.jpg';
import electricalImage6 from '../images/building.jpg';
import flooringImage from '../images/flooring.jpg';
import flooringImage2 from '../images/tiling.jpg';
import flooringImage3 from '../images/tiling3.jpg';
import woodenfloor1 from '../images/woodenfloor1.jpeg';
import woodenfloor2 from '../images/woodenfloo2.jpeg';
import paintingPavingImage from '../images/painting1.jpeg';
import paintingPavingImage2 from '../images/painting2.jpeg';
import paintingPavingImage3 from '../images/building5.jpg';

export type ServiceItem = {
  slug: ServiceSlug;
  title: string;
  description: string;
  image: StaticImageData;
  gallery: StaticImageData[];
  details: string[];
};

export const services: ServiceItem[] = [
  {
    slug: 'nutec-houses',
    title: 'Nutec Houses',
    image: nutecImage,
    gallery: [nutecImage, nutecImage2, nutecImage3],
    description:
      'Premium Nutec board construction for durable, weather-resistant structures built to last.',
    details: [
      'High-performance Nutec board construction for energy efficiency and durability.',
      'Weather-resistant wall systems designed to stand up to South Africa’s climate.',
      'Tailored finishes and strong foundations for residential or commercial builds.',
    ],
  },
  {
    slug: 'wendy-houses',
    title: 'Wendy Houses',
    image: wendyImage,
    gallery: [wendyImage, wendyImage2, wendyImage3],
    description:
      'Custom Wendy houses for extra living space, home offices, or garden rooms.',
    details: [
      'Made-to-measure Wendy houses that suit your site, style, and budget.',
      'Flexible layouts for guest rooms, home offices, studios, or play areas.',
      'Quality finishes and insulation for year-round comfort.',
    ],
  },
  {
    slug: 'plumbing',
    title: 'Plumbing',
    image: plumbingImage,
    gallery: [plumbingImage, plumbingImage2, plumbingImage3],
    description:
      'Expert plumbing installation and repairs for residential and commercial properties.',
    details: [
      'Reliable installation of water, drainage, and sanitary systems.',
      'Fast leak detection, repairs, and part replacement.',
      'Maintenance services to keep homes and businesses operating smoothly.',
    ],
  },
  {
    slug: 'electrical',
    title: 'Electrical',
    image: electricalImage,
    gallery: [electricalImage, electricalImage2, electricalImage3, electricalImage4, electricalImage5],
    description:
      'Professional electrical services including wiring, installations, and safety inspections.',
    details: [
      'Certified wiring and electrical installations for new and existing builds.',
      'Comprehensive safety checks and compliance inspections.',
      'Lighting upgrades, power point installations, and circuit solutions.',
    ],
  },
  {
    slug: 'flooring',
    title: 'Flooring',
    image: flooringImage,
    gallery: [flooringImage, flooringImage2, flooringImage3, woodenfloor1, woodenfloor2],
    description:
      'Quality flooring solutions from tile to hardwood, installed with precision and care.',
    details: [
      'Hardwood, laminate, tile, and vinyl flooring options to match any style.',
      'Professional leveling, fitting, and finishing for a polished result.',
      'Durable floor installations built for daily use and easy maintenance.',
    ],
  },
  {
    slug: 'painting-paving',
    title: 'Painting & Paving',
    image: paintingPavingImage,
    gallery: [paintingPavingImage, paintingPavingImage2, paintingPavingImage3],
    description:
      'Complete painting services and professional paving for driveways and outdoor areas.',
    details: [
      'Interior and exterior painting with durable, long-lasting finishes.',
      'Driveway and patio paving designed for performance and curb appeal.',
      'Surface preparation, repair, and high-quality application on every job.',
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
