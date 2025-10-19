export interface ProjectMenuData {
  id: number;
  subtitle: string;
  service: string;
  image: string;
}

export const PROJECT_MENU_DATA: ProjectMenuData[] = [
  {
    id: 1,
    subtitle: 'Филиал «Назарбаев Интеллектуальная школа» г. Тараз, АОО «НИШ»',
    service: 'Система видеонаблюдения',
    image: '/img/favorite-1.webp',
  },
  {
    id: 2,
    subtitle: 'КГУ «Аппарат акима Жамбылской области»',
    service: 'Система видеонаблюдения',
    image: '/img/favorite-2.webp',
  },
  {
    id: 3,
    subtitle: 'ЖОФ АО «Казпочта»',
    service: 'Комплексная безопасность',
    image: '/img/favorite-3.webp',
  },
  {
    id: 4,
    subtitle: 'ТОО «Фиркан»',
    service: 'Пожарная сигнализация',
    image: '/img/product-item-1.webp',
  },
  {
    id: 5,
    subtitle: 'ТОО «Научно-клинический центр кардиохирургии и трансплантации»',
    service: 'Система видеонаблюдения',
    image: '/img/product-item-2.webp',
  },
  {
    id: 6,
    subtitle: 'КГП «Тараз-Арена»',
    service: 'Система видеонаблюдения',
    image: '/img/product-item-3.webp',
  },
  {
    id: 7,
    subtitle: 'ГУ «Департамент КНБ РК по Жамбылской области»',
    service: 'Охранно-пожарная система',
    image: '/img/product-item-4.webp',
  },
  {
    id: 8,
    subtitle: 'НАО «КазНИТУ им. К.И. Сатпаева»',
    service: 'Охранно-пожарная система',
    image: '/img/product-item-5.webp',
  },
] as const;
