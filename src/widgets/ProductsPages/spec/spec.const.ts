import type { AssemblyItem, ProductItem, SpecItemImages, TabLevelObject } from './spec.types';
import { makeTabs } from './utils/makeTabs';

export const tabPanelsGeneral = makeTabs(['Камера', 'Объектив', 'Видео', 'Изображение']);

export const tabPanelsSpecification = makeTabs([
  'События',
  'Сеть',
  'Интерфейсы',
  'Электропитание и эксплуатация',
]);

export const DATAGENERAL: TabLevelObject[] = [
  {
    label: 'Камера',
    variant: 'text',
    item: [
      {
        title: 'сенсор изображения',
        subtitle: '1/2.8" cmos с прогрессивной разверткой',
      },
      {
        title: 'электронный затвор',
        subtitle: 'авто/ручной, от 1/5 до 1/20 000 сек',
      },
      {
        title: 'минимальная освещённость',
        subtitle: 'цветное изображение: 0.1 люкс @ (f1.6, agc вкл), 0 люкс с ик-подсветкой',
      },
      {
        title: 'отношение сигнал/шум',
        subtitle: '55 дб',
      },
      {
        title: 'день/ночь',
        subtitle: 'ик-фильтр с автоматическим переключением',
      },
      {
        title: 'дальность ик-подсветки',
        subtitle: 'до 40 м',
      },
      {
        title: 'управление ик',
        subtitle: 'авто/ручное',
      },
      {
        title: 'диапазон регулировки',
        subtitle: 'панорама: 0°~360°, наклон: 0°~90°, вращение: 0°~360°',
      },
    ],
  },
  {
    label: 'Объектив',
    variant: 'text',
    item: [
      {
        title: 'тип объектива',
        subtitle: 'ручной вариофокальный объектив',
      },
      {
        title: 'фокусное расстояние',
        subtitle: '2.8 ~ 12 мм',
      },
      {
        title: 'апертура',
        subtitle: 'f1.6',
      },
      {
        title: 'угол обзора (fov)',
        subtitle: 'г: 101.9° ~ 33.6°, в: 53.6° ~ 18.9°',
      },
    ],
  },
  {
    label: 'Видео',
    variant: 'text',
    item: [
      {
        title: 'максимальное разрешение',
        subtitle: '1920 × 1080',
      },
      {
        title: 'потоки',
        subtitle: '2 потока',
      },
      {
        title: 'частота кадров',
        subtitle:
          'основной поток: 1920×1080, 1280×720 @ 25/30 к/с; доп. поток: 704×576, 640×360, 480×360, 352×288 @ 25/30 к/с',
      },
      {
        title: 'управление битрейтом',
        subtitle: 'cbr/vbr',
      },
      {
        title: 'битрейт',
        subtitle: 'основной: 512–4096 кбит/с, дополнительный: 128–1536 кбит/с',
      },
    ],
  },
  {
    label: 'Изображение',
    variant: 'text',
    item: [
      {
        title: 'настройка изображения',
        subtitle: 'яркость, резкость, контрастность, насыщенность',
      },
      {
        title: 'улучшение изображения',
        subtitle: 'wdr (dwdr), hlc, blc, defog (анти-туман)',
      },
      {
        title: 'шумоподавление',
        subtitle: '2d/3d nr',
      },
      {
        title: 'режим экспозиции',
        subtitle: 'авто/ручной',
      },
    ],
  },
];

export const DATALSPECIFICATION: TabLevelObject[] = [
  {
    label: 'События',
    variant: 'text',
    item: [
      {
        title: 'детекция движения',
        subtitle: 'поддерживается',
      },
      {
        title: 'интеллектуальный анализ',
        subtitle: 'пересечение линии и вторжение (на основе распознавания человека)',
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
          'ipv4, rtsp/rtp/rtcp, tcp/udp, dhcp, dns, ddns, upnp, icmp, igmp, ntp, smtp, 802.1x, snmp, http/https, pppoe',
      },
      {
        title: 'совместимость',
        subtitle: 'onvif, sdk',
      },
      {
        title: 'веб-просмотр',
        subtitle: 'ie (до 11), chrome, firefox, microsoft edge',
      },
      {
        title: 'по для управления',
        subtitle: 'sunview',
      },
    ],
  },
  {
    label: 'Интерфейсы',
    variant: 'text',
    item: [
      {
        title: 'сетевой интерфейс',
        subtitle: '1 ethernet (10/100 base-t) rj-45 Connector',
      },
      {
        title: 'Слот для SD-карты',
        subtitle: 'Встроенный, до 256 ГБ',
      },
      {
        title: 'кнопка сброса',
        subtitle: 'поддерживается',
      },
    ],
  },
  {
    label: 'Электропитание и эксплуатация',
    variant: 'text',
    item: [
      {
        title: 'Питание',
        subtitle: '1 Ethernet (10/100 Base-T), разъём RJ-45',
      },
      {
        title: 'Потребляемая мощность',
        subtitle: 'Макс 8.5 Вт',
      },
      {
        title: 'Температурный диапазон',
        subtitle: '−25∘C∼55∘C (−13∘F∼131∘F)',
      },
      {
        title: 'Рабочая влажность',
        subtitle: 'Менее 90% относительной влажности',
      },
      {
        title: 'Степень защиты',
        subtitle: 'IP67 (пыле- и влагозащита)',
      },
      {
        title: 'Сертификация',
        subtitle: 'CE/FCC',
      },
      {
        title: 'Корпус',
        subtitle: 'Металлический',
      },
      {
        title: 'Габариты',
        subtitle: '232×80×80mm (9.13′′×3.15′′×3.15′′)',
      },
      {
        title: 'Вес (нетто)',
        subtitle: '0.73 кг (1.61 lb)',
      },
    ],
  },
];

export const Images: SpecItemImages[] = [
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
];

export const Scheme: AssemblyItem[] = [
  { id: 1, title: 'Верхняя панель', description: 'Монтажная панель' },
  { id: 2, title: 'Рама', description: 'Задняя панель' },
  { id: 3, title: '19-дюймовый монтажный профиль', description: 'Нижняя панель' },
  { id: 4, title: 'Ручка передней двери', description: 'Боковая панель' },
];

export const ProductSpec: ProductItem = {
  id: 1,
  model: 'MT6422S',
  dimensions: '600×9000×2000',
  units: '42',
};

export const ProductVariant = {};
