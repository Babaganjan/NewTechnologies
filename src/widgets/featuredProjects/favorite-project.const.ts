export interface FavoritesProjectData {
  id: number;
  image: string;
  title: string;
  description: string;
}

export const FAVORITES_PROJECT_DATA: FavoritesProjectData[] = [
  {
    id: 1,
    image: '/img/favorite-1.webp',
    title: 'Метрополитен г. алматы',
    description: 'Установили систему автоматического пожаротушения на базе оборудования «Тунгус»',
  },
  {
    id: 2,
    image: '/img/favorite-2.webp',
    title: 'Проект «комфортная школа»',
    description: 'Установили турникеты NT по всему Казахстану при поддержке фонда «Самрук-Қазына».',
  },

  {
    id: 3,
    image: '/img/favorite-3.webp',
    title: 'Двд г. Тараз',
    description: 'Оборудовали объект современными серверными шкафами.',
  },
] as const;
