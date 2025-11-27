import { slugify } from '@/shared/utils/slugify';

import { getAllProducts } from '../const/Products/utils/getAllProducts';

// Импортируем утилиту для получения всех продуктов из нового каталога

/**
 * Создает карту продуктов, где ключ — это слаг модели,
 * а значение — полное имя продукта (Название + Модель).
 * Использует новую структуру PRODUCT_CATALOG через getAllProducts.
 */
const createProductsMap = () => {
  // Получаем единый массив всех продуктов из нового каталога
  const allProducts = getAllProducts();

  const productsMap: Record<string, string> = {};

  allProducts.forEach((product) => {
    const slug = slugify(product.model);

    // В ProductConfig вместо 'title' используем 'name'
    const fullName = `${product.name} ${product.model}`;

    productsMap[slug] = fullName;
  });

  return productsMap;
};

export const PRODUCTS_MAP = createProductsMap();
