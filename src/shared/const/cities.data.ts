import type { CityContactType, CommonContactInfoType } from '../types/cities.types';

export const COMMON_CONTACT_INFO: CommonContactInfoType = {
  email: 'info@nt-t.kz',
  workingHours: 'Пн-Пт: 9:00 - 18:00 \n Сб-Вс: Выходной',
  socialNetworks: [
    {
      id: 1,
      title: 'TikTok',
      href: 'https://www.tiktok.com/@newtech.kz?_r=1&_t=ZM-91Ya1zZb99I',
    },
    {
      id: 2,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/company/newtechnologykz',
    },
    {
      id: 3,
      title: 'YouTube',
      href: 'https://youtube.com/@newtechkz?si=5R7G1YoOVY9-mIGJ',
    },
    {
      id: 4,
      title: 'Instagram',
      href: 'https://www.instagram.com/newtechkz?igsh=MTk0NW55NjNlM2wzNg==',
    },
  ],
} as const;

export const CITIES_CONTACTS: CityContactType[] = [
  {
    id: 1,
    city: 'Алматы',
    phone: '+7 (700) 346 43 71',
    href: '77003464371',
    address: 'РК, г. Алматы, улица Варламова 27Д ЖК "Lake Town", блок 8',
    ...COMMON_CONTACT_INFO,
  },
  {
    id: 2,
    city: 'Тараз',
    phone: '+7 (747) 180 32 18',
    href: '77471803218',
    address: 'РК, г. Тараз, улица Толе би 61А',
    ...COMMON_CONTACT_INFO,
  },
  {
    id: 3,
    city: 'Астана',
    phone: '+7 (700) 836 94 36',
    href: '77008369436',
    address: 'РК, г. Астана, ЖК Аристократ, улица Умай Ана 14/1',
    ...COMMON_CONTACT_INFO,
  },
] as const;
