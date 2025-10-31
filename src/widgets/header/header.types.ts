import type { ModalVariant, NavItem } from './navItemModal/nav-Item.types';

export interface HeaderProps {
  theme?: 'light' | 'dark';
}

export interface HeaderContentProps extends HeaderProps {
  navItems: NavItem[];
  logoSrc?: string;
  onItemEnter?: (title: ModalVariant) => void;
  onItemLeave?: () => void;
  onMobilModal?: () => void;
  onModalClose?: () => void;
  activeNavItem?: string[];
}

