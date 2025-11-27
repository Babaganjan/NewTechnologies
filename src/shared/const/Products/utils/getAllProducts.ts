import type { ProductConfig } from '@/shared/types/products.types';

import { PRODUCT_CATALOG } from '../catalog';

export const getAllProducts = (): ProductConfig[] => {
  return Object.values(PRODUCT_CATALOG).flatMap((category) => Object.values(category));
};
