interface IData_type {
  title: string;
  subTitle: string;
  image: string;
}

export const DATA_TYPE_OPS: IData_type[] = [
  {
    title: 'тонкораспыленной водой',
    subTitle: 'Вариант для помещений с высокой ценностью оборудования, снижает ущерб от влаги',
    image: '/img/typesOfBlock/OPS1.webp',
  },
  {
    title: 'Газовое и аэрозольное',
    subTitle: 'Идеально для серверных, банков, музеев, складов с ценным оборудованием',
    image: '/img/typesOfBlock/OPS2.webp',
  },
  {
    title: 'Порошковое',
    subTitle: 'Универсальный вариант, используется для складов, производств, автостоянок',
    image: '/img/typesOfBlock/OPS3.webp',
  },
  {
    title: 'Водяное',
    subTitle: 'Автоматическое тушение водой, подходит для офисов, торговых залов, жилых помещений',
    image: '/img/typesOfBlock/OPS4.webp',
  },
  {
    title: 'Автономное',
    subTitle: 'Локальные установки, которые работают без подключения к центральной системе',
    image: '/img/typesOfBlock/OPS5.webp',
  },
];

export const DATA_TYPE_SKD: IData_type[] = [
  {
    title: 'Биометрия',
    subTitle: 'сканирование отпечатков пальцев, лица, QR или радужки глаза.',
    image: '/img/typesOfBlock/SKD1.webp',
  },
  {
    title: 'Карты доступа',
    subTitle: 'HID, EMM, MIFARE, в том числе с защитой от копирования.',
    image: '/img/typesOfBlock/SKD2.webp',
  },
  {
    title: 'Мобильный доступ',
    subTitle: 'смартфон с NFC-модулем может использоваться как электронный ключ.',
    image: '/img/typesOfBlock/SKD3.webp',
  },
  {
    title: 'PIN-код',
    subTitle: 'Ввод персонального пароля на клавиатуре устройства',
    image: '/img/typesOfBlock/SKD4.webp',
  },
  {
    title: 'Комбинированные методы',
    subTitle: 'Двойная аутентификация для объектов с повышенными требованиями безопасности',
    image: '/img/typesOfBlock/SKD5.webp',
  },
];

export type TDataAllTypes = 'OPS' | 'SKD';
export interface IDataCategory {
  mainTitle: string;
  mainTitleHighlight: string;
  items: IData_type[];
}

export interface IData_types {
  OPS: IDataCategory;
  SKD: IDataCategory;
}

export const DATA_ALL_TYPES: IData_types = {
  OPS: {
    mainTitle: 'Мы подбираем систему индивидуально под каждый объект,',
    mainTitleHighlight: 'учитывая его специфику, риски и требования',
    items: DATA_TYPE_OPS,
  },
  SKD: {
    mainTitle: 'Системы контроля доступа позволяют использовать ',
    mainTitleHighlight: 'различные способы идентификации',
    items: DATA_TYPE_SKD,
  },
};
