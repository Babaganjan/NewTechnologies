// Типы для социальных сетей
export type SocialNetworkType = {
  readonly id: number;
  readonly title: string;
  readonly href: string;
};

// Тип для общих контактных данных
export type CommonContactInfoType = {
  readonly email: string;
  readonly workingHours: string;
  readonly socialNetworks: readonly SocialNetworkType[];
};

// Тип для контактов по городам
export type CityContactType = {
  readonly id: number;
  readonly city: string;
  readonly phone: string;
  readonly address: string;
} & CommonContactInfoType;

// Тип для массива контактов
export type CitiesContactsType = readonly CityContactType[];

// Общие контактные данные с явной типизацией
export const COMMON_CONTACT_INFO: CommonContactInfoType = {
  email: 'info@nt-t.kz',
  workingHours: 'Пн-Пт: 9:00 - 18:00 \n Сб-Вс: Выходной',
  socialNetworks: [
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
} as const;

// Данные по городам с явной типизацией
export const CITIES_CONTACTS: CitiesContactsType = [
  {
    id: 1,
    city: 'Алматы',
    phone: '+7 (700) 346 43 71',
    address: 'РК, г. Алматы, улица Варламова 27Д ЖК "Lake Town", блок 8',
    ...COMMON_CONTACT_INFO,
  },
  {
    id: 2,
    city: 'Тараз',
    phone: '+7 (747) 180 32 18',
    address: 'РК, г. Тараз, улица Толе би 61А',
    ...COMMON_CONTACT_INFO,
  },
  {
    id: 3,
    city: 'Астана',
    phone: '+7 (700) 836 94 36',
    address: 'РК, г. Астана, ЖК Аристократ, улица Умай Ана 14/1',
    ...COMMON_CONTACT_INFO,
  },
] as const;