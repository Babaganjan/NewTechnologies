import type { ModalVariant, NavItem } from '@/widgets/header/navItemModal/nav-Item.types';

export const CITIES = [
  { value: 'almaty', label: 'Алматы' },
  { value: 'karaganda', label: 'Караганда' },
  { value: 'shymkent', label: 'Шымкент' },
] as const;

export const EXCLUDE_MAP: Record<ModalVariant, ModalVariant> = {
  Сервис: 'Производство',
  Производство: 'Сервис',
} as const;

export const HEADER_NAV_ITEMS: NavItem[] = [
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
    hasModal: true,
  },
  {
    href: '/itsolutions/',
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
