// types/contacts.ts
export type AddressContactType = {
  readonly id: number;
  readonly city: string;
  readonly address: string;
  readonly phone: string;
};

export type SocialNetworkType = {
  readonly id: number;
  readonly title: string;
  readonly href: string;
};

export type ContactValue = string | readonly SocialNetworkType[];

export const ADDRESS_CONTACTS: readonly AddressContactType[] = [
  {
    id: 1,
    city: 'Алматы',
    address: 'РК, г. Алматы, улица Варламова 27Д ЖК "Lake Town", блок 8',
    phone: '+7 (700) 346 43 71',
  },
  {
    id: 2,
    city: 'Тараз',
    address: 'РК, г. Тараз, улица Толе би 61А',
    phone: '+7 (747) 180 32 18',
  },
  {
    id: 3,
    city: 'Астана',
    address: 'РК, г. Астана, ЖК Аристократ, улица Умай Ана 14/1',
    phone: '+7 (700) 836 94 36',
  },
] as const;

export interface ContactItem {
  readonly title: string;
  readonly value: ContactValue;
  readonly href?: string;
  readonly className: string;
}

export const CONTACTS_ITEMS: readonly ContactItem[] = [
  {
    title: 'телефон',
    value: '+7 (700) 346 43 71',
    href: 'tel:+77003464371',
    className: 'phone',
  },
  {
    title: 'адрес',
    value: 'г. Алматы, Алматинский район. ЖК Lake Town, ул. Варламова, 27 "Д" блок 8, 1 этаж',
    className: 'address',
  },
  {
    title: 'рабочие часы',
    value: 'Пн-Пт: 9:00 - 18:00 \n Сб-Вс: Выходной',
    className: 'work-time',
  },
  {
    title: 'email',
    value: 'info@nt-t.kz',
    href: 'mailto:info@nt-t.kz',
    className: 'mail',
  },
  {
    title: 'соцсети',
    value: [
      {
        id: 1,
        title: 'TikTok',
        href: 'https://www.tiktok.com/@nt-t.kz',
      },
      {
        id: 2,
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nt-t-kz',
      },
      {
        id: 3,
        title: 'YouTube',
        href: 'https://www.youtube.com/@nt-t.kz',
      },
      {
        id: 4,
        title: 'Instagram',
        href: 'https://www.instagram.com/nt-t.kz',
      },
    ] as const,
    className: 'social',
  },
] as const;

// Type guard (можно экспортировать для использования в других компонентах)
export const isSocialNetworks = (value: ContactValue): value is readonly SocialNetworkType[] => {
  return Array.isArray(value) && value.length > 0 && typeof value[0] === 'object' && 'href' in value[0];
};

// Вспомогательные типы
export type CityName = typeof ADDRESS_CONTACTS[number]['city'];