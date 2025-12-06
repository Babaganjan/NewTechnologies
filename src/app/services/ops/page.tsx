import type { Metadata } from 'next';

import { StructuredData } from '@/shared/components/StructuredData';
import { seoConfig } from '@/shared/config/seo.config';
import { generateBreadcrumbSchema } from '@/shared/utils/seo.utils';
import { OpsPage } from '@/widgets/servicePages';

export const metadata: Metadata = {
  title: seoConfig.services.fireAlarm.title,
  description: seoConfig.services.fireAlarm.description,
  keywords: seoConfig.services.fireAlarm.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/ops`,
  },
};

export default function ops() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/services' },
    { name: 'ОПС', url: '/services/ops' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <OpsPage />
    </>
  );
}
