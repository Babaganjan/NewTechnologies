import type { CityContactType, CommonContactInfoType } from '../types/cities.types';

export const COMMON_CONTACT_INFO: CommonContactInfoType = {
  email: 'info@nt-t.kz',
  workingHours: 'Пн-Пт: 9:00 - 18:00 \n Сб-Вс: Выходной',
  socialNetworks: [
    {
      id: 1,
      title: 'YouTube',
      href: 'https://youtube.com/@newtechkz?si=5R7G1YoOVY9-mIGJ',
    },
    {
      id: 3,
      title: 'TikTok',
      href: 'https://www.tiktok.com/@newtech.kz?_r=1&_t=ZM-91Ya1zZb99I',
    },

    {
      id: 2,
      title: 'Instagram',
      href: 'https://www.instagram.com/newtechkz?igsh=MTk0NW55NjNlM2wzNg==',
    },
    {
      id: 4,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/company/newtechnologykz',
    },
  ],
} as const;

export const CITIES_CONTACTS: CityContactType[] = [
  {
    id: 1,
    city: 'Алматы',
    phone: '+7 (700) 346 43 71',
    href: '77003464371',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.516574995662!2d76.87167360000001!3d43.2405943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369ac733c6a81%3A0xcf1a0b00659b1875!2sLake%20town!5e0!3m2!1sru!2sru!4v1764929690230!5m2!1sru!2sru',
    address: 'РК, г. Алматы, улица Варламова 27Д ЖК "Lake Town", блок 8',
    ...COMMON_CONTACT_INFO,
  },
  {
    id: 2,
    city: 'Тараз',
    phone: '+7 (747) 180 32 18',
    href: '77471803218',
    map: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2922.6963083920273!2d71.36577427613727!3d42.90035377114785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDU0JzAxLjMiTiA3McKwMjInMDYuMSJF!5e0!3m2!1sru!2sru!4v1764929630517!5m2!1sru!2sru',
    address: 'РК, г. Тараз, улица Толе би 61А',
    ...COMMON_CONTACT_INFO,
  },
  {
    id: 3,
    city: 'Астана',
    phone: '+7 (700) 836 94 36',
    href: '77008369436',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.933153098251!2d71.3851494!3d51.146583799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424586f37993eec5%3A0xd940136cfd3992a1!2z0JbQmiDQkNGA0LjRgdGC0L7QutGA0LDRgg!5e0!3m2!1sru!2sru!4v1764929668203!5m2!1sru!2sru',
    address: 'РК, г. Астана, ЖК Аристократ, улица Умай Ана 14/1',
    ...COMMON_CONTACT_INFO,
  },
] as const;
