import type { ProductConfig } from '@/shared/types/products.types';

export const SWITCH_NT_PG_F2R26: ProductConfig = {
  id: 6,
  model: 'nt-pg-f2r26',
  name: '24-х портовой коммутатор + 2 uplink ports + 2 sfp ports',
  category: 'SWITCHES',
  feature: '56 гбит/сек',

  gallery: {
    images: ['/img/switch-nt-pg-f2r26-image1.png', '/img/switch-nt-pg-f2r26-image2.png'],
  },

  keySpecs: {
    layout: 'layout3',
    items: [
      {
        id: 1,
        title: 'Пропускная способность',
        value: '56',
        type: 'singleValue',
        unit: '/ гбит/сек',
      },
      {
        id: 2,
        title: 'Входное напряжение: 100-240 В переменного тока, 50/60 Гц, 400 Вт',
        description:
          'Гарантирует корректную работу оборудования при перепадах напряжения и в разных странах без риска повреждения.',
      },
      {
        id: 3,
        title: 'Скорость пересылки пакетов',
        value: '42',
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
        value: '16к',
        type: 'titleNone',
        unit: '/ МАС-адрес',
        id: 5,
        description:
          'Коммутатор может запомнить и идентифицировать до 16000 подключенных устройств для эффективной работы сети.',
      },
    ],
  },

  dimensions: {
    images: ['/img/switch-nt-pg-f2r26-dimensions.jpg'],
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
              subtitle: '24×10/100/1000Base-T Gigabit PoE портов',
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
              subtitle: '56 Гбит/с',
            },
            {
              title: 'Скорость пересылки пакетов',
              subtitle: '42 Мбит/с',
            },
            {
              title: 'Таблица MAC-адресов',
              subtitle: '16K записей',
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
              subtitle: '24 порта',
            },
            {
              title: 'Напряжение PoE',
              subtitle: '48 В DC',
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
              title: 'Общая мощность',
              subtitle: '400 Вт',
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
              subtitle: '440×290×44 мм',
            },
            {
              title: 'Вес',
              subtitle: '4.8 кг',
            },
          ],
        },
      ],
    },
  },
};
