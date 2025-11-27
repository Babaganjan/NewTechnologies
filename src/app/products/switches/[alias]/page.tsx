import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import type { AliasPagesProps } from '@/shared/types/productsPages.types';
import { findProductBySlug } from '@/shared/utils/findProduct';
import { slugify } from '@/shared/utils/slugify';
import { ProductsPages } from '@/widgets';
import { PRODUCTMENUDATA__SWITCHES } from '@/widgets/ProductsMenu/productMenus.const';

export async function generateStaticParams() {
  return PRODUCTMENUDATA__SWITCHES.map((item) => ({
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

  return {
    title: `${product.title} ${product.model} | NTOUCH`,
    description: `${product.title} - ${product.feature}`,
  };
}

export default async function SwitchesPages({ params }: AliasPagesProps) {
  const { alias } = await params;

  const product = findProductBySlug(alias);

  if (!product) {
    notFound();
  }

  return <ProductsPages product={product} />;
}
