import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { VideonabludeniePage } from '@/widgets/widgetPages/videonabludenie';

export const metadata: Metadata = {
  title: seoConfig.services.videoSurveillance.title,
  description: seoConfig.services.videoSurveillance.description,
  keywords: seoConfig.services.videoSurveillance.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/services/videonabludenie`,
  },
};

export default function videonabludenie() {
  return <VideonabludeniePage />;
}
