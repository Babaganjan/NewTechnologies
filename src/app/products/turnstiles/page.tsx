import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { ProductsMenu } from '@/widgets';

export const metadata: Metadata = {
  title: seoConfig.products.turnstiles.title,
  description: seoConfig.products.turnstiles.description,
  keywords: seoConfig.products.turnstiles.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/products/turnstiles`,
  },
};

export default function turnstiles() {
  return <ProductsMenu />;
}
