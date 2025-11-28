import type { ProductCategory } from '@/shared/types/products.types';

import { CAMERAS } from './cameras';
import { NVR_SYSTEMS } from './nvr';
import { SERVER_CABINETS } from './servercabinets';
import { SWITCHES } from './switches';
import { TURNSTILES } from './turnistiles';

export const PRODUCT_CATALOG = {
  CAMERAS,
  NVR: NVR_SYSTEMS,
  SWITCHES,
  TURNSTILES,
  SERVERCABINETS: SERVER_CABINETS,
} as const;

export const PRODUCT_CATALOG_COUNT: Record<ProductCategory, number> = {
  CAMERAS: Object.keys(CAMERAS).length,
  NVR: Object.keys(NVR_SYSTEMS).length,
  SWITCHES: Object.keys(SWITCHES).length,
  TURNSTILES: Object.keys(TURNSTILES).length,
  SERVERCABINETS: Object.keys(SERVER_CABINETS).length,
};

export interface ProductMenuTitle {
  title: string;
  subtitle: string;
}

export const PRODUCT_MENU_TITLES: Record<ProductCategory, ProductMenuTitle> = {
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
