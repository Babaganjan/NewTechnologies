import type { NavListModalProps } from '../../types/NavListModalProps.types';

export const DATA_SERVICE_MODAL: NavListModalProps[] = [
  {
    id: 1,
    title: 'Системы защиты',
    list: [
      { name: 'Системы видеонаблюдения', image: 'img/modalHeader/video-surveillance-system.webp' },
      { name: 'Охранно-пожарная сигнализация', image: 'img/modalHeader/security-fire-alarm-system.webp' },
      { name: 'Система контроля доступа', image: 'img/modalHeader/access-control-system.webp' },
      { name: 'Системы оповещения', image: 'img/modalHeader/notification-system.webp'},
      { name: 'Системы пожаротушения', image: 'img/modalHeader/fire-extinguishing-system.webp' }
    ]
  },
  {
    id: 2,
    title: 'IT-решения',
    list: [
      { name: 'Для учреждений образования', image: 'img/modalHeader/for-educational-institutions.webp' },
    ]
  },
  {
    id: 3,
    title: 'Обучение',
    list: [
      { name: 'Системы видеонаблюдения' },
      { name: 'Охранно-пожарная сигнализация', image: 'https://example.com/training-alarm.jpg' },
      { name: 'Система контроля доступа' },
      { name: 'Системы оповещения' },
      { name: 'Системы пожаротушения', image: 'https://example.com/training-fire.jpg' }
    ]
  }
];
