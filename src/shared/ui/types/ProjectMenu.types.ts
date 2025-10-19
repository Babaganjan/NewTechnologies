import type { PROJECT_MENU_DATA } from "@/widgets/projectMenu/projectMenu.const";

export interface ProjectMenuItemProps {
    item: typeof PROJECT_MENU_DATA[0];
    index: number;
    isHovered: boolean;
    onMouseEnter: (index: number) => void;
    onMouseLeave: () => void;
  }