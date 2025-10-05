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
export const footerNavItems: FooterNavItem[] = [
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
];

// Контактная информация
export const footerAboutItems: FooterContactItem[] = [
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
];

// Секция "Деятельность"
export const footerActivityItems: FooterNavItem[] = [
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
];

// Секция "О компании"
export const footerCompanyItems: FooterNavItem[] = [
  {
    href: '/about',
    title: 'О нас',
  },
  {
    href: '/contacts',
    title: 'Контакты',
  },
];
