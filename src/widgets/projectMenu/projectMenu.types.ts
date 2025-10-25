export interface ProjectMenuData {
  id: number;
  title: string;
  subtitle: string;
  service: string;
  image: string;
}

export interface ProjectMenuItemProps {
  item: ProjectMenuData;
  index: number;
  isHovered: boolean;
  isActive: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  onActiveRow: (index: number) => void;
}
