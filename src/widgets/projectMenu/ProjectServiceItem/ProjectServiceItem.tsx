import { H } from '../../../shared/ui/Heading/H';
import type { ProjectMenuItemProps } from '../projectMenu.types';

import './_projectServiceItem.scss';

export const ProjectServiceItem = ({
  item,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onActiveRow,
  isActive,
}: ProjectMenuItemProps) => (
  <div
    className={`project-menu-item__service ${isHovered && 'hovered'} ${isActive && 'active'}`}
    onMouseEnter={() => onMouseEnter(index)}
    onMouseLeave={onMouseLeave}
    onClick={() => onActiveRow(index)}
    role="button"
    tabIndex={0}
    aria-label={`Тип услуги: ${item.service}`}
    aria-pressed={isActive}
  >
    <H level={'5'}>{item.service}</H>
  </div>
);
