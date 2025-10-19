import { H } from "../Heading/H";
import type { ProjectMenuItemProps } from "../types/ProjectMenu.types";

import './_projectServiceItem.scss';

export const ProjectServiceItem = ({ item, index, isHovered, onMouseEnter, onMouseLeave }: ProjectMenuItemProps) => (
    <div
      className={`project-menu-item__service ${isHovered && 'hovered'}`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <H level={'5'}>{item.service}</H>
    </div>
  );