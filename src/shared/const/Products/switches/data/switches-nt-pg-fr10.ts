import type { ProductConfig } from '@/shared/types/products.types';

export const SWITCH_NT_PG_FR10: ProductConfig = {
  id: 4,
  model: 'nt-pg-fr10',
  name: '8-ми портовой коммутатор poe + 2 uplink ports gigabyte',
  category: 'SWITCHES',
  feature: '28 гбит/сек',

  gallery: {
    images: ['/img/switch-nt-pg-fr10-image1.png', '/img/switch-nt-pg-fr10-image2.png'],
  },

  keySpecs: {
    layout: 'layout3',
    items: [
      {
        id: 1,
        title: 'Пропускная способность',
        value: '28',
        type: 'singleValue',
        unit: '/ гбит/сек',
      },
      {
        id: 2,
        title: 'Входное напряжение: 100-240 В переменного тока, 50/60 Гц, 350 Вт',
        description:
          'Гарантирует корректную работу оборудования при перепадах напряжения и в разных странах без риска повреждения.',
      },
      {
        id: 3,
        title: 'Скорость пересылки пакетов',
        value: '16',
        type: 'singleValue',
        unit: '/ мбит/сек',
      },
      {
        id: 4,
        title: 'Тип управления сетью: L2 неуправляемый',
        description:
          'Коммутатор работает автоматически — он готов к работе сразу после подключения кабелей без дополнительных настроек.',
      },
      {
        value: '4к',
        type: 'titleNone',
        unit: '/ МАС-адрес',
        id: 5,
        description:
          'Коммутатор может запомнить и идентифицировать до 4000 подключенных устройств для эффективной работы сети.',
      },
    ],
  },

  dimensions: {
    images: ['/img/switch-nt-pg-fr10-dimensions.jpg'],
  },

  specifications: {
    general: {
      tabs: ['Порты', 'Производительность', 'Передача данных'],
      data: [
        {
          label: 'Порты',
          variant: 'text',
          item: [
            {
              title: 'PoE порты',
              subtitle: '8×10/100/1000Base-T Gigabit PoE портов',
            },
            {
              title: 'SFP uplink порты',
              subtitle: '2×гигабитных оптических порта SFP uplink',
            },
          ],
        },
        {
          label: 'Производительность',
          variant: 'text',
          item: [
            {
              title: 'Пропускная способность',
              subtitle: '28 Гбит/с',
            },
            {
              title: 'Скорость пересылки пакетов',
              subtitle: '16 Мбит/с',
            },
            {
              title: 'Таблица MAC-адресов',
              subtitle: '4K записей',
            },
            {
              title: 'Метод коммутации',
              subtitle: 'Store-and-Forward',
            },
          ],
        },
        {
          label: 'Передача данных',
          variant: 'text',
          item: [
            {
              title: 'Кабель категории 5',
              subtitle: '100 метров',
            },
            {
              title: 'Многомодовое волокно',
              subtitle: '550 метров',
            },
            {
              title: 'Одномодовое волокно',
              subtitle: '20/40/80/120 километров',
            },
          ],
        },
      ],
    },
    technical: {
      tabs: ['PoE', 'Питание', 'Индикаторы', 'Эксплуатация', 'Физические параметры'],
      data: [
        {
          label: 'PoE',
          variant: 'text',
          item: [
            {
              title: 'PoE порты',
              subtitle: '8 портов',
            },
            {
              title: 'Напряжение PoE',
              subtitle: '50 В DC',
            },
            {
              title: 'Мощность на порт',
              subtitle: 'до 30 Вт',
            },
            {
              title: 'Полярность питания',
              subtitle: '1/2 (+), 3/6 (-)',
            },
          ],
        },
        {
          label: 'Питание',
          variant: 'text',
          item: [
            {
              title: 'Входное напряжение AC',
              subtitle: '100-240 В AC, 50/60 Гц',
            },
            {
              title: 'Входное напряжение DC',
              subtitle: '48-57 В DC',
            },
            {
              title: 'Общая мощность',
              subtitle: '350 Вт',
            },
          ],
        },
        {
          label: 'Индикаторы',
          variant: 'text',
          item: [
            {
              title: 'PWR',
              subtitle: 'Индикатор питания',
            },
            {
              title: 'VLAN',
              subtitle: 'Индикатор режима VLAN',
            },
            {
              title: 'PoE',
              subtitle: 'Индикатор питания портов',
            },
            {
              title: 'LINK/SPEED',
              subtitle: 'Индикатор подключения и скорости электрических портов',
            },
            {
              title: 'SFP LINK',
              subtitle: 'Индикатор подключения оптического порта',
            },
          ],
        },
        {
          label: 'Эксплуатация',
          variant: 'text',
          item: [
            {
              title: 'Рабочая температура',
              subtitle: '-10 ~ +55°C',
            },
            {
              title: 'Температура хранения',
              subtitle: '-40 ~ +70°C',
            },
            {
              title: 'Рабочая влажность',
              subtitle: '10~90% без конденсата',
            },
            {
              title: 'Влажность хранения',
              subtitle: '5~90% без конденсата',
            },
          ],
        },
        {
          label: 'Физические параметры',
          variant: 'text',
          item: [
            {
              title: 'Размеры (Ш×Г×В)',
              subtitle: '270×180×42 мм',
            },
            {
              title: 'Вес',
              subtitle: '2 кг',
            },
          ],
        },
      ],
    },
  },
};
