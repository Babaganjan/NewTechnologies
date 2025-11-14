import type { Metadata } from 'next';

import { seoConfig } from '@/shared/config/seo.config';
import { FeedbackMenu, Products, ProductsPage } from '@/widgets';

export const metadata: Metadata = {
  title: seoConfig.products.main.title,
  description: seoConfig.products.main.description,
  keywords: seoConfig.products.main.keywords,
};

export default function ProductPage() {
  return (
    <>
      <ProductsPage />
      <Products />
      <FeedbackMenu />
    </>
  );
}
