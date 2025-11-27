import type { ProductConfig } from '@/shared/types/products.types';

export const SERVERCABINETS_600: ProductConfig = {
  id: 2,
  model: '600',
  name: 'НАСТЕННЫЙ СЕРВЕРНЫЙ ШКАФ',
  category: 'SERVERCABINETS',
  feature: 'до 45 кг',

  gallery: {
    images: ['/img/servercabinets-600-image1.png', '/img/servercabinets-600-image2.png'],
  },

  keySpecs: {
    layout: 'layout3',
    items: [
      {
        id: 1,
        title: 'Экономичная упаковка',
        description: 'Снижает расходы на доставку и хранение.',
      },
      {
        id: 2,
        title: 'Удобная прокладка кабеля',
        description: 'Ввод сверху, снизу и сзади.',
      },
      {
        id: 3,
        title: 'Универсальное крепление',
        description: 'Напольное, настенное; возможна установка колёс.',
      },
      {
        id: 4,
        title: 'Стандарт 19"',
        description: 'Стойки 465 мм между отверстиями, 450 мм между балками.',
      },
      {
        id: 5,
        title: 'Классические цвета',
        description: 'Черный RAL9004, серый RAL7035, другие по заказу.',
      },
      {
        id: 6,
        title: 'Съёмные боковые панели',
        description: 'Простой монтаж и подключение.',
      },
    ],
  },

  dimensions: {
    images: ['/img/servercabinets-600-dimensions.jpg'],
  },

  specifications: {
    general: {
      tabs: [
        'Тех. характеристики',
        'Обзор деталей',
        'Развернутый вид',
        'Боковой обзор',
        'Цветовая палитра',
      ],
      data: [
        {
          label: 'Тех. характеристики',
          variant: 'text',
          item: [
            {
              title: 'Защита',
              subtitle: 'степень IP20',
            },
            {
              title: 'Толщина',
              subtitle: 'панели 0,9 мм, балки 1,5 мм',
            },
            {
              title: 'Отверстия вентилятора',
              subtitle: 'шаг 5 мм',
            },
            {
              title: 'Макс. нагрузка',
              subtitle: 'до 45 кг',
            },
            {
              title: 'Вентиляция',
              subtitle: 'Сверху',
            },
          ],
        },
        {
          label: 'Обзор деталей',
          variant: 'images',
          item: [
            {
              id: 1,
              title: 'Стеклянная передняя дверца',
              images: '/img/SpecImages/server-1.webp',
            },
            {
              id: 2,
              title: 'Задняя панель',
              images: '/img/SpecImages/server-2.webp',
            },
            {
              id: 3,
              title: 'Боковая панель',
              images: '/img/SpecImages/server-3.webp',
            },
            {
              id: 4,
              title: 'Верхняя панель',
              images: '/img/SpecImages/server-4.webp',
            },
            {
              id: 5,
              title: 'Стеклянная передняя дверца',
              images: '/img/SpecImages/server-5.webp',
            },
            {
              id: 6,
              title: ' Нижняя панель',
              images: '/img/SpecImages/server-6.webp',
            },
          ],
        },
        {
          label: 'Развернутый вид',
          variant: 'schema',
          item: [
            { id: 1, title: 'Верхняя панель', description: 'Монтажная панель' },
            { id: 2, title: 'Рама', description: 'Задняя панель' },
            { id: 3, title: '19-дюймовый монтажный профиль', description: 'Нижняя панель' },
            { id: 4, title: 'Ручка передней двери', description: 'Боковая панель' },
          ],
        },
        {
          label: 'Боковой обзор',
          variant: 'product',
          item: [
            { id: 1, model: 'NT6606S', dimensions: '600×600×350', units: '6' },
            { id: 2, model: 'NT6609S', dimensions: '600X600X500', units: '9' },
            { id: 3, model: 'NT6612S', dimensions: '600X600X640', units: '12' },
            { id: 4, model: 'NT6615S', dimensions: '600×600×1000', units: '15' },
            { id: 5, model: 'NT6622', dimensions: '600×600×1200', units: '22' },
          ],
        },
        {
          label: 'Цветовая палитра',
          variant: 'text',
          item: [
            { title: 'Черный', subtitle: 'RAL9004' },
            { title: 'светло-серый', subtitle: 'RAL7035' },
            { title: 'Другие цвета', subtitle: 'По индивидуальному заказу' },
          ],
        },
      ],
    },
  },
};
