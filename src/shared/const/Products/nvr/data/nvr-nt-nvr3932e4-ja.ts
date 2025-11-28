import type { ProductConfig } from '@/shared/types/products.types';

export const NVR_NT_NVR3932E4_JA: ProductConfig = {
  id: 7,
  model: 'nt-nvr3932e4-ja',
  name: 'сетевой регистратор 32ch, 1.5u, 4 hdd,',
  category: 'NVR',
  feature: '320 Мбит/сек',

  gallery: {
    images: [
      '/img/product/nvr/nt-nvr3932e4-ja/gallery/0.webp',
      '/img/product/nvr/nt-nvr3932e4-ja/gallery/1.webp',
      '/img/product/nvr/nt-nvr3932e4-ja/gallery/2.webp',
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
        title: 'Умная аналитика:',
        type: 'subtitle',
        description:
          'Поддержка специализированных камер, камеры с распознаванием автомобильных номеров (ANPR), подсчёта людей, «рыбий глаз», коррекции искажений («развёртки») панорамные и тепловизионные камеры, привязки событий VCA',
      },
      {
        id: 3,
        title: 'Подключение до 32-х видеокамер',
        description:
          'Позволяет создать полноценную систему видеонаблюдения с охватом всех критических зон объекта.',
      },
      {
        id: 5,
        title: 'Поддержка RAID 0/1/5/6/10 и резервирования N+1 (hot spare)',
        description:
          'Обеспечивает высокую надёжность хранения видеоархива: данные защищены даже при выходе из строя одного или двух дисков.',
      },
      {
        id: 6,
        title: 'Наличие 1 HDMI и 1 VGA видеовыхода',
        description:
          'Даёт возможность подключить два монитора одновременно — современный телевизор (4K) и офисный монитор для гибкой работы.',
      },
      {
        id: 7,
        value: 'до 4',
        title: 'Поддержка подключения',
        type: 'titleEmpty',
        unit: '/ каналов охраны',
        description:
          'Создает «невидимый барьер» по границе участка — система мгновенно предупредит о нарушителе до того, как он приблизится к объекту.',
      },
      {
        id: 8,
        title: 'Поддержка обнаружения',
        description: 'Распознавание лиц, масок и мультиобъектное распознавание.',
      },
      {
        id: 9,
        title: 'Поддержка декодирования:',
        description:
          '1 канал до 12MP \n 4 канала до 8MP 8 каналов до 4MP \n 16 каналов до 1080P 32 канала до D1',
      },
    ],
  },

  dimensions: {
    images: [
      '/img/product/nvr/nt-nvr3932e4-ja/size/1.webp',
      '/img/product/nvr/nt-nvr3932e4-ja/size/2.webp',
    ],
  },

  specifications: {
    general: {
      tabs: ['Видео', 'AI-распознавание', 'Запись', 'Воспроизведение'],
      data: [
        {
          label: 'Видео',
          variant: 'text',
          item: [
            {
              title: 'IP видеовход',
              subtitle: '32 канала',
            },
            {
              title: 'Входящая пропускная способность',
              subtitle: '320 Mbps',
            },
            {
              title: 'Выходная пропускная способность',
              subtitle: '320 Mbps',
            },
            {
              title: 'HDMI 1 выход',
              subtitle: '3840 × 2160, 1920 × 1080, 1280 × 1024, 1024 × 768',
            },
            {
              title: 'HDMI 2 выход',
              subtitle: '1920 × 1080, 1280 × 1024, 1024 × 768',
            },
            {
              title: 'VGA выход',
              subtitle: '1920 × 1080, 1280 × 1024, 1024 × 768',
            },
            {
              title: 'Декодирующая способность',
              subtitle: '1 канал 12MP, 4 канала 8MP, 8 каналов 4MP, 16 каналов 1080P, 32 канала D1',
            },
            {
              title: 'Многоэкранный дисплей',
              subtitle: '1-й экран: 1/4/8/9/16/32/36; 2-й экран: 1/4/8/9/16',
            },
          ],
        },
        {
          label: 'AI-распознавание',
          variant: 'text',
          item: [
            {
              title: 'Сравнение лиц',
              subtitle:
                'Реальное время захвата и отображения результатов сравнения лиц (зарегистрированный пользователь, незнакомец, канал, степень совпадения)',
            },
            {
              title: 'Многообъектное распознавание',
              subtitle:
                'Транспортные средства, человеческое тело, некоторые транспортные средства, номерные знаки',
            },
            {
              title: 'Умный поиск',
              subtitle: 'По времени, свойствам, изображениям, номерному знаку',
            },
            {
              title: 'Обнаружение маски',
              subtitle: 'Поддерживается',
            },
            {
              title: 'Поддержка специализированных камер',
              subtitle: 'ANPR, подсчёт людей, "рыбий глаз", панорамные и тепловизионные камеры',
            },
          ],
        },
        {
          label: 'Запись',
          variant: 'text',
          item: [
            {
              title: 'Разрешение записи',
              subtitle: '12MP, 8MP, 6MP, 5MP, 4MP, 3MP, 1080P, 720P, D1',
            },
            {
              title: 'Режим записи',
              subtitle: 'Ручной, по расписанию (регулярный, непрерывный), по событию',
            },
            {
              title: 'Срабатывания по тревоге',
              subtitle:
                'Обнаружение движения, потеря видео, тревожный вход, интеллектуальный видеоанализ (IVS)',
            },
            {
              title: 'Коррекция искажений',
              subtitle: 'Поддержка "развёртки" для камер "рыбий глаз"',
            },
          ],
        },
        {
          label: 'Воспроизведение',
          variant: 'text',
          item: [
            {
              title: 'Синхронное воспроизведение',
              subtitle: '16/9/4/1 каналов',
            },
            {
              title: 'Режим поиска',
              subtitle: 'По времени/дате, тревоге, сетке изображений, событию',
            },
            {
              title: 'Режим резервного копирования',
              subtitle: 'USB-устройство, сеть, eSATA',
            },
          ],
        },
      ],
    },
    technical: {
      tabs: ['Тревога', 'Сеть', 'Хранение данных', 'Интерфейсы', 'Общие характеристики'],
      data: [
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
        {
          label: 'Сеть',
          variant: 'text',
          item: [
            {
              title: 'Сетевые протоколы',
              subtitle:
                'HTTP, HTTPS, TCP/IP, IPv4/IPv6, UPhP, UDP, RTSP, SMTP, NTP, DNS, DHCP, FTP, P2P, IP Filter, DDNS, 802.1X, SNMP, 3G/4G, PPPoE',
            },
            {
              title: 'Удалённые пользователи',
              subtitle: '8 пользователей',
            },
            {
              title: 'P2P',
              subtitle: 'P2P, Web NAT',
            },
            {
              title: 'Совместимость',
              subtitle: 'ONVIF, SDK, CGI',
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
            {
              title: 'Disk Group',
              subtitle: 'Поддерживается',
            },
            {
              title: 'RAID',
              subtitle: 'RAID 0, RAID 1, RAID 5, RAID 6, RAID 10',
            },
            {
              title: 'Резервирование',
              subtitle: 'N+1 (hot spare)',
            },
          ],
        },
        {
          label: 'Интерфейсы',
          variant: 'text',
          item: [
            {
              title: 'Интерфейс HDD',
              subtitle: '4 SATA интерфейса, до 16 ТБ на каждый диск',
            },
            {
              title: 'Сетевой интерфейс',
              subtitle: '2 × RJ-45, 10/100/1000 Mbps самоадаптивный порт Ethernet',
            },
            {
              title: 'eSATA',
              subtitle: '1 порт',
            },
            {
              title: 'HDMI',
              subtitle: '2 порта',
            },
            {
              title: 'VGA',
              subtitle: '1 порт',
            },
            {
              title: 'Аудио вход/выход',
              subtitle: '1/1',
            },
            {
              title: 'Тревожный вход/выход',
              subtitle: '16/4',
            },
            {
              title: 'USB интерфейс',
              subtitle: 'Передняя панель: 2 × USB 2.0, Задняя панель: 1 × USB 3.0',
            },
            {
              title: 'RS-485 интерфейс',
              subtitle: '1 порт',
            },
            {
              title: 'RS-232 интерфейс',
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
              subtitle: '100 to 240VAC',
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
              subtitle: 'Влажность менее 90%',
            },
            {
              title: 'Сертификация',
              subtitle: 'CE/FCC',
            },
            {
              title: 'Габариты',
              subtitle: '440 × 373 × 69.9 mm (17.32 × 14.69 × 2.75 inch)',
            },
            {
              title: 'Вес (нетто)',
              subtitle: '4.65 kg (10.25 lb) без HDD',
            },
            {
              title: 'Форм-фактор',
              subtitle: '1.5U',
            },
          ],
        },
      ],
    },
  },
};
