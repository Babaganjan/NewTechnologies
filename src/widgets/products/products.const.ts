export interface IProductItem {
  id: number;
  title: string;
  alias: string;
  image: string;
  amount: number;
}

export const PRODUCTS_DATA: IProductItem[] = [
  {
    id: 1,
    title: 'Турникеты',
    alias: 'turnstiles',
    image: '/img/product-item-1.webp',
    amount: 5,
  },
  {
    id: 2,
    title: 'Коммутаторы',
    alias: 'switches',
    image: '/img/product-item-2.webp',
    amount: 12,
  },
  {
    id: 3,
    title: 'Серверные шкафы',
    alias: 'servercabinets',
    image: '/img/product-item-3.webp',
    amount: 9,
  },
  {
    id: 4,
    title: 'Видеорегистраторы',
    alias: 'nvr',
    image: '/img/product-item-4.webp',
    amount: 2,
  },
  {
    id: 5,
    title: 'Видеокамеры',
    alias: 'cameras',
    image: '/img/product-item-5.webp',
    amount: 7,
  },
] as const;
