interface FooterItem {
  href: string;
  title: string;
}

// Основная навигация
export const FOOTER_NAV_ITEMS: FooterItem[] = [
  {
    href: '/services/',
    title: 'Сервис',
  },
  {
    href: '/products/',
    title: 'Производство',
  },
  {
    href: '/solution/',
    title: 'IT-решения',
  },
  {
    href: '/about/',
    title: 'О нас',
  },
  {
    href: '/contacts/',
    title: 'Контакты',
  },
] as const;

// Секция "Деятельность"
export const FOOTER_ACTIVITY_ITEMS: FooterItem[] = [
  {
    href: '/services/',
    title: 'Сервис',
  },
  {
    href: '/products/',
    title: 'Производство',
  },
  {
    href: '/solution/',
    title: 'IT-решения',
  },
] as const;

// Секция "О компании"
export const FOOTER_COMPANY_ITEMS: FooterItem[] = [
  {
    href: '/about/',
    title: 'О нас',
  },
  {
    href: '/contacts/',
    title: 'Контакты',
  },
] as const;
