import type { ProductConfig } from '@/shared/types/products.types';

export const NVR_NT_NVR5016E1: ProductConfig = {
  id: 9,
  model: 'nt-nvr5016e1',
  name: '16-ти канальный Ip-видеорегистратор с 1 hdd',
  category: 'NVR',
  feature: '320 Мбит/сек',

  gallery: {
    images: ['/img/nvr5016-image1.png', '/img/nvr5016-image2.png', '/img/nvr5016-image3.png'],
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
        title: 'Поддержка подключения до 16 IP-камер',
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
          'Позволяет установить 1 жёсткий диск для записи и длительного хранения видеоархива без частого удаления файлов.',
      },
      {
        id: 8,
        title: '1 сетевой порт RJ-45 10/100 Мбит/с',
        description:
          'Пропускная способность до 100 Мбит/с гарантирует, что ни одно событие не будет пропущено из-за медленной сети.',
      },
    ],
  },

  dimensions: {
    images: ['/img/nvr5016-dimensions.jpg'],
  },

  specifications: {
    general: {
      tabs: ['Видео', 'Запись', 'Воспроизведение', 'Сеть'],
      data: [
        {
          label: 'Видео',
          variant: 'text',
          item: [
            {
              title: 'IP видеовход',
              subtitle: '16 каналов',
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
              subtitle: '1 канал 6MP, 4 канала 1080P, 8 каналов D1, 16 каналов D1@30fps',
            },
            {
              title: 'Многоканальный дисплей',
              subtitle: '1/4/8/9/16',
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
              subtitle: 'Ручной, по расписанию (регулярная, непрерывная), по событию',
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
              subtitle: '9 каналов',
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
              title: 'Мобильные устройства',
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
      ],
    },
    technical: {
      tabs: ['Хранение данных', 'Интерфейсы', 'Общие характеристики'],
      data: [
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
              title: 'Интерфейс жёсткого диска',
              subtitle: '1 SATA-интерфейс, поддержка до 8 ТБ на диск',
            },
            {
              title: 'Сетевой интерфейс',
              subtitle: '1 RJ-45 (10/100 Mbps) самоадаптивный Ethernet порт',
            },
            {
              title: 'USB',
              subtitle: '2 порта USB 2.0 на задней панели',
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
              subtitle: '-10 °C до 50 °C (14 °F to 122 °F)',
            },
            {
              title: 'Условия хранения',
              subtitle: 'Относительная влажность не более 90%',
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
              subtitle: '0.62 kg без жёсткого диска',
            },
          ],
        },
      ],
    },
  },
};
