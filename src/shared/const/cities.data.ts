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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d407.8062698472421!2d76.87130438009788!3d43.240675854358905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369ac733c6a81%3A0xcf1a0b00659b1875!2sLake%20town!5e0!3m2!1sru!2sru!4v1764425985998!5m2!1sru!2sru',
    address: 'РК, г. Алматы, улица Варламова 27Д ЖК "Lake Town", блок 8',
    ...COMMON_CONTACT_INFO,
  },
  {
    id: 2,
    city: 'Тараз',
    phone: '+7 (747) 180 32 18',
    href: '77471803218',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258.3320885515681!2d71.36852360658085!3d42.90040488560596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a703269efa5443%3A0x8a8f7a70c01c59e3!2z0KLQvtGA0LPQvtCy0YvQuSDQtNC-0LwgSU5UQU5U!5e0!3m2!1sru!2sru!4v1764425832471!5m2!1sru!2sru',
    address: 'РК, г. Тараз, улица Толе би 61А',
    ...COMMON_CONTACT_INFO,
  },
  {
    id: 3,
    city: 'Астана',
    phone: '+7 (700) 836 94 36',
    href: '77008369436',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.933154631105!2d71.38257447659849!3d51.1465837717336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586f37993eec5%3A0xd940136cfd3992a1!2z0JbQmiDQkNGA0LjRgdGC0L7QutGA0LDRgg!5e0!3m2!1sru!2sru!4v1764425552832!5m2!1sru!2sru',
    address: 'РК, г. Астана, ЖК Аристократ, улица Умай Ана 14/1',
    ...COMMON_CONTACT_INFO,
  },
] as const;
