import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';

export const metadata: Metadata = {
  title: seoConfig.products.switches.title,
  description: seoConfig.products.switches.description,
  keywords: seoConfig.products.switches.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/products/switches`,
  },
};

export default function switches() {
  return <div>switches</div>;
}
