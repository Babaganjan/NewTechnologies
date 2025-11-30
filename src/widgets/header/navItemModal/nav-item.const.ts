import type { ModalVariant, NavListModalProps } from './nav-Item.types';

const DATA_SERVICE: NavListModalProps[] = [
  {
    id: 1,
    title: 'Системы защиты',
    list: [
      {
        name: 'Системы видеонаблюдения',
        image: '/img/modalHeader/video-surveillance-system.webp',
        href: '/services/videonabludenie',
      },
      {
        name: 'Охранно-пожарная сигнализация',
        image: '/img/modalHeader/security-fire-alarm-system.webp',
        href: '/services/ops',
      },
      {
        name: 'Система контроля доступа',
        image: '/img/modalHeader/access-control-system.webp',
        href: '/services/skd',
      },
      {
        name: 'Системы оповещения',
        image: '/img/modalHeader/notification-system.webp',
        href: '/services/opoveshchenie',
      },
      {
        name: 'Системы пожаротушения',
        image: '/img/modalHeader/fire-extinguishing-system.webp',
        href: '/services/pozhartushenie',
      },
    ],
  },
  {
    id: 2,
    title: 'IT-решения',
    list: [
      {
        name: 'Для государственных и частных организаций',
        image: '/img/modalHeader/for-educational-institutions.webp',
        href: '/services/itsolutionspublicprivate',
      },
    ],
  },
  {
    id: 3,
    title: 'Обучение',
    list: [
      {
        name: 'Работа с оборудованием NTOUCH',
        image: '/img/modalHeader/video-surveillance-system.webp',
        href: '/services/workingwithntouchequipment',
      },
    ],
  },
] as const;

const DATA_PRODUCTION: NavListModalProps[] = [
  {
    id: 1,
    title: 'Продукция',
    list: [
      {
        name: 'Турникеты',
        href: '/products/turnstiles/',
        image: '/img/product-item-1.webp',
      },
      {
        name: 'Коммутаторы',
        href: '/products/switches/',
        image: '/img/product-item-2.webp',
      },
      {
        name: 'Серверные шкафы',
        href: '/products/serverCabinets/',
        image: '/img/product-item-3.webp',
      },
      {
        name: 'Видеорегистраторы',
        href: '/products/nvr/',
        image: '/img/product-item-4.webp',
      },
      {
        name: 'Видеокамеры',
        href: '/products/cameras/',
        image: '/img/product-item-5.webp',
      },
    ],
  },
] as const;

export const DATA_MODAL: Record<ModalVariant, NavListModalProps[]> = {
  Производство: DATA_PRODUCTION,
  Сервис: DATA_SERVICE,
} as const;
