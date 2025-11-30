import type { NavListModalProps } from '../header/navItemModal/nav-Item.types';

interface ServiceItemProps {
  name: string;
  image: string;
  href: string;
}

export interface ServicesProps extends Omit<NavListModalProps, 'list'> {
  list: ServiceItemProps[];
}
