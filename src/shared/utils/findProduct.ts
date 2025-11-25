import { slugify } from '@/shared/utils/slugidy';
import {
  PRODUCTMENUDATA__ALL,
  type ProductMenuTypes,
} from '@/widgets/ProductsMenu/productMenus.const';

export interface ProductData {
  id: number;
  model: string;
  feature: string;
  title: string;
  category: ProductMenuTypes;
}

export const findProductBySlug = (slug: string): ProductData | null => {
  for (const [category, products] of Object.entries(PRODUCTMENUDATA__ALL)) {
    const product = products.find((item) => slugify(item.model) === slug);

    if (product) {
      return {
        ...product,
        category: category as ProductMenuTypes,
      };
    }
  }

  return null;
};
