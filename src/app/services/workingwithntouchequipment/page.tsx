import type { Metadata } from 'next';

import { StructuredData } from '@/shared/components/StructuredData';
import { seoConfig } from '@/shared/config/seo.config';
import { generateBreadcrumbSchema } from '@/shared/utils/seo.utils';
import { FeedbackMenu, LearningFormats, Ntouch } from '@/widgets';

export const metadata: Metadata = {
  title: 'Обучение работе с оборудованием NTOUCH | Тренинги и семинары',
  description:
    'Обучение специалистов работе с оборудованием NTOUCH: видеонаблюдение, СКУД, турникеты. Сертифицированные тренинги для интеграторов и пользователей.',
  keywords: [
    'обучение NTOUCH',
    'тренинги видеонаблюдение',
    'курсы СКУД',
    'обучение работе с турникетами',
  ],
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/workingwithntouchequipment`,
  },
  openGraph: {
    title: 'Обучение работе с оборудованием NTOUCH',
    description: 'Профессиональные тренинги и семинары для специалистов.',
    url: `${seoConfig.siteUrl}/services/workingwithntouchequipment`,
    type: 'website',
  },
};

export default function WorkingWithNtoucheQuipment() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/services' },
    { name: 'Обучение', url: '/services/workingwithntouchequipment' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Ntouch />
      <LearningFormats />
      <FeedbackMenu theme="white" />
    </>
  );
}
