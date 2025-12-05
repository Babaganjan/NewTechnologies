export interface IDocumentsItems {
  id: number;
  title: string;
  size: string;
  previewImage: string;
  file: string;
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
      title: 'Лидер отрасли 2020',
      size: '187 кб',
      previewImage: '/img/Documents/Preview/one/1.webp',
      file: 'img/Documents/File/one/1.pdf',
    },
    {
      id: 2,
      title: 'Авторизованный инсталлятор PERCo',
      size: '420 кб',
      previewImage: '/img/Documents/Preview/one/2.webp',
      file: 'img/Documents/File/one/2.pdf',
    },
    {
      id: 3,
      title: 'Авторизованный партнер AXIS',
      size: '422 кб',
      previewImage: '/img/Documents/Preview/one/3.webp',
      file: 'img/Documents/File/one/3.pdf',
    },
    {
      id: 4,
      title: 'Сертификат Exclusive partner Hikvision НТ-Тараз 2024',
      size: '330 кб',
      previewImage: '/img/Documents/Preview/one/4.webp',
      file: 'img/Documents/File/one/4.pdf',
    },
    {
      id: 5,
      title: 'Сертификат партнера компании ПромАвтоматика',
      size: '116 кб',
      previewImage: '/img/Documents/Preview/one/5.webp',
      file: 'img/Documents/File/one/5.pdf',
    },
  ],
  two: [
    {
      id: 1,
      title: 'АО КАЗАХСКИЙ АГРОТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ имени САКЕНА СЕЙФУЛЛИНА',
      size: '159 кб',
      previewImage: '/img/Documents/Preview/two/1.webp',
      file: 'img/Documents/File/two/1.pdf',
    },
    {
      id: 2,
      title: 'АО Казпочта',
      size: '174 кб',
      previewImage: '/img/Documents/Preview/two/2.webp',
      file: 'img/Documents/File/two/2.pdf',
    },
    {
      id: 3,
      title: 'Банк ВТБ',
      size: '288 кб',
      previewImage: '/img/Documents/Preview/two/3.webp',
      file: 'img/Documents/File/two/3.pdf',
    },
    {
      id: 4,
      title: 'Банкнотная фабрика Национального Банка РК',
      size: '102 кб',
      previewImage: '/img/Documents/Preview/two/4.webp',
      file: 'img/Documents/File/two/4.pdf',
    },
    {
      id: 5,
      title: 'БП СП Инкай',
      size: '110 кб',
      previewImage: '/img/Documents/Preview/two/5.webp',
      file: 'img/Documents/File/two/5.pdf',
    },
    {
      id: 6,
      title: 'БП Тараз Арена',
      size: '289 кб',
      previewImage: '/img/Documents/Preview/two/6.webp',
      file: 'img/Documents/File/two/6.pdf',
    },
    {
      id: 7,
      title: 'Жамбылский Медицинский колледж',
      size: '230 кб',
      previewImage: '/img/Documents/Preview/two/7.webp',
      file: 'img/Documents/File/two/7.pdf',
    },
    {
      id: 8,
      title: 'за участие в конкурсе-выставке Лучший товар Казахстана 2023',
      size: '205 кб',
      previewImage: '/img/Documents/Preview/two/8.webp',
      file: 'img/Documents/File/two/8.pdf',
    },
    {
      id: 9,
      title: 'ҚР Мәдениет және спорт министрлігі Орталық мемлекеттік архив',
      size: '479 кб',
      previewImage: '/img/Documents/Preview/two/9.webp',
      file: 'img/Documents/File/two/9.pdf',
    },
    {
      id: 10,
      title: 'О поощрении сотрудников ТОО «СП» Инкай»',
      size: '100 кб',
      previewImage: '/img/Documents/Preview/two/10.webp',
      file: 'img/Documents/File/two/10.pdf',
    },
    {
      id: 11,
      title: 'Филиал Назарбаев Интеллектуальная школа физико-математического направления',
      size: '237 кб',
      previewImage: '/img/Documents/Preview/two/11.webp',
      file: 'img/Documents/File/two/11.pdf',
    },
  ],
};
