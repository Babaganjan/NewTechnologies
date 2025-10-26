export interface IDocumentsItems {
  id: number;
  title: string;
  size: string;
  previewImage: string;
}

export type ActiveTab = 'one' | 'two';

export const TAB_LABELS: Record<ActiveTab, string> = {
  one: 'Сертификаты',
  two: 'Благодарственные письма',
};

export const DOCUMENTS_ITEMS: Record<ActiveTab, IDocumentsItems[]> = {
  one: [
    {
      id: 1,
      title: 'Эффективный бизнес-партнёр',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 2,
      title: 'авторизованный системный интегратор',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 3,
      title: 'Сертификат Exclusive partner hikvision',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 4,
      title: 'Партнер и сервисный центр Oxgard',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 5,
      title: 'авторизованный инсталлятор PErco',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
  ],
  two: [
    {
      id: 1,
      title: 'Благодарственное письмо Тоо сп инкай',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 2,
      title: 'Благодарственное письмо нао Казахский агротехнический университет имени с.сейфуллина',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 3,
      title: 'Благодарственное письмо Тоо сп инкай',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 4,
      title: 'Благодарственное письмо ДО АО Банк ВТБ (Казахстан) г. Тараз',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 5,
      title: 'Благодарственное письмо Тараз Арена',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
  ],
};
