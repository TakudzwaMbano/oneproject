import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Greenbuild Nutec and Wendy Houses | Premium Construction Services',
  description:
    'Delivering durable Nutec houses, Wendy houses, and professional property improvement services across South Africa. Quality workmanship you can trust.',
  openGraph: {
    title: 'Greenbuild Nutec and Wendy Houses',
    description:
      'Premium Nutec & Wendy House Construction Services in South Africa',
    type: 'website',
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
        {children}
      </body>
    </html>
  );
}
