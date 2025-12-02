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
      title: 'Интант ФСБ - лучший проект по пожаротушению НТ-Тараз до 2017',
      size: '420 кб',
      previewImage: '/img/Documents/Preview/one/1.webp',
      file: 'img/Documents/File/one/1.pdf',
    },
    {
      id: 2,
      title: 'Zento Tech',
      size: '108 кб',
      previewImage: '/img/Documents/Preview/one/2.webp',
      file: 'img/Documents/File/one/2.pdf',
    },
    {
      id: 3,
      title: 'Лучший проект по пожаротушению от Intant ФСБ',
      size: '127 кб',
      previewImage: '/img/Documents/Preview/one/3.webp',
      file: 'img/Documents/File/one/3.pdf',
    },
    {
      id: 4,
      title: 'партнер компании ПромАвтоматика',
      size: '114 кб',
      previewImage: '/img/Documents/Preview/one/4.webp',
      file: 'img/Documents/File/one/4.pdf',
    },
    {
      id: 5,
      title: 'Обладатель статуса Exclusive partner от HikVision',
      size: '287 кб',
      previewImage: '/img/Documents/Preview/one/5.webp',
      file: 'img/Documents/File/one/5.pdf',
    },
    {
      id: 6,
      title: 'Система менеджмента безопасности труда и охраны здоровья от 21.05.25 г',
      size: '99 кб',
      previewImage: '/img/Documents/Preview/one/6.webp',
      file: 'img/Documents/File/one/6.pdf',
    },
    {
      id: 7,
      title: 'Сертификат соответствия Система менеджмента качества от 21.05.25 г',
      size: '95 кб',
      previewImage: '/img/Documents/Preview/one/7.webp',
      file: 'img/Documents/File/one/7.pdf',
    },
    {
      id: 8,
      title: 'Сертификат соответствия Система экологического менеджмента от 21.05.25 г',
      size: '96 кб',
      previewImage: '/img/Documents/Preview/one/8.webp',
      file: 'img/Documents/File/one/8.pdf',
    },
  ],
  two: [
    {
      id: 1,
      title: 'Jas Tamir Elite School',
      size: '80 кб',
      previewImage: '/img/Documents/Preview/two/1.webp',
      file: 'img/Documents/File/two/1.pdf',
    },
    {
      id: 2,
      title: 'Банкнотная фабрика национального банка РК',
      size: '124 кб',
      previewImage: '/img/Documents/Preview/two/2.webp',
      file: 'img/Documents/File/two/2.pdf',
    },
    {
      id: 3,
      title: 'БП ИП Фиркан',
      size: '256 кб',
      previewImage: '/img/Documents/Preview/two/3.webp',
      file: 'img/Documents/File/two/3.pdf',
    },
    {
      id: 4,
      title: 'БП КАЗАХСКИЙ АГРОТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ имени САКЕНА СЕЙФУЛЛИНА',
      size: '267 кб',
      previewImage: '/img/Documents/Preview/two/4.webp',
      file: 'img/Documents/File/two/4.pdf',
    },
    {
      id: 5,
      title: 'БП от АО Казпочта',
      size: '258 кб',
      previewImage: '/img/Documents/Preview/two/5.webp',
      file: 'img/Documents/File/two/5.pdf',
    },

    {
      id: 6,
      title: 'БП от Банка ВТБ в городе Тараз',
      size: '291 кб',
      previewImage: '/img/Documents/Preview/two/6.webp',
      file: 'img/Documents/File/two/6.pdf',
    },
    {
      id: 7,
      title: 'БП СП Инкай',
      size: '110 кб',
      previewImage: '/img/Documents/Preview/two/7.webp',
      file: 'img/Documents/File/two/7.pdf',
    },
    {
      id: 8,
      title: 'БП Тараз Арена',
      size: '177 кб',
      previewImage: '/img/Documents/Preview/two/8.webp',
      file: 'img/Documents/File/two/8.pdf',
    },
    {
      id: 9,
      title: 'Жамбыл облыстық Ардагерлер кеңесі',
      size: '196 кб',
      previewImage: '/img/Documents/Preview/two/9.webp',
      file: 'img/Documents/File/two/9.pdf',
    },

    {
      id: 10,
      title: 'Жамбылский областной Центр реабилитации и адаптации детей инвалидов',
      size: '318 кб',
      previewImage: '/img/Documents/Preview/two/10.webp',
      file: 'img/Documents/File/two/10.pdf',
    },
    {
      id: 11,
      title: 'КГУ казахская классическая гимназия №45 имени Б. Момышулы',
      size: '216 кб',
      previewImage: '/img/Documents/Preview/two/11.webp',
      file: 'img/Documents/File/two/11.pdf',
    },
    {
      id: 12,
      title: 'КГУ Средняя школа 65 в городе Тараз',
      size: '209 кб',
      previewImage: '/img/Documents/Preview/two/12.webp',
      file: 'img/Documents/File/two/12.pdf',
    },
    {
      id: 13,
      title: 'ҚР Мәдениет және спорт министрлігі Орталық мемлекеттік архивтен алғыс хат',
      size: '196 кб',
      previewImage: '/img/Documents/Preview/two/13.webp',
      file: 'img/Documents/File/two/13.pdf',
    },

    {
      id: 14,
      title: 'О поощрении сотрудников ТОО «СП» Инкай».',
      size: '100 кб',
      previewImage: '/img/Documents/Preview/two/14.webp',
      file: 'img/Documents/File/two/14.pdf',
    },
    {
      id: 15,
      title: 'Отдел образования в городе Тараз',
      size: '156 кб',
      previewImage: '/img/Documents/Preview/two/15.webp',
      file: 'img/Documents/File/two/15.pdf',
    },
    {
      id: 16,
      title: 'ТОО ED technology',
      size: '291 кб',
      previewImage: '/img/Documents/Preview/two/16.webp',
      file: 'img/Documents/File/two/16.pdf',
    },
    {
      id: 17,
      title: 'ТОО Айко',
      size: '292 кб',
      previewImage: '/img/Documents/Preview/two/17.webp',
      file: 'img/Documents/File/two/17.pdf',
    },

    {
      id: 18,
      title: 'ТОО Газ Ойл Тараз',
      size: '97 кб',
      previewImage: '/img/Documents/Preview/two/18.webp',
      file: 'img/Documents/File/two/18.pdf',
    },
    {
      id: 19,
      title: 'ТОО ДОСАЛЫ',
      size: '68 кб',
      previewImage: '/img/Documents/Preview/two/19.webp',
      file: 'img/Documents/File/two/19.pdf',
    },
    {
      id: 20,
      title: 'ТОО Совместное Предприятие INKAI',
      size: '160 кб',
      previewImage: '/img/Documents/Preview/two/20.webp',
      file: 'img/Documents/File/two/20.pdf',
    },

    {
      id: 21,
      title: 'Филиал Назарбаев Интеллектуальная Школа в городе Тараз',
      size: '121 кб',
      previewImage: '/img/Documents/Preview/two/21.webp',
      file: 'img/Documents/File/two/21.pdf',
    },
    {
      id: 22,
      title: 'Филиал ОО «Казахское общество слепых» в Жамбылской области',
      size: '188 кб',
      previewImage: '/img/Documents/Preview/two/22.webp',
      file: 'img/Documents/File/two/22.pdf',
    },
    {
      id: 23,
      title: 'Филиал РОО «Организация ветеранов» в Жамбылской области',
      size: '171 кб',
      previewImage: '/img/Documents/Preview/two/23.webp',
      file: 'img/Documents/File/two/23.pdf',
    },
  ],
};
