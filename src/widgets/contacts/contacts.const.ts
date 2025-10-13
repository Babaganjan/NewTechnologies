// Константы
export const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.6280524605384!2d76.8514053762205!3d43.25073007914137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883695037405891%3A0x87a063604421630c!2z0JHQuNC90L7RgNCw0L3QuNC60L7QsiDRgdCw0L3QutCw0YDQuNC-0L3QsNGG0LjQuSDQutC-0LzQvNC10YjQtdC90LjQvdC-LCAzMiwg0JHQuNC90L7RgNCw0L3QuNC60L7Qsiwg0JHQuNC90L7RgNCw0L3QuNC60L7QsiDQn9C-0LjRgdCw0L3QutCw0YDQuNC-0L3QsNGG0LjQuSDQutC-0LzQvNC10YjQtdC90LjQvdC-!5e0!3m2!1sru!2skz!4v1728795607078!5m2!1sru!2skz';

export interface ContactItem {
  title: string;
  value: string;
  href?: string;
  className: string;
}

export const CONTACTS_ITEMS: ContactItem[] = [
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
    value: `Пн-Пт: 9:00 - 18:00 \n Сб-Вс: Выходной`,
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
    value: 'Instagram',
    href: 'https://www.instagram.com/nt-t.kz',
    className: 'social',
  },
];
