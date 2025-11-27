import { slugify } from '@/shared/utils/slugify';
import { PRODUCTMENUDATA__ALL } from '@/widgets/ProductsMenu/productMenus.const';

import type { ProductMenuTypes } from '../types/products.types';

export interface ProductData {
  id: number;
  model: string;
  feature: string;
  title: string;
  category: ProductMenuTypes;
}

function typedEntries<T extends Record<string, unknown>>(obj: T) {
  return Object.entries(obj) as {
    [K in keyof T]: [K, T[K]];
  }[keyof T][];
}

export const findProductBySlug = (slug: string): ProductData | null => {
  for (const [category, products] of typedEntries(PRODUCTMENUDATA__ALL)) {
    const product = products.find((item) => slugify(item.model) === slug);

    if (product) {
      const productOne = { ...product, model: slugify(product.model), category };

      return productOne;
    }
  }

  return null;
};
