import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProductsByCategory } from '@/shared/const/Products/utils/getProductsByCategory';
import type { AliasPagesProps } from '@/shared/types/productsPages.types';
import { slugify } from '@/shared/utils/slugify';
import { ProductsPages } from '@/widgets';

import { findProductBySlug } from '@/shared/utils/findProduct';

export async function generateStaticParams() {
  const SWITCHES = getProductsByCategory('SWITCHES');

  return SWITCHES.map((item) => ({
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
    title: `${product.name} ${product.model} | NTOUCH`,
    description: `${product.name} - ${product.feature}`,
  };
}

export default async function SwitchesPages({ params }: AliasPagesProps) {
  const { alias } = await params;

  const product = findProductBySlug(alias);

  if (!product) {
    notFound();
  }

  return <ProductsPages productModel={product.model} />;
}
