import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { seoConfig } from '@/shared/config/seo.config';
import { getProductSEO } from '@/shared/const/Products/seo';
import { getProductsByCategory } from '@/shared/const/Products/utils/getProductsByCategory';
import type { AliasPagesProps } from '@/shared/types/productsPages.types';
import { findProductBySlug } from '@/shared/utils/findProduct';
import { slugify } from '@/shared/utils/slugify';
import { ProductsPages } from '@/widgets';

export async function generateStaticParams() {
  const NVR = getProductsByCategory('NVR');

  return NVR.map((item) => ({
    alias: slugify(item.model),
  }));
}

export async function generateMetadata({ params }: AliasPagesProps): Promise<Metadata> {
  const { alias } = await params;
  const product = findProductBySlug(alias);

  if (!product) {
    return {
      title: 'Продукт не найден',
    };
  }

  const productSEO = getProductSEO(product.model);

  if (productSEO) {
    return {
      title: productSEO.title,
      description: productSEO.description,
      keywords: productSEO.keywords,
      alternates: {
        canonical: `${seoConfig.siteUrl}/products/nvr/${alias}`,
      },
      openGraph: {
        title: productSEO.title,
        description: productSEO.description,
        url: `${seoConfig.siteUrl}/products/nvr/${alias}`,
        images: [
          {
            url: product.gallery.images[0] || '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: productSEO.schema?.name || product.name,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: productSEO.title,
        description: productSEO.description,
      },
    };
  }

  return {
    title: `${product.name} ${product.model} | NTOUCH`,
    description: `${product.name} - ${product.feature}`,
    alternates: {
      canonical: `${seoConfig.siteUrl}/products/nvr/${alias}`,
    },
  };
}

export default async function NvrPages({ params }: AliasPagesProps) {
  const { alias } = await params;

  const product = findProductBySlug(alias);

  if (!product) {
    notFound();
  }

  return <ProductsPages productModel={product.model} />;
}
