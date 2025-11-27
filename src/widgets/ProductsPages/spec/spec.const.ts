import type { AssemblyItem, ProductItem, SpecItemImages, TabLevelObject } from './spec.types';
import { makeTabs } from './utils/makeTabs';

export const tabPanelsGeneral = makeTabs(['Камера', 'Объектив', 'Видео', 'Изображение']);

export const tabPanelsSpecification = makeTabs([
  'События',
  'Сеть',
  'Интерфейсы',
  'Электропитание и эксплуатация',
]);

export const DATAGENERAL: TabLevelObject[] = [];

export const DATALSPECIFICATION: TabLevelObject[] = [];

export const Images: SpecItemImages[] = [
  {
    id: 1,
    title: 'Стеклянная передняя дверца',
    images: '/img/SpecImages/server-1.webp',
  },
  {
    id: 2,
    title: 'Задняя панель',
    images: '/img/SpecImages/server-2.webp',
  },
  {
    id: 3,
    title: 'Боковая панель',
    images: '/img/SpecImages/server-3.webp',
  },
  {
    id: 4,
    title: 'Верхняя панель',
    images: '/img/SpecImages/server-4.webp',
  },
  {
    id: 5,
    title: 'Стеклянная передняя дверца',
    images: '/img/SpecImages/server-5.webp',
  },
  {
    id: 6,
    title: ' Нижняя панель',
    images: '/img/SpecImages/server-6.webp',
  },
];

export const Scheme: AssemblyItem[] = [
  { id: 1, title: 'Верхняя панель', description: 'Монтажная панель' },
  { id: 2, title: 'Рама', description: 'Задняя панель' },
  { id: 3, title: '19-дюймовый монтажный профиль', description: 'Нижняя панель' },
  { id: 4, title: 'Ручка передней двери', description: 'Боковая панель' },
];

export const ProductSpec: ProductItem = {
  id: 1,
  model: 'MT6422S',
  dimensions: '600×9000×2000',
  units: '42',
};

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
