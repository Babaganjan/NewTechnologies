interface ProductMenuInterface {
  id: number;
  model: string;
  feature: string;
  title: string;
}

export const PRODUCTMENUDATA__NVR: ProductMenuInterface[] = [
  {
    id: 1,
    model: 'NT-NVR3708E1-P8',
    feature: '40 Мбит/сек',
    title: '8-ми канальный ip-регистратор',
  },
  {
    id: 2,
    model: 'NT-NVR3808E1-J',
    feature: '80 Мбит/сек',
    title: 'Сетевой регистратор с поддержкой 8 каналов, 1 hdd и разрешением до 4к',
  },
  {
    id: 3,
    model: 'NT-NVR3808E2-P8',
    feature: '80 Мбит/сек',
    title: '8-ми канальный ip-регистратор ',
  },
  {
    id: 4,
    model: 'NT-NVR3816E2-J',
    feature: '160 Мбит/сек',
    title: 'Сетевой видеорегистратор с 2 hdd и разрешением до 4к',
  },
  {
    id: 5,
    model: 'NT-NVR3816E2-P16',
    feature: '10/100/1000 мбит/сек',
    title: 'видеорегистратор 16ch, 2 hdd',
  },
  {
    id: 6,
    model: 'NT-NVR3932E2-P16',
    feature: '80/160 Мбит/сек',
    title: 'СЕТЕВОЙ РЕГИСТРАТОР 32ch, 2 hdd с 16 poe-портами с разрешением до 4к',
  },
  {
    id: 7,
    model: 'NT-NVR3932E4-JA',
    feature: '320 Мбит/сек',
    title: 'сетевой регистратор 32ch, 1.5u, 4 hdd,',
  },
  {
    id: 8,
    model: 'NT-NVR5008E1',
    feature: '320 Мбит/сек',
    title: '8-ми канальный регистратор с 1 hdd',
  },
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

export const PRODUCTMENUDATA__CAMERAS: ProductMenuInterface[] = [
  {
    id: 1,
    model: 'NT-ipr5122-m',
    feature: '',
    title: 'сетевая цилиндрическая ик-камера',
  },
  {
    id: 2,
    model: 'NT-IPR5123-B',
    feature: '1920×1080 / 25 fps',
    title: 'цилиндрическая камера',
  },
  {
    id: 3,
    model: 'NT-IPR5142-B',
    feature: '2560×1440 / 25 fps',
    title: 'сетевая цилиндрическая камера с ик-подсветкой',
  },
  {
    id: 4,
    model: 'NT-IPR5142-M',
    feature: '2560×1440 / 25 fps',
    title: 'сетевая цилиндрическая камера с ик-подсветкой',
  },
  {
    id: 5,
    model: 'NT-IPR5180-B',
    feature: '3840×2160 / 20 fps',
    title: 'сетевая цилиндрическая камера с ик-подсветкой',
  },
  {
    id: 6,
    model: 'NT-IPR7120-Z',
    feature: '1920×1080 / 25-30 fps',
    title: 'Сетевая уличная камера с ИК-подсветкой и моторизованным объективом',
  },
  {
    id: 7,
    model: 'NT-IPR7140-Z',
    feature: '2880×1620 / 25-30 fps',
    title: 'сетевая буллет-камера с ИК-подсветкой и моторизованным объективом ',
  },
  {
    id: 8,
    model: 'NT-IPR7152-S-B',
    feature: '2880×1620 / 25-30 fps',
    title: 'сетевая купольная камера с ИК-подсветкой и моторизованным объективом',
  },
  {
    id: 9,
    model: 'NT-IPV7120-B',
    feature: '1920×1080 / 25-30 fps',
    title: 'сетевая купольная камера с ИК-подсветкой и фиксированным объективом  ',
  },
  {
    id: 10,
    model: 'NT-IPV7140-Z',
    feature: '2880×1620 / 25-30 fps',
    title: 'сетевая купольная камера с ИК-подсветкой и моторизованным объективом',
  },
  {
    id: 11,
    model: 'NT-IPV7152-B',
    feature: '2880×1620 / 25-30 fps',
    title: 'сетевая купольная камера с интеллектуальной двойной подсветкой',
  },
  {
    id: 12,
    model: 'NT-IPV7180-Z',
    feature: '3840×2160 / 25 fps',
    title: 'сетевая купольная камера с ИК-подсветкой и моторизованным объективом',
  },
];

export type ProductMenuTypes = 'CAMERAS' | 'NVR' | 'SERVERCABINETS' | 'SWITCHES' | 'TURNSTILES';

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
