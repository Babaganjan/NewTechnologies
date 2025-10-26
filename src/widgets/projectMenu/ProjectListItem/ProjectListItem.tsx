import clsx from 'clsx';
import Image from 'next/image';

import { Arrow } from '@/shared/icons';

import './_projectListItem.scss';

import { H } from '../../../shared/ui/Heading/H';
import type { ProjectMenuItemProps } from '../projectMenu.types';

export const ProjectListItem = ({
  item,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  isActive,
  onActiveRow,
  isAnimated = false,
}: ProjectMenuItemProps) => (
  <li
    className={clsx(
      'project-menu-item',
      isHovered && 'hovered',
      isActive && 'project-menu--active',
      isAnimated && 'project-menu__list-item--animated'
    )}
    onMouseEnter={() => onMouseEnter(index)}
    onMouseLeave={onMouseLeave}
    onClick={() => onActiveRow(index)}
  >
    <div className="project-menu-item__content">
      <span className="project-menu-item__client service-label--services">клиент</span>
      <div className="project-menu-item__subtitle">
        <H level={'5'} variant="light" className="project-menu-item__subtitle-title">
          {item.title}
        </H>
        <Arrow
          color={isActive ? 'var(--text-white)' : 'var(--text-black)'}
          width={12}
          height={15}
          className="project-menu-item__arrow"
        />
      </div>
      {isActive && (
        <div className="project-menu__active-wrapper">
          <p>{item.subtitle}</p>
          <Image
            src={item.image}
            alt={item.subtitle}
            width={100}
            height={100}
            className="project-menu__image--active"
          />
        </div>
      )}
      <span className="project-menu-item__service-label service-label--services">тип услуги</span>
      <p className="project-menu-item__service service-label--services">{item.service}</p>
    </div>
  </li>
);
