import type { ProductConfig } from '@/shared/types/products.types';

export const NVR_NT_NVR3708E1_P8: ProductConfig = {
  id: 1,
  model: 'nt-nvr3708e1-p8',
  name: '8-ми канальный ip-регистратор',
  category: 'NVR',
  feature: '40 мбит/сек',

  gallery: {
    images: ['/img/nvr-image1.png', '/img/nvr-image2.png', '/img/nvr-image3.png'],
  },

  keySpecs: {
    layout: 'layout1',
    items: [
      {
        id: 1,
        title: 'Входящая/Исходящая Пропуская способность',
        value: '40',
        type: 'singleValue',
        unit: '/ Мбит/сек',
      },
      {
        id: 2,
        title: 'Поддержка интерфейса 1 HDMI(4К)/1 VGA:',
        type: 'subtitle',
        description:
          'Даёт возможность подключить два монитора одновременно — современный телевизор (4K) и офисный монитор для гибкой работы.',
      },
      {
        id: 3,
        title: 'Подключение до 8-ми видеокамер',
        description:
          'Позволяет создать полноценную систему видеонаблюдения с охватом всех критических зон объекта.',
      },
      {
        id: 5,
        title: 'Декодирование до 1-кан. @ 8MP/4-ch @ 1080P/8-кан. @ D1',
        description:
          'Обеспечивает одновременный просмотр видео в высоком качестве со всех камер, даже в многоэкранном режиме.',
      },
      {
        id: 7,
        title: 'Plug & Play 8 POE портов',
        description:
          'Позволяет подключить и сразу начать работу с 8 камерами по технологии «включил и работай» без лишних проводов и настроек.',
      },
      {
        id: 6,
        value: '1 sata',
        unit: '/ до 8 тб',
        description:
          'Позволяет установить внушительный жёсткий диск для записи и длительного хранения видеоархива без частого удаления файлов',
      },
    ],
  },

  dimensions: {
    images: ['/img/nvr-dimensions.jpg'],
  },

  specifications: {
    general: {
      tabs: ['Видео', 'Запись', 'Воспроизведение', 'Тревога'],
      data: [
        {
          label: 'Видео',
          variant: 'text',
          item: [
            {
              title: 'Видеовход',
              subtitle: '8 IP каналов',
            },
            {
              title: 'Входящая пропускная способность',
              subtitle: '40 Mbps',
            },
            {
              title: 'Выходная пропускная способность',
              subtitle: '40 Mbps',
            },
            {
              title: 'HDMI выход',
              subtitle: '3840 × 2160, 1920 × 1080, 1280 × 1024, 1024 × 768',
            },
            {
              title: 'VGA выход',
              subtitle: '1920 × 1080, 1280 × 1024, 1024 × 768',
            },
            {
              title: 'Декодирующая способность',
              subtitle: '1 канал 8MP, 4 канала 1080P, 8 каналов D1',
            },
            {
              title: 'Многожранный дисплей',
              subtitle: '1/4/9',
            },
          ],
        },
        {
          label: 'Запись',
          variant: 'text',
          item: [
            {
              title: 'Разрешение записи',
              subtitle: '8MP, 6MP, 5MP, 4MP, 3MP, 1080P, 720P',
            },
            {
              title: 'Режим записи',
              subtitle: 'Ручной, Расписание (Обычный, Непрерывный), Событие',
            },
            {
              title: 'Срабатывания по тревоге',
              subtitle: 'Обнаружение движения, потеря видео, IVS',
            },
          ],
        },
        {
          label: 'Воспроизведение',
          variant: 'text',
          item: [
            {
              title: 'Синхронное воспроизведение',
              subtitle: '8/4/1 каналов',
            },
            {
              title: 'Режим поиска',
              subtitle: 'Время/Дата, Будильник, Сетка изображений, Событие',
            },
            {
              title: 'Резервный режим',
              subtitle: 'USB-устройство, сеть',
            },
          ],
        },
        {
          label: 'Тревога',
          variant: 'text',
          item: [
            {
              title: 'Общая тревога',
              subtitle: 'Обнаружение движения, потеря видео',
            },
            {
              title: 'Интеллектуальные функции',
              subtitle:
                'Обнаружение курения, обнаружение дыма и огня, обнаружение места возгорания, вторжение, пересечение одной линии, пересечение двойной линии, праздношатание, движение по встречной полосе, незаконная парковка, подсчет людей',
            },
            {
              title: 'Аномальные тревоги',
              subtitle: 'Disk Alarm, IP Address Conflict, Network Disconnect',
            },
          ],
        },
      ],
    },
    technical: {
      tabs: ['Сеть', 'Интерфейсы', 'Общие характеристики'],
      data: [
        {
          label: 'Сеть',
          variant: 'text',
          item: [
            {
              title: 'Протоколы',
              subtitle:
                'HTTP, HTTPS, TCP/IP, IPv4/IPv6, UPhP, UDP, RTSP, SMTP, NTP, DNS, DHCP, P2P, IP Filter, DDNS, 802.1X, SNMP, 3G/4G, PPPoE',
            },
            {
              title: 'Удалённые пользователи',
              subtitle: '8 пользователей',
            },
            {
              title: 'P2P',
              subtitle: 'Поддерживается',
            },
            {
              title: 'Поддержка',
              subtitle: 'ONVIF, SDK, CGI',
            },
          ],
        },
        {
          label: 'Интерфейсы',
          variant: 'text',
          item: [
            {
              title: 'HDD интерфейс',
              subtitle: '1 интерфейс SATA, емкость до 8 ТБ для каждого диска',
            },
            {
              title: 'Сетевой интерфейс',
              subtitle: '1 × RJ-45, 10/100 Mbps самоадаптивный порт Ethernet',
            },
            {
              title: 'PoE интерфейс',
              subtitle: '8 портов, 10/100Mbps, 802.3af, макс. 48W',
            },
            {
              title: 'HDMI',
              subtitle: '1 порт',
            },
            {
              title: 'VGA',
              subtitle: '1 порт',
            },
            {
              title: 'Аудиовход/выход',
              subtitle: '1 канал аудиовыход',
            },
            {
              title: 'USB интерфейс',
              subtitle: 'Передняя панель: 2 × USB 2.0, Задняя панель: 1 × USB 2.0',
            },
          ],
        },
        {
          label: 'Общие характеристики',
          variant: 'text',
          item: [
            {
              title: 'Блок питания',
              subtitle: '48VDC/1.25A',
            },
            {
              title: 'Потребляемая мощность',
              subtitle: '< 15 W (без HDD)',
            },
            {
              title: 'Условия эксплуатации',
              subtitle: '-10 °C до 50 °C (14 °F to 122 °F)',
            },
            {
              title: 'Условия хранения',
              subtitle: 'Менее 90% относительной влажности',
            },
            {
              title: 'Сертификаты',
              subtitle: 'CE/FCC',
            },
            {
              title: 'Габариты',
              subtitle: '255 × 235.0 × 45.3 mm (10.04 × 9.25 × 1.78)',
            },
            {
              title: 'Вес',
              subtitle: '1 кг без HDD',
            },
          ],
        },
      ],
    },
  },
};
