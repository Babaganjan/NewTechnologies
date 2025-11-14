import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { OpsPage } from '@/widgets/widgetPages';

export const metadata: Metadata = {
  title: seoConfig.services.fireAlarm.title,
  description: seoConfig.services.fireAlarm.description,
  keywords: seoConfig.services.fireAlarm.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/ops`,
  },
};

export default function Ops() {
  return <OpsPage />;
}
