import type { Metadata } from 'next';

import { StructuredData } from '@/shared/components/StructuredData';
import { seoConfig } from '@/shared/config/seo.config';
import { generateBreadcrumbSchema } from '@/shared/utils/seo.utils';
import { VideonabludeniePage } from '@/widgets/servicePages/videonabludenie';

export const metadata: Metadata = {
  title: seoConfig.services.videoSurveillance.title,
  description: seoConfig.services.videoSurveillance.description,
  keywords: seoConfig.services.videoSurveillance.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/videonabludenie`,
  },
};

export default function videonabludenie() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/services' },
    { name: 'Видеонаблюдение', url: '/services/videonabludenie' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <VideonabludeniePage />
    </>
  );
}
