export const CITIES = [
  { value: 'almaty', label: 'Алматы' },
  { value: 'karaganda', label: 'Караганда' },
  { value: 'shymkent', label: 'Шымкент' },
] as const;

export const HEADER_NAV_ITEMS = [
  {
    href: '/services/',
    title: 'Сервис',
    hasIcon: true,
    hasModal: true,
  },
  {
    href: '/products/',
    title: 'Производство',
    hasIcon: true,
    hasModal: false,
  },
  {
    href: '/solution/',
    title: 'IT-Решения',
    hasIcon: false,
    hasModal: false,
  },
  {
    href: '/about/',
    title: 'О нас',
    hasIcon: false,
    hasModal: false,
  },
  {
    href: '/contacts/',
    title: 'Контакты',
    hasIcon: false,
    hasModal: false,
  },
] as const;


