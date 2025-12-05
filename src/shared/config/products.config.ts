import { slugify } from '@/shared/utils/slugify';

import { getAllProducts } from '../const/Products/utils/getAllProducts';

const createProductsMap = () => {
  const allProducts = getAllProducts();

  const productsMap: Record<string, string> = {};

  allProducts.forEach((product) => {
    const slug = slugify(product.model);
    const fullName = `${product.name} ${product.model}`;

    productsMap[slug] = fullName;
  });

  return productsMap;
};

export const PRODUCTS_MAP = createProductsMap();

console.log(PRODUCTS_MAP);
