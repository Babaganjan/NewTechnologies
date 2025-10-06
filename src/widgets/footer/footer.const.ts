// Типы для констант футера
export interface FooterNavItem {
  href: string;
  title: string;
}

export interface FooterContactItem {
  title: string;
  href: string;
  className?: string;
}

// Основная навигация
export const FOOTER_NAV_ITEMS: FooterNavItem[] = [
  {
    href: '/service',
    title: 'Сервис',
  },
  {
    href: '/production',
    title: 'Производство',
  },
  {
    href: '/solution',
    title: 'IT-решения',
  },
  {
    href: '/about',
    title: 'О нас',
  },
  {
    href: '/contacts',
    title: 'Контакты',
  },
] as const;

// Контактная информация
export const FOOTER_ABOUT_ITEMS: FooterContactItem[] = [
  {
    title: '+7 (700) 836-94-36',
    href: 'tel:+77008369436',
  },
  {
    title: 'info.ast@nt-t.kz',
    href: 'mailto:info.ast@nt-t.kz',
  },
  {
    title: 'Instagram',
    className: 'social-link',
    href: 'https://www.instagram.com/nt-t.kz/',
  },
] as const;

// Секция "Деятельность"
export const FOOTER_ACTIVITY_ITEMS: FooterNavItem[] = [
  {
    href: '/service',
    title: 'Сервис',
  },
  {
    href: '/production',
    title: 'Производство',
  },
  {
    href: '/solution',
    title: 'IT-решения',
  },
] as const;

// Секция "О компании"
export const FOOTER_COMPANY_ITEMS: FooterNavItem[] = [
  {
    href: '/about',
    title: 'О нас',
  },
  {
    href: '/contacts',
    title: 'Контакты',
  },
] as const;
