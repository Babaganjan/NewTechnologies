import type { ProductCategory } from '@/shared/types/products.types';

export const getButtonTitle = (category: ProductCategory): string => {
  if (category === 'CAMERAS') return 'камеру';
  if (category === 'SERVERCABINETS') return 'шкаф';
  if (category === 'NVR') return 'видеорегистратор';
  if (category === 'SWITCHES') return 'коммутатор';
  if (category === 'TURNSTILES') return 'турник';

  return '';
};
