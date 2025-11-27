import type { ProductCategory } from '@/shared/types/products.types';

export const getFeatureTitle = (category: ProductCategory): string => {
  if (category === 'CAMERAS') return 'макс. разрешение';
  if (category === 'SERVERCABINETS') return 'габариты';

  return 'пропускная способность';
};
