import type { ProductConfig } from '@/shared/types/products.types';

export const CAMERA_NT_IPR5123_B: ProductConfig = {
  id: 2,
  model: 'nt-ipr5123-b',
  name: 'цилиндрическая камера',
  category: 'CAMERAS',
  feature: '1920×1080 / 25 fps',

  gallery: {
    images: [
      '/img/product/cameras/nt-ipr5123-b/gallery/0.webp',
      '/img/product/cameras/nt-ipr5123-b/gallery/1.webp',
      '/img/product/cameras/nt-ipr5123-b/gallery/2.webp',
    ],
  },

  keySpecs: {
    layout: 'layout1',
    items: [
      {
        id: 1,
        title: 'максимальное разрешение',
        value: '1920×1080',
        unit: '/ 30 fps',
      },
      {
        id: 2,
        title: 'Поддержка интеллектуального анализа',
        type: 'subtitle',
        description: 'камера подаст сигнал только при обнаружении человека в охраняемой зоне.',
      },
      {
        id: 4,
        title: 'ручной вариофокальный объектив',
        description:
          'Позволяет чётко снять и лицо человека, и номер машины на дальней парковке без потери качества. ',
      },
      {
        id: 3,
        title: '1/2.8 CMOS-сенсор с прогрессивной разверткой',
        description:
          'Даёт плавную картинку без размытия и смазанных кадров, особенно при движении объектов.',
      },

      {
        id: 5,
        title: 'dwdr, 3d dnr, blc, функция «анти-туман»',
        description:
          'Они решают 5 главных проблем ночной съёмки: фары, тени, шум, туман и засветы, давая вам идеальную картинку.',
      },
      {
        id: 6,
        title: 'ик-подсветка',
        value: '> 40',
        unit: '/ 30 fps',
        type: 'big',
        description: 'Обеспечит черно-белое изображение в высоком качестве даже в полной темноте.',
      },
      {
        id: 7,
        title: 'питание 12b dc / poe',
        description: 'Позволяет включить камеру одним кабелем от роутера или от обычной розетки.',
      },
      {
        id: 8,
        title: 'Степень защиты IP67',
        description:
          'Позволяет не бояться дождя, снега и пыли — камера будет работать в любую погоду на улице.',
      },
    ],
  },

  dimensions: {
    images: [
      '/img/product/cameras/nt-ipr5123-b/size/1.webp',
      '/img/product/cameras/nt-ipr5123-b/size/2.webp',
    ],
  },

  specifications: {
    general: {
      tabs: ['Камера', 'Линза', 'Подсветка', 'Видеоаналитика', 'Видео и аудио'],
      data: [
        {
          label: 'Камера',
          variant: 'text',
          item: [
            {
              title: 'Матрица',
              subtitle: '1/2.8” прогрессивная матрица CMOS',
            },
            {
              title: 'Макс.разрешение',
              subtitle: '2MP (1920x1080)',
            },
            {
              title: 'Electronic Shutter',
              subtitle: 'Auto/Manual, 1/5 to 1/20,000s',
            },
            {
              title: 'Чувствительность',
              subtitle: 'Цвет: 0.1 Lux @ (F1.6, AGC ON), B/W: 0 Lux с ИК',
            },
            {
              title: 'Режим «День/Ночь»',
              subtitle: 'Ик-фильтр с переключением',
            },
          ],
        },
        {
          label: 'Линза',
          variant: 'text',
          item: [
            {
              title: 'Тип линзы',
              subtitle: 'Фиксированная',
            },
            {
              title: 'Диафграма',
              subtitle: 'Фиксированная',
            },
            {
              title: 'Объектив',
              subtitle: '2.8 mm',
            },
            {
              title: 'Макс.диафрагма',
              subtitle: 'F2.0',
            },
            {
              title: 'Угол обзора',
              subtitle: 'HÊ 105.9°, VÊ 58.4°',
            },
          ],
        },
        {
          label: 'Подсветка',
          variant: 'text',
          item: [
            {
              title: 'Тип подсветки',
              subtitle: 'ИК',
            },
            {
              title: 'Дистанция подсветки',
              subtitle: 'Up to 30 m (98.4 ft)',
            },
            {
              title: 'Переключение подсветки',
              subtitle: 'Авто/Механическое',
            },
          ],
        },
        {
          label: 'Видеоаналитика',
          variant: 'text',
          item: [
            {
              title: 'Срабатывание по тревоге',
              subtitle: 'Обнаружение движения, сбой в работе сети, ошибка входа в систему',
            },
            {
              title: 'Действия по тревоге',
              subtitle: 'Отправка электронного письма, запись оповещения',
            },
          ],
        },
        {
          label: 'Видео и аудио',
          variant: 'text',
          item: [
            {
              title: 'Потоковая передача',
              subtitle: '2 потока',
            },
            {
              title: 'Основной поток',
              subtitle: '1920x1080, 1280x720, 704x576 @25fps',
            },
            {
              title: 'Дополнительный поток',
              subtitle: '704x576, 640x360, 480x360, 352x288 @25fps',
            },
            {
              title: 'Управление скоростью передачи данных',
              subtitle: 'CBR/VBR',
            },
            {
              title: 'Скорость передачи данный',
              subtitle: 'Основной поток: 512 Kbps to 4096 Kbps ,Доп.поток: 128 Kbps to 1536 Kbps',
            },
            {
              title: 'Умное декодирование',
              subtitle: 'Поддерживается',
            },
            {
              title: 'Сжатие звука',
              subtitle: 'G.711 a, G.711 u, PCM, AAC',
            },
            {
              title: 'Частота дискретизации звука',
              subtitle: '8 Kbps',
            },
          ],
        },
      ],
    },
    technical: {
      tabs: ['Изображение', 'Сеть', 'Интерфейс', 'Общие характеристики'],
      data: [
        {
          label: 'Изображение',
          variant: 'text',
          item: [
            {
              title: 'Настройка изображения',
              subtitle: 'Яркость, резкость, контрастность, насыщенность регулируются',
            },
            {
              title: 'Режим сцены',
              subtitle: 'Indoor, Outdoor, Mirror В помещении, на улице, зеркало',
            },
            {
              title: 'Режим экспозиции',
              subtitle: 'Авто/Механ.',
            },
            {
              title: 'Баланс белого',
              subtitle: 'Авто/Механ.',
            },
            {
              title: 'Настройка день/ночь',
              subtitle: 'Авто, День, Ночь, Таймер',
            },
            {
              title: 'Noise Reduction',
              subtitle: '2D/3D DNR',
            },
            {
              title: 'Улучшение изображения',
              subtitle: 'HLC, BLC, Defog',
            },
            {
              title: 'Широкий динамический диапазон',
              subtitle: 'DWDR',
            },
            {
              title: 'Маскировка конфиденциальности',
              subtitle: '4 areas',
            },
          ],
        },
        {
          label: 'Сеть',
          variant: 'text',
          item: [
            {
              title: 'протоколы',
              subtitle:
                'IPv4, HTTP/HTTPS, RTSP/RTP/RTCP, TCP/UDP, DHCP, DNS, DDNS, UPNP, ICMP, IGMP, NTP, SMTP, 802.1x, SNMP',
            },
            {
              title: 'Интерфейсный протокол',
              subtitle: 'ONVIF, SDK',
            },
            {
              title: 'Пользователи',
              subtitle: 'До 4-х пользователей',
            },
            {
              title: 'Безопасность',
              subtitle: 'IP filter, HTTPS, Illegal login lock, IEEE 802.1x',
            },
            {
              title: 'Просмотр в веб.интерфейсах',
              subtitle: '<IE11, Chrome, Firefox, Microsoft Edge',
            },
          ],
        },
        {
          label: 'Интерфейс',
          variant: 'text',
          item: [
            {
              title: 'сетевой интерфейс',
              subtitle: '1 Ethernet (10/100 Base-T) RJ-45 Connector',
            },
            {
              title: 'Встроенный микрофон',
              subtitle: 'Поддерживается',
            },
          ],
        },
        {
          label: 'Общие характеристики',
          variant: 'text',
          item: [
            {
              title: 'Питание',
              subtitle: 'DC12V (-15% to +25%)/PoE (IEEE 802.3af)',
            },
            {
              title: 'Потребление',
              subtitle: 'Max 4.5W',
            },
            {
              title: 'Температурный диапазон работы',
              subtitle: '-25°C to 50°C (-13°F to 122°F)',
            },
            {
              title: 'Рабочая влажность',
              subtitle: 'Менее 90% относительной влажности',
            },
            {
              title: 'Защита от проникнования',
              subtitle: 'IP66',
            },
            {
              title: 'Материал',
              subtitle: 'Корпус из алюминиевого сплава + Пластик',
            },
            {
              title: 'Габариты',
              subtitle: 'φ70 x 162.2 мм (φ2.76 x 6.39 inch)',
            },
            {
              title: 'Вес',
              subtitle: '0.35 kg (0.77 lb)',
            },
            {
              title: 'Сертификаты',
              subtitle:
                'CE-EMC (EN 55032:2015+A1:2020, EN IEC 61000-6-3:2021, EN IEC6100032Ê2019áA1Ê2021, EN 6100033Ê2013áA2Ê2021, EN55035Ê2017áA11Ê2020, EN 501304Ê2011áA1Ê2014 FCC FCC 47 CFR 15, Subpart B, ANSI C63.42014',
            },
            {
              title: 'Язык',
              subtitle:
                'Английский, китайский (упрощенный), французский, корейский, польский, итальянский, испанский, немецкий, венгерский, русский, вьетнамский, тайский, датский, чешский, словацкий, индонезийский, португальский, голландский, иврит, арабский',
            },
          ],
        },
      ],
    },
  },
};
