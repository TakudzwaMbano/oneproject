import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PricingPanel from './components/PricingPanel';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = 'https://greenbuildnutec.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Greenbuild Nutec and Wendy Houses | Premium Construction Services',
    template: '%s | Greenbuild Nutec & Wendy Houses',
  },
  description:
    'Delivering durable Nutec houses, Wendy houses, and professional property improvement services across South Africa. Quality workmanship you can trust.',
  openGraph: {
    title: 'Greenbuild Nutec and Wendy Houses',
    description:
      'Premium Nutec & Wendy House Construction Services in South Africa',
    type: 'website',
    siteName: 'Greenbuild Nutec & Wendy Houses',
    locale: 'en_ZA',
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greenbuild Nutec and Wendy Houses',
    description:
      'Premium Nutec & Wendy House Construction Services in South Africa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PricingPanel />
        {children}
      </body>
    </html>
  );
}
