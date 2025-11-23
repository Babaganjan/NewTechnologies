import { slugify } from '@/shared/utils/slugidy';
import {
  PRODUCTMENUDATA__CAMERAS,
  PRODUCTMENUDATA__NVR,
  PRODUCTMENUDATA__SERVERCABINETS,
  PRODUCTMENUDATA__SWITCHES,
  PRODUCTMENUDATA__TURNISTILES,
} from '@/widgets/ProductsMenu/productMenus.const';

const createProductsMap = () => {
  const allProducts = [
    ...PRODUCTMENUDATA__CAMERAS,
    ...PRODUCTMENUDATA__NVR,
    ...PRODUCTMENUDATA__SERVERCABINETS,
    ...PRODUCTMENUDATA__SWITCHES,
    ...PRODUCTMENUDATA__TURNISTILES,
  ];

  const productsMap: Record<string, string> = {};

  allProducts.forEach((product) => {
    const slug = slugify(product.model);
    const fullName = `${product.title} ${product.model}`;

    productsMap[slug] = fullName;
  });

  return productsMap;
};

export const PRODUCTS_MAP = createProductsMap();
