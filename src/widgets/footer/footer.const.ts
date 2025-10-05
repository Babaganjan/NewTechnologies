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

export interface FooterSection {
  title: string;
  items: FooterNavItem[];
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

// Адрес компании
export const companyAddress = {
  city: 'Астана',
  address: '14/1 умай ана',
  fullAddress: 'Астана, 14/1 умай ана',
};

// Информация о компании
export const companyInfo = {
  name: 'Тоо «Новые технологии»',
  copyright: 'все права защищены',
  privacyPolicy: {
    href: '#',
    title: 'Политика конфиденциальности',
  },
};

// Все секции футера
export const footerSections: FooterSection[] = [
  {
    title: 'Страницы',
    items: footerNavItems,
  },
  {
    title: 'Деятельность',
    items: footerActivityItems,
  },
  {
    title: 'О компании',
    items: footerCompanyItems,
  },
];
