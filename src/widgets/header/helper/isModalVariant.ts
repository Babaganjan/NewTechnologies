import type { ModalVariant } from '@/widgets/header/navItemModal/nav-Item.types';

export const isModalVariant = (title: string): title is ModalVariant => {
  return title === 'Производство' || title === 'Сервис';
};
