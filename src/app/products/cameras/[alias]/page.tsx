import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getProductsByCategory } from '@/shared/const/Products/utils/getProductsByCategory';
import type { AliasPagesProps } from '@/shared/types/productsPages.types';
import { slugify } from '@/shared/utils/slugify';
import { ProductsPages } from '@/widgets';

import { findProductBySlug } from '@/shared/utils/findProduct';

// 1. Генерация статических параметров для КАМЕР
export async function generateStaticParams() {
  // Получаем только продукты категории CAMERAS из нового каталога
  const cameras = getProductsByCategory('CAMERAS');

  return cameras.map((item) => ({
    alias: slugify(item.model),
  }));
}

// 2. Генерация метаданных
export async function generateMetadata({ params }: AliasPagesProps): Promise<Metadata> {
  const { alias } = await params;
  const product = findProductBySlug(alias);

  if (!product) {
    return {
      title: 'Продукт не найден',
    };
  }

  // Обратите внимание: в ProductConfig поле называется 'name', а не 'title'
  return {
    title: `${product.name} ${product.model} | NTOUCH`,
    description: `${product.name} - ${product.feature}`,
  };
}

// 3. Компонент страницы
export default async function CamerasPages({ params }: AliasPagesProps) {
  const { alias } = await params;

  const product = findProductBySlug(alias);

  console.log(product?.model);

  // Дополнительная проверка: убедимся, что это именно камера (опционально, но полезно)
  if (!product || product.category !== 'CAMERAS') {
    notFound();
  }

  return <ProductsPages productModel={product.model} />;
}
