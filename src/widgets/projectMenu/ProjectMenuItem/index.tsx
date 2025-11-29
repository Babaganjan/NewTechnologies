'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { memo } from 'react';

import { Arrow } from '@/shared/icons';

import type { ProjectMenuItemProps } from '../projectMenu.types';

import './_projectMenuItem.scss';

export const ProjectMenuItem = memo(
  ({
    item,
    index,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    isActive,
    onActiveRow,
    isAnimated = false,
  }: ProjectMenuItemProps) => {
    const rowClasses = clsx(
      'project-menu-row',
      isHovered && 'hovered',
      isActive && 'project-menu--active',
      isAnimated && 'project-menu-row--animated'
    );

    const projectNumber = `№${(index + 1).toString().padStart(3, '0')}`;

    return (
      <div
        className={rowClasses}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
        onClick={() => onActiveRow(index)}
      >
        <div className="project-menu-row__number">
          <data value={index + 1} className="project-menu-row__number-text">
            {projectNumber}
          </data>

          {(isHovered || isActive) && (
            <div className="project-menu-row__preview" aria-hidden="true">
              <Image src={item.image} alt="" loading="lazy" width={210} height={173} />
            </div>
          )}
        </div>

        <div className="project-menu-row__client">
          <span className="project-menu-row__label" aria-hidden="true">
            клиент
          </span>

          <div className="project-menu-row__title-wrapper">
            <h4 className="project-menu-row__title">{item.title}</h4>

            {isActive && <p className="project-menu-row__subtitle">{item.subtitle}</p>}

            <Arrow
              color={isActive ? 'var(--text-white)' : 'var(--text-black)'}
              width={12}
              height={15}
              className="project-menu-row__arrow"
              aria-hidden="true"
            />
          </div>

          {/* Развернутый контент для mobile */}
          {isActive && (
            <div className="project-menu-row__expanded">
              <p>{item.subtitle}</p>
              <figure className="project-menu-row__image-wrapper">
                <Image src={item.image} alt={item.subtitle} width={260} height={130} />
              </figure>
            </div>
          )}
        </div>

        {/* Колонка с услугой */}
        <div className="project-menu-row__service">
          <span className="project-menu-row__label">тип услуги</span>
          {/* <H level="5">{item.service}</H> */}
          <span className="project-menu-row__service-text">{item.service}</span>

          {/* Декоративная стрелка для desktop */}
          {(isHovered || isActive) && (
            <div className="project-menu-row__service-arrow" aria-hidden="true">
              <Arrow width={30} height={24} />
            </div>
          )}
        </div>
      </div>
    );
  }
);

ProjectMenuItem.displayName = 'ProjectMenuItem';
