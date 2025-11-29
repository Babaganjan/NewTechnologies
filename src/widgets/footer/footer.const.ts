interface FooterItem {
  href: string;
  title: string;
}

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
    href: '/about/',
    title: 'О нас',
  },
  {
    href: '/contacts/',
    title: 'Контакты',
  },
] as const;

export const FOOTER_ACTIVITY_ITEMS: FooterItem[] = [
  {
    href: '/services/',
    title: 'Сервис',
  },
  {
    href: '/products/',
    title: 'Производство',
  },
] as const;

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
