import clsx from 'clsx';

import { H } from '../../../shared/ui/Heading/H';
import type { ProjectMenuItemProps } from '../projectMenu.types';

import './_projectNumberItem.scss';

export const ProjectNumberItem = ({
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onActiveRow,
  isActive,
}: Omit<ProjectMenuItemProps, 'item'>) => (
  <H
    level={'5'}
    className={clsx(
      'project-menu-item__number',
      isHovered && 'hovered',
      isActive && 'project-menu--active'
    )}
    onMouseEnter={() => onMouseEnter(index)}
    onMouseLeave={onMouseLeave}
    onClick={() => onActiveRow(index)}
  >
    №{(index + 1).toString().padStart(3, '0')}
  </H>
);
