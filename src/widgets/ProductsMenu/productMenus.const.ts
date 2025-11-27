import type { ProductMenuTypes } from '@/shared/types/products.types';

interface ProductMenuInterface {
  id: number;
  model: string;
  feature: string;
  title: string;
}

export const PRODUCTMENUDATA__TURNISTILES: ProductMenuInterface[] = [
  {
    id: 1,
    model: 'NT-T01R',
    feature: '15-20 чел/мин',
    title: 'Турникет полноростовой',
  },
  {
    id: 2,
    model: 'NT-T05',
    feature: '35-45 чел/мин',
    title: 'Труникет тумбовый с распашными створками',
  },
  {
    id: 3,
    model: 'NT01',
    feature: '30 чел/мин',
    title: 'турникет-трипод',
  },
  {
    id: 4,
    model: 'NT02',
    feature: '35-50 чел/мин',
    title: 'Тумбовый турникет',
  },
  {
    id: 5,
    model: 'NT04',
    feature: '35-50 чел/мин',
    title: 'Тумбовый турникет',
  },
];

export const PRODUCTMENUDATA__SERVERCABINETS: ProductMenuInterface[] = [
  {
    id: 1,
    model: 'серия 450',
    feature: 'до 45 кг',
    title: 'НАСТЕННЫЙ СЕРВЕРНЫЙ ШКАФ ',
  },
  {
    id: 2,
    model: 'СЕРИЯ 600',
    feature: 'до 45 кг',
    title: 'НАСТЕННЫЙ СЕРВЕРНЫЙ ШКАФ 19 ДЮЙМОВ ',
  },
];

export const PRODUCTMENUDATA__ALL: Record<ProductMenuTypes, ProductMenuInterface[]> = {
  CAMERAS: PRODUCTMENUDATA__CAMERAS,
  NVR: PRODUCTMENUDATA__NVR,
  SERVERCABINETS: PRODUCTMENUDATA__SERVERCABINETS,
  SWITCHES: PRODUCTMENUDATA__SWITCHES,
  TURNSTILES: PRODUCTMENUDATA__TURNISTILES,
};

export interface ProductMenuTitle {
  title: string;
  subtitle: string;
}

export const PRODUCTMENUDATA__TITLE: Record<ProductMenuTypes, ProductMenuTitle> = {
  CAMERAS: {
    title: 'Камеры видеонаблюдения',
    subtitle:
      'Надежные устройства для записи и хранения видеоматериалов, обеспечивающие контроль и защиту.',
  },
  NVR: {
    title: 'Видеорегистраторы',
    subtitle:
      'Надежные устройства для записи и хранения видеоматериалов, обеспечивающие контроль и защиту.',
  },
  SERVERCABINETS: {
    title: 'Серверные шкафы',
    subtitle: 'Прочные и удобные конструкции для безопасного размещения IT-оборудования',
  },
  SWITCHES: {
    title: 'Коммутаторы',
    subtitle: 'Надежные сетевые решения для организации высокоскоростных соединений.',
  },
  TURNSTILES: {
    title: 'Турникеты',
    subtitle:
      'Высокотехнологичные системы контроля доступа, разработанные с учетом современных требований безопасности.',
  },
};
