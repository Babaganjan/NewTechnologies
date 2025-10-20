export interface ProjectMenuItem {
  id: string | number;
  subtitle: string;
  service: string;
  image: string;
}

export interface ProjectMenuItemProps {
  item: ProjectMenuItem;
  index: number;
  isHovered: boolean;
  isActive: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onActiveRow: (index: number) => void;
}
