import type { ProductMenuTypes } from '@/shared/types/products.types';

interface ProductMenuInterface {
  id: number;
  model: string;
  feature: string;
  title: string;
}

export const PRODUCTMENUDATA__NVR: ProductMenuInterface[] = [
  {
    id: 9,
    model: 'NT-NVR5016E1',
    feature: '320 Мбит/сек',
    title: '16-ти канальный Ip-видеорегистратор с 1 hdd',
  },
];

export const PRODUCTMENUDATA__SWITCHES: ProductMenuInterface[] = [
  {
    id: 1,
    model: 'NT-PG-F2R10',
    feature: '20 гбит/сек',
    title: '10-ти портовой коммутатор + 2 sfp ports gigabyte',
  },
  {
    id: 2,
    model: 'NT-PAG-F1R18',
    feature: '16 Мбит/сек',
    title: '18-ти портовой коммутатор + 1 sfp port',
  },
  {
    id: 3,
    model: 'NT-PAG-F1R26',
    feature: '20 гбит/сек',
    title: '26-ти портовой коммутатор + 1 sfp port',
  },
  {
    id: 4,
    model: 'NT-PG-FR10',
    feature: '28 гбит/сек',
    title: '8-ми портовой коммутатор poe + 2 uplink ports gigabyte',
  },
  {
    id: 5,
    model: 'NT-PG-F2R18',
    feature: '44 гбит/сек',
    title: '16-ти портовой коммутатор + 2 uplink ports + 2 sfp ports ',
  },
  {
    id: 6,
    model: 'NT-PG-F2R26',
    feature: '56 Гбит/сек',
    title: '24-х портовой коммутатор + 2 uplink ports + 2 sfp ports ',
  },
  {
    id: 7,
    model: 'NT-PM-R10',
    feature: '2.8 гбит/сек',
    title: '8-ми портовой коммутатор poe + 2 uplink ports ',
  },
];

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

export const PRODUCTMENUDATA__CAMERAS: ProductMenuInterface[] = [];

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
