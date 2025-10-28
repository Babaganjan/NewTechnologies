import type { Metadata } from 'next';
import { Inter, Oswald, Roboto_Condensed } from 'next/font/google';

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
  title: 'Безопасность нового поколения — NTOUCH',
  description:
    'Интегрированные решения по видеонаблюдению, охранно-пожарной сигнализации, пожаротушению, контролю доступа и системам оповещения. Централизованная платформа для контроля и управления 24/7.',
  keywords: [
    'видеонаблюдение',
    'охранно-пожарная сигнализация',
    'пожаротушение',
    'контроль доступа',
    'системы оповещения',
    'безопасность',
    'NTOUCH',
  ],
  authors: [{ name: 'ТОО «Новые технологии – Тараз»' }],
  openGraph: {
    title: 'Безопасность нового поколения — NTOUCH',
    description:
      'Интегрированные решения для контроля и безопасности: видеонаблюдение, ОПС, СКД, пожаротушение и оповещение. Поддержка 24/7.',
    url: 'https://example.com/',
    siteName: 'NTOUCH',
    type: 'website',
    images: [
      {
        url: 'https://example.com/images/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'Интегрированные решения безопасности',
      },
    ],
  },
  twitter: { card: 'summary_large_image', title: 'Безопасность нового поколения — NTOUCH' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
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
