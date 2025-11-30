import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { FeedbackMenu, Questions, Services, ServicesHero } from '@/widgets';

export const metadata: Metadata = {
  title: 'Услуги NTOUCH | Видеонаблюдение, СКУД, ОПС, Пожаротушение',
  description:
    'Комплексные услуги по безопасности: монтаж видеонаблюдения, установка СКУД, охранно-пожарная сигнализация, системы пожаротушения и оповещения. Работаем по всему Казахстану.',
  keywords: [
    'услуги безопасности Казахстан',
    'монтаж видеонаблюдения',
    'установка СКУД',
    'охранная сигнализация',
    'пожарная безопасность',
  ],
  alternates: {
    canonical: `${seoConfig.siteUrl}/services`,
  },
  openGraph: {
    title: 'Услуги NTOUCH | Системы безопасности под ключ',
    description:
      'Проектирование и монтаж систем безопасности по всему Казахстану. Видеонаблюдение, СКУД, ОПС, пожаротушение.',
    url: `${seoConfig.siteUrl}/services`,
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
      <Questions />
      <FeedbackMenu theme="white" />
    </>
  );
}
