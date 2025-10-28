import type { ModalVariant, NavItem } from './navItemModal/nav-Item.types';

export interface HeaderProps {
  theme?: 'light' | 'dark';
}

export interface HeaderContentProps {
  navItems: NavItem[];
  theme: 'dark' | 'light';
  logoSrc: string;
  onItemEnter?: (title: ModalVariant) => void;
  onItemLeave?: () => void;
  activeNavItem?: string | null;
}
