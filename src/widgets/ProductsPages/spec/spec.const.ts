import type { SpecItem, TabLabel } from './spec.types';
import { makeTabs } from './utils/makeTabs';

export const tabPanels = makeTabs(['Камера', 'Обьектив', 'Расстояния DORI', 'апуцпкуп', 'gregreg']);

export const specificationsLowercase: Partial<Record<TabLabel, SpecItem[]>> = {
  Камера: [
    {
      title: 'тип объектива',
      subtitle: 'фиксированный объектив, фиксированное фокусное расстояние',
    },
    {
      title: 'диафрагма',
      subtitle: 'фиксированная диафрагма',
    },
    {
      title: 'фокусное расстояние',
      subtitle: '2.8 мм, 4 мм',
    },
    {
      title: 'максимальная апертура',
      subtitle: 'f1.6',
    },
    {
      title: 'угол обзора (fov)',
      subtitle: '2.8 мм: г: 110.5°, в: 60.0° / 4 мм: г: 92°, в: 46.3°',
    },
  ],
  Обьектив: [
    {
      title: 'тип объектива',
      subtitle: 'моторизованный вариофокальный',
    },
    {
      title: 'диафрагма',
      subtitle: 'фиксированная',
    },
    {
      title: 'фокусное расстояние',
      subtitle: 'от 2.7 до 13.5 мм',
    },
    {
      title: 'максимальная апертура',
      subtitle: 'f1.6',
    },
    {
      title: 'угол обзора (fov)',
      subtitle: 'г: 101° to 29.3°, в: 54.4° to 12.6°',
    },
  ],
};
