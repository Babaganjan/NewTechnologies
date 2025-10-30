import { PROJECT_CATEGORIES } from './projectMenu.const';

export interface ProjectMenuData {
  id: number;
  title: string;
  subtitle: string;
  service: string;
  image: string;
  type: string;
}

export interface ProjectMenuItemProps {
  item: ProjectMenuData;
  index: number;
  isHovered: boolean;
  isActive: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onActiveRow: (index: number) => void;
  isAnimated?: boolean;
}

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];
