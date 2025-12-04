import type { Metadata, Viewport } from 'next';
import { Inter, Oswald, Roboto_Condensed } from 'next/font/google';
import type { ReactNode } from 'react';

import { ScrollProvider } from '@/context/ScrollProvider';
import { StructuredData } from '@/shared/components/StructuredData';
import { seoConfig } from '@/shared/config/seo.config';
import { generateOrganizationSchema } from '@/shared/utils/seo.utils';
import { Footer, Header } from '@/widgets';

import './globals.css';

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-family',
  display: 'swap',
  preload: true,
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--second-family',
  display: 'swap',
  preload: true,
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['700'],
  variable: '--third-family',
  display: 'swap',
  preload: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),

  title: {
    default: seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },
  description: seoConfig.home.description,

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  twitter: {
    card: 'summary_large_image',
    title: seoConfig.defaultTitle,
    description: seoConfig.home.description,
    images: [`${seoConfig.siteUrl}/og-image.jpg`],
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: seoConfig.siteUrl,
    siteName: seoConfig.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.home.description,
    images: [
      {
        url: `${seoConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: seoConfig.siteName,
      },
    ],
  },

  alternates: {
    canonical: seoConfig.siteUrl,
    languages: {
      'ru-RU': seoConfig.siteUrl,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  category: 'technology',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  authors: [{ name: 'NTOUCH' }],
  creator: 'NTOUCH',
  publisher: 'ТОО «Новые Технологии – Тараз»',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${robotoCondensed.variable} ${inter.variable}`}
        suppressHydrationWarning
      >
        <link rel="preload" as="video" href="/video/camera-scan-360.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/video/camera-scan-768.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/video/camera-scan-1920.mp4" type="video/mp4" />
        <StructuredData data={organizationSchema} />
        <ScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
