import type { ProductCategory, ProductConfig } from '@/shared/types/products.types';

import { PRODUCT_CATALOG } from '../catalog';

export const getProductsByCategory = (category: ProductCategory): ProductConfig[] => {
  return Object.values(PRODUCT_CATALOG[category] || {});
};
