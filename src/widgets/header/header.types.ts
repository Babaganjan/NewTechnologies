import type { ModalVariant, NavItem } from './navItemModal/nav-Item.types';

export interface ThemeType {
  theme?: 'light' | 'dark';
}

export interface HeaderContentProps extends ThemeType {
  navItems: NavItem[];
  logoSrc?: string;
  onItemEnter?: (title: ModalVariant) => void;
  onItemLeave?: () => void;
  onMobilModal?: () => void;
  onModalClose?: () => void;
  activeNavItem?: ModalVariant | null;
  isModalOpen?: boolean;
  transparentBg?: boolean;
}
