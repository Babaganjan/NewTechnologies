import type { ProductConfig } from '@/shared/types/products.types';
import { slugify } from '@/shared/utils/slugify';

import { PRODUCT_CATALOG } from '../const/Products/catalog';

export const findProductBySlug = (slug: string): ProductConfig | undefined => {
  // Проходимся по всем категориям в каталоге
  for (const category of Object.values(PRODUCT_CATALOG)) {
    // Проходимся по всем продуктам в категории

    const foundProduct = Object.values(category).find((product) => {
      const productSlug = slugify(product.model);

      return productSlug === slug;
    });

    if (foundProduct) return foundProduct;
  }

  return undefined;
};
