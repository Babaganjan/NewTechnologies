// import type { ProductConfig } from '@/shared/types/products.types';
//
// import { PRODUCT_CATALOG } from '../catalog';
//
// export const getProductByModel = (model: string): ProductConfig | undefined => {
//   const normalizedModel = model.toLowerCase();
//
//   for (const category of Object.values(PRODUCT_CATALOG)) {
//     const product = Object.values(category).find((p) => p.model.toLowerCase() === normalizedModel);
//
//     if (product) return product;
//   }
//
//   return undefined;
// };
