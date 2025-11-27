import type { ProductConfig } from '@/shared/types/products.types';

export const SWITCH_NT_PM_R10: ProductConfig = {
  id: 8,
  model: 'nt-pm-r10',
  name: '8-ми портовой коммутатор poe + 2 uplink ports',
  category: 'SWITCHES',
  feature: '2.8 гбит/сек',

  gallery: {
    images: ['/img/switch-nt-pm-r10-image1.png', '/img/switch-nt-pm-r10-image2.png'],
  },

  keySpecs: {
    layout: 'layout3',
    items: [
      {
        id: 1,
        title: 'Пропускная способность',
        value: '2.8',
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
        value: '2K',
        type: 'titleNone',
        unit: '/ МАС-адрес',
        id: 5,
        description:
          'Коммутатор может запомнить и идентифицировать до 2000 подключенных устройств для эффективной работы сети.',
      },
    ],
  },

  dimensions: {
    images: ['/img/switch-nt-pm-r10-dimensions.jpg'],
  },

  specifications: {
    general: {
      tabs: ['Порты', 'Производительность', 'Стандарты'],
      data: [
        {
          label: 'Порты',
          variant: 'text',
          item: [
            {
              title: 'PoE порты',
              subtitle: '8×10/100/1000Base-T портов PoE',
            },
            {
              title: 'Uplink порты',
              subtitle: '2×10/100/1000Base-T портов',
            },
          ],
        },
        {
          label: 'Производительность',
          variant: 'text',
          item: [
            {
              title: 'Пропускная способность',
              subtitle: '2.8 Гбит/с',
            },
            {
              title: 'Скорость пересылки пакетов',
              subtitle: '2 Гбит/с',
            },
            {
              title: 'Таблица MAC-адресов',
              subtitle: '2K записей',
            },
            {
              title: 'Метод коммутации',
              subtitle: 'Store-and-Forward',
            },
          ],
        },
        {
          label: 'Стандарты',
          variant: 'text',
          item: [
            {
              title: 'Базовые стандарты',
              subtitle: 'IEEE802.3, IEEE802.3i 10Base-T, IEEE802.3u 100Base-T',
            },
            {
              title: 'Управление потоком',
              subtitle: 'IEEE802.3x Flow Control',
            },
            {
              title: 'VLAN',
              subtitle: 'IEEE802.1Q VLAN',
            },
            {
              title: 'PoE стандарты',
              subtitle: 'IEEE802.3af PoE, IEEE802.3AT PoE+',
            },
          ],
        },
      ],
    },
    technical: {
      tabs: [
        'PoE',
        'Питание',
        'Передача данных',
        'Индикаторы',
        'Эксплуатация',
        'Физические параметры',
      ],
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
          label: 'Передача данных',
          variant: 'text',
          item: [
            {
              title: 'Кабель категории 5',
              subtitle: 'Обычный режим: 100 м; Сверхдальний режим: 250 м',
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
              subtitle: 'Индикатор сверхдальнего режима передачи',
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
