import type { Metadata } from 'next';

import { StructuredData } from '@/shared/components/StructuredData';
import { seoConfig } from '@/shared/config/seo.config';
import { generateBreadcrumbSchema } from '@/shared/utils/seo.utils';
import { OpoveshcheniePage } from '@/widgets/servicePages';

export const metadata: Metadata = {
  title: seoConfig.services.notificationSystem.title,
  description: seoConfig.services.notificationSystem.description,
  keywords: seoConfig.services.notificationSystem.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/opoveshchenie`,
  },
};

export default function opoveshchenie() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Главная', url: '/' },
    { name: 'Услуги', url: '/services' },
    { name: 'Системы оповещения', url: '/services/opoveshchenie' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <OpoveshcheniePage />
    </>
  );
}
