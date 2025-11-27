import type { ProductConfig } from '@/shared/types/products.types';

export const SWITCH_NT_PG_F2R10: ProductConfig = {
  id: 2,
  model: 'nt-pg-f2r10',
  name: '10-ти портовой коммутатор + 2 sfp ports gigabyte',
  category: 'SWITCHES',
  feature: '20 гбит/сек',

  gallery: {
    images: ['/img/switch-nt-pg-f2r10-image1.png', '/img/switch-nt-pg-f2r10-image2.png'],
  },

  keySpecs: {
    layout: 'layout3',
    items: [
      {
        id: 1,
        title: 'Пропускная способность',
        value: '20',
        type: 'singleValue',
        unit: '/ гбит/сек',
      },
      {
        id: 2,
        title: 'Входное напряжение: 100-240 В переменного тока, 50/60 Гц, 120 Вт',
        description:
          'Гарантирует корректную работу оборудования при перепадах напряжения и в разных странах без риска повреждения.',
      },
      {
        id: 3,
        title: 'Скорость пересылки пакетов',
        value: '12',
        type: 'singleValue',
        unit: '/ мбит/сек',
      },
      {
        id: 4,
        title: 'Тип веб-мастера: не для веб-мастеров',
        description:
          'Продукт предназначен для конечных пользователей, а не для разработчиков или системных интеграторов.',
      },
      {
        value: '8к',
        type: 'titleNone',
        unit: '/ МАС-адрес',
        id: 5,
        description:
          'Коммутатор может запомнить и идентифицировать до 8000 подключенных устройств для эффективной работы сети.',
      },
    ],
  },

  dimensions: {
    images: ['/img/switch-nt-pg-f2r10-dimensions.jpg'],
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
              title: 'Медные порты',
              subtitle: '8×10/100/1000Base-T PoE + портов + 2×10/100/1000Base-T портов',
            },
            {
              title: 'SFP порты',
              subtitle: '2 SFP порта',
            },
            {
              title: 'PoE порты',
              subtitle: '8 портов PoE+',
            },
          ],
        },
        {
          label: 'Производительность',
          variant: 'text',
          item: [
            {
              title: 'Пропускная способность',
              subtitle: '20 Гбит/с',
            },
            {
              title: 'Скорость пересылки пакетов',
              subtitle: '12 Мбит/с',
            },
            {
              title: 'Таблица MAC-адресов',
              subtitle: '8K записей',
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
              subtitle: 'Обычный режим: 100 м; Сверхдальний режим: 250 м',
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
              title: 'Стандарт PoE',
              subtitle: 'IEEE 802.3af/at',
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
              title: 'Входное напряжение',
              subtitle: '100-240 В AC, 50/60 Гц',
            },
            {
              title: 'Общая мощность',
              subtitle: '120 Вт',
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
              title: 'S',
              subtitle: 'Индикатор сверхдальнего режима',
            },
            {
              title: 'V',
              subtitle: 'Индикатор режима VLAN',
            },
            {
              title: 'PoE 1-8',
              subtitle: 'Индикатор питания портов PoE',
            },
            {
              title: 'LINK 1-10',
              subtitle: 'Индикатор подключения электрических портов',
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
              subtitle: '200×120×44 мм',
            },
            {
              title: 'Вес',
              subtitle: '1 кг',
            },
          ],
        },
      ],
    },
  },
};
