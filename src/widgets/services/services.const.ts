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
        desc: ''
      },
      {
        name: 'Охранно-пожарная сигнализация',
        image: 'img/modalHeader/security-fire-alarm-system.webp',
        href: '/services/ops',
        desc: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        name: 'Система контроля доступа',
        image: 'img/modalHeader/access-control-system.webp',
        href: '/services/skd',
        desc: ''
      },
      {
        name: 'Системы оповещения',
        image: 'img/modalHeader/notification-system.webp',
        href: '/services/opoveshchenie',
        desc: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления'
      },
      {
        name: 'Системы пожаротушения',
        image: 'img/modalHeader/fire-extinguishing-system.webp',
        href: '/services/pozhartushenie',
        desc: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления'
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
        href: '/',
        desc: ''
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
        desc: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления'
      },
      {
        name: 'Проектирование серверов',
        image: 'img/modalHeader/security-fire-alarm-system.webp',
        href: '/services/ops',
        desc: ''
      },
      {
        name: 'Проектирование сетей',
        image: 'img/modalHeader/access-control-system.webp',
        href: '/services/skd',
        desc: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления'
      },
    ],
  },
] as const;
