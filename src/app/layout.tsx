import type { Metadata } from 'next';
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
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--second-family',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['700'],
  variable: '--third-family',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="ru">
      <body className={`${oswald.variable} ${robotoCondensed.variable} ${inter.variable}`}>
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
