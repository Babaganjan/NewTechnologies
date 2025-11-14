import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';

export const metadata: Metadata = {
  title: seoConfig.products.serverCabinets.title,
  description: seoConfig.products.serverCabinets.description,
  keywords: seoConfig.products.serverCabinets.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/products/serverCabinets`,
  },
};

export default function serverCabinets() {
  return <div>serverCabinets</div>;
}
