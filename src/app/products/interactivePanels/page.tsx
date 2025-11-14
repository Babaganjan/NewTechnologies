import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';

export const metadata: Metadata = {
  title: seoConfig.products.interactivePanels.title,
  description: seoConfig.products.interactivePanels.description,
  keywords: seoConfig.products.interactivePanels.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/products/interactivePanels`,
  },
};

export default function interactivePanels() {
  return <div>InteractivePanels</div>;
}
