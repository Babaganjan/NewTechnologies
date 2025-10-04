import type { Metadata } from 'next';
import { Oswald, Roboto_Condensed, Inter } from 'next/font/google';

import './globals.css';
// import '../styles/main.scss';
import { siteConfig } from '@/shared/config/site.config';
import { Footer } from '@/widgets/footer/Footer';
import { Header } from '@/widgets/header/Header';

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
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${oswald.variable} ${robotoCondensed.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
