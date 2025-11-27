import type { ProductItem } from './spec.types';
import { makeTabs } from './utils/makeTabs';

export const tabPanelsGeneral = makeTabs(['Камера', 'Объектив', 'Видео', 'Изображение']);

export const tabPanelsSpecification = makeTabs([
  'События',
  'Сеть',
  'Интерфейсы',
  'Электропитание и эксплуатация',
]);

export const ProductSpec: ProductItem = {};

export const ProductVariant = {
  CAMERAS: {
    TabGeneral: {
      model: '',
      tab: tabPanelsGeneral,
    },
    TabSpecification: {
      model: '',
      tab: tabPanelsSpecification,
    },
    Data: {
      model: '',
      data: {
        TabGeneral: DATAGENERAL,
        TabSpecification: DATALSPECIFICATION,
      },
    },
  },
};
