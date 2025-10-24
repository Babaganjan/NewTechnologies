// import type{ NavListModalProps } from '../../types/NavListModalProps.types';

// export const DATA_SERVICE_MODAL: NavListModalProps[] = [
//     {
//         id: 1,
//         title: 'Системы защиты',
//         list: [
//             'Системы видеонаблюдения', 
//             'Охранно-пожарная сигнализация', 
//             'Система контроля доступа', 
//             'Системы оповещения', 
//             'Системы пожаротушения'
//         ]
//     },
//     {
//         id: 2,
//         title: 'IT-решения',
//         list: [
//             'Системы видеонаблюдения', 
//             'Охранно-пожарная сигнализация', 
//             'Система контроля доступа', 
//             'Системы оповещения', 
//             'Системы пожаротушения'
//         ]
//     },
//     {
//         id: 3,
//         title: 'Обучение',
//         list: [
//             'Системы видеонаблюдения', 
//             'Охранно-пожарная сигнализация', 
//             'Система контроля доступа', 
//             'Системы оповещения', 
//             'Системы пожаротушения'
//         ]
//     }
// ]
import type { NavListModalProps } from '../../types/NavListModalProps.types';

export const DATA_SERVICE_MODAL: NavListModalProps[] = [
  {
    id: 1,
    title: 'Системы защиты',
    list: [
      { name: 'Системы видеонаблюдения', image: 'https://example.com/camera.jpg' },
      { name: 'Охранно-пожарная сигнализация', image: 'https://example.com/alarm.jpg' },
      { name: 'Система контроля доступа', image: 'https://example.com/access.jpg' },
      { name: 'Системы оповещения' },  // Без картинки — опционально
      { name: 'Системы пожаротушения', image: 'https://example.com/fire.jpg' }
    ]
  },
  {
    id: 2,
    title: 'IT-решения',
    list: [
      { name: 'Системы видеонаблюдения', image: 'https://example.com/it-camera.jpg' },
      { name: 'Охранно-пожарная сигнализация' },  // Без картинки
      { name: 'Система контроля доступа', image: 'https://example.com/it-access.jpg' },
      { name: 'Системы оповещения', image: 'https://example.com/it-alert.jpg' },
      { name: 'Системы пожаротушения' }
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
