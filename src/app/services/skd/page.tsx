import type { Metadata } from 'next';

import { StructuredData } from '@/shared/components/StructuredData';
import { seoConfig } from '@/shared/config/seo.config';
import { generateBreadcrumbSchema } from '@/shared/utils/seo.utils';
import { SkdPage } from '@/widgets/servicePages';

export const metadata: Metadata = {
  title: seoConfig.services.accessControl.title,
  description: seoConfig.services.accessControl.description,
  keywords: seoConfig.services.accessControl.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/skd`,
  },
};

export default function skd() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/services' },
    { name: 'СКУД', url: '/services/skd' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <SkdPage />
    </>
  );
}
