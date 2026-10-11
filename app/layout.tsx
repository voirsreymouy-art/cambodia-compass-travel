import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://cambodiacompasstravel.com'),
  title: 'Cambodia Compass Travel',
  description:
    'An immersive digital expedition for travelers, offering curated cultural journeys, direct booking, and seamless payment for Cambodia\'s most enchanting destinations.',
  openGraph: {
    title: 'Cambodia Compass Travel',
    description:
      'An immersive digital expedition for travelers, offering curated cultural journeys, direct booking, and seamless payment for Cambodia\'s most enchanting destinations.',
    url: 'https://cambodiacompasstravel.com',
    siteName: 'Cambodia Compass Travel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Cambodia Compass Travel',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
