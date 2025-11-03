import type { ModalVariant, NavListModalProps } from './nav-Item.types';

const DATA_SERVICE: NavListModalProps[] = [
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
        name: 'Для образовательных учреждений',
        image: 'img/modalHeader/for-educational-institutions.webp',
        href: '/',
      },
    ],
  },
  {
    id: 3,
    title: 'Обучение',
    list: [
      {
        name: 'Внедрение  It-инфраструктуры',
        image: 'img/modalHeader/video-surveillance-system.webp',
        href: '/services/videonabludenie',
      },
      {
        name: 'Проектирование серверов',
        image: 'img/modalHeader/security-fire-alarm-system.webp',
        href: '/services/ops',
      },
      {
        name: 'Проектирование сетей',
        image: 'img/modalHeader/access-control-system.webp',
        href: '/services/skd',
      },
    ],
  },
] as const;

const DATA_PRODUCTION: NavListModalProps[] = [
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
        name: 'Для учреждений образования',
        image: 'img/modalHeader/for-educational-institutions.webp',
        href: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Обучение',
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
] as const;

export const DATA_MODAL: Record<ModalVariant, NavListModalProps[]> = {
  Производство: DATA_PRODUCTION,
  Сервис: DATA_SERVICE,
} as const;
