import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
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
  return <SkdPage />;
}
