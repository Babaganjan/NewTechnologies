import type { ProductCategory, ProductConfig } from '@/shared/types/products.types';

import { PRODUCT_CATALOG } from '../catalog';

export const getProductsByCategory = (category: ProductCategory): ProductConfig[] => {
  console.log(Object.values(PRODUCT_CATALOG[category] || {}));

  return Object.values(PRODUCT_CATALOG[category] || {});
};
