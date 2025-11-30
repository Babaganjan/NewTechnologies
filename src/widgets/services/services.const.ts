import type { ServicesProps } from './services.type';

export const SERVICES_ITEMS: ServicesProps[] = [
  {
    id: 1,
    title: 'Системы защиты',
    list: [
      {
        name: 'Системы видеонаблюдения',
        image: 'img/modalHeader/video-surveillance-system.webp',
        href: '/services/videonabludenie',
      },
      {
        name: 'Охранно-пожарная сигнализация',
        image: 'img/modalHeader/security-fire-alarm-system.webp',
        href: '/services/ops',
      },
      {
        name: 'Система контроля доступа',
        image: 'img/modalHeader/access-control-system.webp',
        href: '/services/skd',
      },
      {
        name: 'Системы оповещения',
        image: 'img/modalHeader/notification-system.webp',
        href: '/services/opoveshchenie',
      },
      {
        name: 'Системы пожаротушения',
        image: 'img/modalHeader/fire-extinguishing-system.webp',
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
        image: 'img/modalHeader/for-educational-institutions.webp',
        href: '/itsolutionspublicprivate',
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
