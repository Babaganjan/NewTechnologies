export interface NavListModalProps {
  id: number;
  title: string;
  list: {
    name: string;
    image?: string;
    href: string;
  }[];
}

export interface SelectedCategoryType {
  name: string;
  image?: string;
  index?: number;
  desc?: string;
}

export type ModalVariant = 'Производство' | 'Сервис';

export type titleNav = 'Сервис' | 'Производство' | 'IT-Решения' | 'О нас' | 'Контакты';

export type NavItem = {
  href: string;
  title: titleNav;
  hasIcon: boolean;
  hasModal: boolean;
};
