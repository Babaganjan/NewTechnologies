import type { ProductConfig } from '@/shared/types/products.types';

export const NVR_NT_NVR5008E1: ProductConfig = {
  id: 8,
  model: 'nt-nvr5008e1',
  name: '8-ми канальный регистратор с 1 hdd',
  category: 'NVR',
  feature: '320 Мбит/сек',

  gallery: {
    images: [
      '/img/product/nvr/nt-nvr5008e1/gallery/0.webp',
      '/img/product/nvr/nt-nvr5008e1/gallery/1.webp',
      '/img/product/nvr/nt-nvr5008e1/gallery/2.webp',
    ],
  },

  keySpecs: {
    layout: 'layout1',
    items: [
      {
        id: 1,
        title: 'Входящая/Исходящая Пропуская способность',
        value: '320',
        type: 'singleValue',
        unit: '/ Мбит/сек',
      },
      {
        id: 2,
        title: 'Умный поиск и воспроизведение:',
        type: 'subtitle',
        description:
          'Позволяет мгновенно находить и просматривать нужные моменты в записи по типу события (движение, человек, звук).',
      },
      {
        id: 3,
        title: 'Поддержка подключения до 8 IP-камер',
        description:
          'Позволяет создать полноценную систему видеонаблюдения с охватом всех критических зон объекта.',
      },
      {
        id: 5,
        title: 'Поддержка обновления прошивки через облако',
        description:
          'Обновляйте систему видеонаблюдения автоматически через интернет — без лишних проводов и сложных настроек.',
      },
      {
        id: 6,
        title: 'Наличие 1 HDMI и 1 VGA видеовыхода',
        description:
          'Даёт возможность подключить два монитора одновременно — современный телевизор (4K) и офисный монитор для гибкой работы.',
      },
      {
        id: 7,
        value: '1 sata',
        title: 'Поддержка подключения',
        type: 'titleEmpty',
        unit: '/ до 8 тб',
        description:
          'Позволяет установить1 жёсткий диск для записи и длительного хранения видеоархива без частого удаления файлов.',
      },
      {
        id: 8,
        title: '1 сетевой порт RJ-45 10/100 Мбит/с',
        description:
          'Пропускная способность до 100 Мбит/с гарантирует, что ни одно событие не будет пропущено из-за медленной сети.',
      },
      {
        id: 9,
        title: 'Поддержка декодирования',
        description: '1 канал до 6MP или 4 канала до 1080P',
      },
    ],
  },

  dimensions: {
    images: [
      '/img/product/nvr/nt-nvr5008e1/size/1.webp',
      '/img/product/nvr/nt-nvr5008e1/size/2.webp',
    ],
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
              title: 'IP видеовход',
              subtitle: '8 каналов',
            },
            {
              title: 'Входящая пропускная способность',
              subtitle: '64 Mbps',
            },
            {
              title: 'Выходная пропускная способность',
              subtitle: '64 Mbps',
            },
            {
              title: 'HDMI выход',
              subtitle: '1920 × 1080, 1280 × 1024, 1024 × 768',
            },
            {
              title: 'VGA выход',
              subtitle: '1920 × 1080, 1280 × 1024, 1024 × 768',
            },
            {
              title: 'Декодирующая способность',
              subtitle: '1 канал 6MP, 4 канала 1080P, 8 каналов D1@30fps',
            },
            {
              title: 'Многоканальный дисплей',
              subtitle: '1/4/8/9',
            },
          ],
        },
        {
          label: 'Запись',
          variant: 'text',
          item: [
            {
              title: 'Разрешение записи',
              subtitle: '6MP, 5MP, 4MP, 3MP, 1080P, 720P, D1',
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
              subtitle: '8 каналов',
            },
            {
              title: 'Режим поиска',
              subtitle: 'Время/Дата, Будильник, Сетка изображений, Событие',
            },
            {
              title: 'Резервный режим',
              subtitle: 'USB-устройство, сеть',
            },
            {
              title: 'Умный поиск и воспроизведение',
              subtitle: 'Поддерживается',
            },
          ],
        },
        {
          label: 'Тревога',
          variant: 'text',
          item: [
            {
              title: 'Общие тревоги',
              subtitle: 'Motion Detection, Video Loss, Alarm in, Alarm out',
            },
            {
              title: 'Интеллектуальный анализ (по камере)',
              subtitle:
                'Smoking Detection, Smoke and Fire Detection, Fire Spot Detection, Intrusion, Single/Double Line Crossing, Loitering, Wrong-way, Illegal Parking, People Counting, Smart motion detection, Enter/Leave Area',
            },
            {
              title: 'Аномальная тревога',
              subtitle: 'Тревога по диску, конфликт IP-адресов, отключение от сети',
            },
            {
              title: 'Интеллектуальный анализ (по NVR)',
              subtitle:
                '4-канальное обнаружение вторжения с поддержкой точного распознавания человека и транспортного средства',
            },
            {
              title: 'Действия при событии',
              subtitle:
                'Звуковой сигнал, push-уведомление, всплывающее сообщение, полный экран, отправка на email, передача на FTP, управление PTZ, активация тревожного выхода, запуск записи',
            },
          ],
        },
      ],
    },
    technical: {
      tabs: ['Сеть', 'Хранение данных', 'Интерфейсы', 'Общие характеристики'],
      data: [
        {
          label: 'Сеть',
          variant: 'text',
          item: [
            {
              title: 'Сетевые протоколы',
              subtitle:
                'HTTP, HTTPS, TCP/IP, IPv4/IPv6, UPhP, UDP, RTSP, SMTP, NTP, DNS, DHCP, P2P, IP Filter, DDNS, 802.1X, SNMP, PPPoE',
            },
            {
              title: 'Удалённые пользователи',
              subtitle: '8 пользователей',
            },
            {
              title: 'P2P',
              subtitle: 'iOS, Android',
            },
            {
              title: 'Совместимость',
              subtitle: 'ONVIF, SDK',
            },
            {
              title: 'Обновление прошивки',
              subtitle: 'Через облако',
            },
          ],
        },
        {
          label: 'Хранение данных',
          variant: 'text',
          item: [
            {
              title: 'Технология ANR',
              subtitle: 'Поддерживается',
            },
          ],
        },
        {
          label: 'Интерфейсы',
          variant: 'text',
          item: [
            {
              title: 'HDD интерфейс',
              subtitle: '1 интерфейс SATA, поддержка дисков объёмом до 8 ТБ',
            },
            {
              title: 'Сетевой интерфейс',
              subtitle: '1 порт RJ-45 (10/100 Мбит/с, самонастраивающийся)',
            },
            {
              title: 'USB',
              subtitle: 'Задняя панель: 2 × USB 2.0',
            },
            {
              title: 'HDMI',
              subtitle: '1 порт',
            },
            {
              title: 'VGA',
              subtitle: '1 порт',
            },
          ],
        },
        {
          label: 'Общие характеристики',
          variant: 'text',
          item: [
            {
              title: 'Питание',
              subtitle: 'DC12V/2A',
            },
            {
              title: 'Потребляемая мощность',
              subtitle: '< 5 W (без HDD)',
            },
            {
              title: 'Условия эксплуатации',
              subtitle: 'от -10 °C до +50 °C (от 14 °F до 122 °F)',
            },
            {
              title: 'Условия хранения',
              subtitle: 'Влажность не более 90%',
            },
            {
              title: 'Сертификация',
              subtitle: 'CE/FCC',
            },
            {
              title: 'Габариты',
              subtitle: '254.5 × 224.4 × 43.9 mm (10.02 × 8.83 × 1.73 inch)',
            },
            {
              title: 'Вес (нетто)',
              subtitle: '0.62 kg без HDD',
            },
          ],
        },
      ],
    },
  },
};
