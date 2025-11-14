import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { OpoveshcheniePage } from '@/widgets/widgetPages';

export const metadata: Metadata = {
  title: seoConfig.services.notificationSystem.title,
  description: seoConfig.services.notificationSystem.description,
  keywords: seoConfig.services.notificationSystem.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/opoveshchenie`,
  },
};

export default function Opoveshchenie() {
  return <OpoveshcheniePage />;
}
