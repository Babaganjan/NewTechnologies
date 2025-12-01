import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { FeedbackMenu, ProductsMenu } from '@/widgets';

export const metadata: Metadata = {
  title: seoConfig.products.servercabinets.title,
  description: seoConfig.products.servercabinets.description,
  keywords: seoConfig.products.servercabinets.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/products/servercabinets`,
  },
};

export default function servercabinets() {
  return (
    <>
      <ProductsMenu type="SERVERCABINETS" />
      <FeedbackMenu />
    </>
  );
}
