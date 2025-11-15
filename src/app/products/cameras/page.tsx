import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { FeedbackMenu, ProductsMenu } from '@/widgets';

export const metadata: Metadata = {
  title: seoConfig.products.cameras.title,
  description: seoConfig.products.cameras.description,
  keywords: seoConfig.products.cameras.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/products/cameras`,
  },
};

export default function cameras() {
  return (
    <>
      <ProductsMenu />
      <FeedbackMenu />
    </>
  );
}
