interface IPageItem {
  href: string;
  headingSvg: string;
}

interface IPageTitle {
  page: IPageItem[];
}

export const PAGE_TITLE: IPageTitle = {
  page: [
    {
      href: '/',
      headingSvg: 'Новые технологии'
    },

    {
      href: '/services/',
      headingSvg: 'Наш сервис'
    },

    {
      href: '/products/',
      headingSvg: 'Наша продукция'
    },

    {
      href: '/contacts/',
      headingSvg: 'Наши контакты'
    },
  ],
};
