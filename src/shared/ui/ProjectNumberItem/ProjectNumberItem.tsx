import { H } from "../Heading/H";
import type { ProjectMenuItemProps } from "../types/ProjectMenu.types";

import './_projectNumberItem.scss'

export const ProjectNumberItem = ({ index, isHovered, onMouseEnter, onMouseLeave }: Omit<ProjectMenuItemProps, 'item'>) => (
    <H
      level={'5'}
      className={`project-menu-item__number ${isHovered && 'hovered'}`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      №{(index + 1).toString().padStart(3, '0')}
    </H>
  );