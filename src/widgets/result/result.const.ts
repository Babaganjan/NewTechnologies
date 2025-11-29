import type { ResultItem } from '@/widgets/result/Result.types';

export const resultData: ResultItem[] = [
  {
    id: 1,
    type: 'number',
    number: '100+',
    title: 'Опытных сотрудников',
    description: 'От первых монтажей до инженерных решений — постоянное обучение и рост.',
    className: 'result__item--fill',
  },
  {
    id: 2,
    type: 'text',
    title: 'Собственная разработка по',
    description:
      'Платформы с простой интеграцией, модульной архитектурой и масштабируемостью под любые задачи.',
  },
  {
    id: 3,
    type: 'mixed',
    number: '12',
    title: 'Лет успешной работы',
    layout: {
      title: 'item__title-width',
    },
  },
  {
    id: 4,
    type: 'text',
    title: 'Собственное производство оборудования',
    description:
      'От проектирования до монтажа. Надёжные решения под ключ с гарантией до 12 месяцев.',
  },
  {
    id: 5,
    type: 'layout',
    number: '2000+',
    title: 'Успешно реализованных проектов',
    description:
      'Возьмемся за проект любого масштаба: от частных владений до объектов национального значения.',
    className: 'result__item-layout',
    layout: {
      item: 'result__item-layout',
      inner: 'item__inner-layout',
      number: 'item__number-layout',
      title: 'item__title-layout',
      description: 'item__prev-layout',
    },
  },
];
