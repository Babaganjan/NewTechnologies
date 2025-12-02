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
      title: 'Интант ФСБ - лучший проект по пожаротушению НТ-Тараз до 2017',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 2,
      title: 'Zento Tech',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 3,
      title: 'Лучший проект по пожаротушению от Intant ФСБ',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 4,
      title: 'партнер компании ПромАвтоматика',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 5,
      title: 'Обладатель статуса Exclusive partner от HikVision',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 6,
      title: 'Система менеджмента безопасности труда и охраны здоровья от 21.05.25 г',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 7,
      title: 'Сертификат соответствия Система менеджмента качества от 21.05.25 г',
      size: '115.3 кб',
      previewImage: '/img/taraz.png',
    },
    {
      id: 8,
      title: 'Сертификат соответствия Система экологического менеджмента от 21.05.25 г',
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
