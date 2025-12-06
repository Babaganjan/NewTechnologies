import type { Metadata } from 'next';

import { StructuredData } from '@/shared/components/StructuredData';
import { seoConfig } from '@/shared/config/seo.config';
import { generateBreadcrumbSchema } from '@/shared/utils/seo.utils';
import { PozhartusheniePage } from '@/widgets/servicePages';

export const metadata: Metadata = {
  title: seoConfig.services.fireSuppression.title,
  description: seoConfig.services.fireSuppression.description,
  keywords: seoConfig.services.fireSuppression.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/pozhartushenie`,
  },
};

export default function pozhartushenie() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/services' },
    { name: 'Пожаротушение', url: '/services/pozhartushenie' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <PozhartusheniePage />
    </>
  );
}
