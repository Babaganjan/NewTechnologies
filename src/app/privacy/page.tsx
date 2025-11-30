import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { Privacy } from '@/widgets';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности | NTOUCH',
  description:
    'Политика конфиденциальности и защиты персональных данных ТОО «Новые Технологии – Тараз».',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: `${seoConfig.siteUrl}/privacy`,
  },
};

export default function privacy() {
  return <Privacy />;
}
