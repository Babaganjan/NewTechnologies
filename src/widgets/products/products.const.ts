export interface IProductItem {
  id: number;
  title: string;
  alias: string;
  image: string;
  width: number;
  height: number;
  amount: number;
}

export const PRODUCTS_DATA: IProductItem[] = [
  {
    id: 1,
    title: 'Турникеты',
    alias: 'turnstiles',
    image: '/img/product-item-1.webp',
    width: 96,
    height: 110,
    amount: 5,
  },
  {
    id: 2,
    title: 'Коммутаторы',
    alias: 'switches',
    image: '/img/product-item-2.webp',
    width: 110,
    height: 100,
    amount: 12,
  },
  {
    id: 3,
    title: 'Серверные шкафы',
    alias: 'serverCabinets',

    image: '/img/product-item-3.webp',
    width: 110,
    height: 100,
    amount: 9,
  },
  {
    id: 4,
    title: 'Видеорегистраторы',
    alias: 'nvr',
    image: '/img/product-item-4.webp',
    width: 110,
    height: 100,
    amount: 2,
  },
  {
    id: 5,
    title: 'Видеокамеры',
    alias: 'cameras',
    image: '/img/product-item-5.webp',
    width: 130,
    height: 48,
    amount: 7,
  },
] as const;
