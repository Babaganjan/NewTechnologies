import type { ProductMenuTypes } from '../productMenus.const';

export const getTitleHeader = (type: ProductMenuTypes) => {
  if (type === 'CAMERAS') return 'макс. разрешение';
  if (type === 'SERVERCABINETS') return 'габариты';

  return 'пропускная способность';
};
