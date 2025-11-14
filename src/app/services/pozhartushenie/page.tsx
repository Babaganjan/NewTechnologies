import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { PozhartusheniePage } from '@/widgets/widgetPages';

export const metadata: Metadata = {
  title: seoConfig.services.fireSuppression.title,
  description: seoConfig.services.fireSuppression.description,
  keywords: seoConfig.services.fireSuppression.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/pozhartushenie`,
  },
};

export default function pozhartushenie() {
  return <PozhartusheniePage />;
}
