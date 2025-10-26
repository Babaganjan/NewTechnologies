export interface HeaderProps {
  theme?: 'light' | 'dark';
}

export type NavItem = Readonly<{
  href: string;
  title: string;
  hasIcon: boolean;
  hasModal: boolean;
}>;

export interface HeaderContentProps {
  navItems: NavItem[];
  theme: 'dark' | 'light';
  logoSrc: string;
  onItemEnter?: (title: string) => void;
  onItemLeave?: () => void;
  onCloseModal?: () => void;
  activeNavItem?: string | null;
}
