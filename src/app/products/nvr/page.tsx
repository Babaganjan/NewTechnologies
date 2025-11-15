import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { FeedbackMenu, ProductsMenu } from '@/widgets';

export const metadata: Metadata = {
  title: seoConfig.products.nvr.title,
  description: seoConfig.products.nvr.description,
  keywords: seoConfig.products.nvr.keywords,
  alternates: {
    canonical: `${seoConfig.siteUrl}/products/nvr`,
  },
};

export default function nvr() {
  return (
    <>
      <ProductsMenu />
      <FeedbackMenu />
    </>
  );
}
