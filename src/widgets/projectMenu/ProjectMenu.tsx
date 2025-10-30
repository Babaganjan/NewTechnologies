'use client';
import Image from 'next/image';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';
import { Button, H } from '@/shared/ui';
import './_project-menu.scss';

import { ProjectListItem } from './ProjectListItem/ProjectListItem';
import { ProjectNumberItem } from './ProjectNumberItem/ProjectNumberItem';
import { ProjectServiceItem } from './ProjectServiceItem/ProjectServiceItem';
import { getProjectsByCategory } from './helpers/getProjectsByCategory';
import { INITIAL_ITEMS_COUNT, PROJECT_MENU_DATA } from './projectMenu.const';
import type { ProjectCategory, ProjectMenuItemProps } from './projectMenu.types';

export const ProjectMenu = ({ type = 'all' }: { type?: ProjectCategory }) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_COUNT);
  const [isExpanding, setIsExpanding] = useState(false);
  const projectData = getProjectsByCategory(type);

  const onMouseEnter = (index: number) => {
    if (activeRow === null) {
      setHoveredRow(index);
    }
  };

  const onMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleActiveRow = (index: number) => {
    setActiveRow((prev) => (prev === index ? null : index));
  };

  const handleLoadMore = () => {
    setIsExpanding(true);
    setVisibleCount(PROJECT_MENU_DATA.length);
  };

  const createProjectProps = (index: number): Omit<ProjectMenuItemProps, 'item'> => ({
    index,
    isHovered: hoveredRow === index,
    isActive: activeRow === index,
    onMouseEnter,
    onMouseLeave,
    onActiveRow: handleActiveRow,
  });

  const visibleProjects = projectData.slice(0, visibleCount);
  const hasMore = visibleCount < projectData.length;

  return (
    <section className="project-menu" aria-labelledby="project-menu-title">
      <div className="project-menu__container container">
        <H level={'2'} variant="light" id="project-menu-title" className="project-menu__title">
          Наши проекты
        </H>
        <H level={'4'} variant="light" className="project-menu__subtitle">
          2000+ реализованных проектов
          <span>
            &nbsp;&mdash; от&nbsp;уютных кафе у&nbsp;дома до&nbsp;объектов государственного
            значения.
          </span>
        </H>
        <div className="project-menu__headers">
          <div className="project-menu__header project-menu__header--project">проект</div>
          <div className="project-menu__header project-menu__header--client">клиент</div>
          <div className="project-menu__header project-menu__header--service">тип услуги</div>
        </div>
        <div className="project-menu__numbers">
          {visibleProjects.map((item, index) => (
            <div
              key={`number-${item.id}`}
              className={`project-menu__number-wrapper ${index >= INITIAL_ITEMS_COUNT && isExpanding ? 'project-menu__number-wrapper--animated' : ''}`}
            >
              <ProjectNumberItem {...createProjectProps(index)} />
              {(hoveredRow === index || activeRow === index) && (
                <div
                  className="project-menu__preview"
                  aria-hidden="true"
                  onMouseEnter={() => onMouseEnter(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.subtitle}
                    loading="lazy"
                    width={150}
                    height={173}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <ul className="project-menu__list">
          {visibleProjects.map((item, index) => (
            <ProjectListItem
              key={item.id}
              item={item}
              {...createProjectProps(index)}
              isAnimated={index >= INITIAL_ITEMS_COUNT && isExpanding}
            />
          ))}
        </ul>
        <div className="project-menu__services">
          {visibleProjects.map((item, index) => (
            <div
              key={`service-${item.id}`}
              className={`project-menu__service-wrapper ${index >= INITIAL_ITEMS_COUNT && isExpanding ? 'project-menu__service-wrapper--animated' : ''}`}
            >
              <ProjectServiceItem item={item} {...createProjectProps(index)} />
              {(hoveredRow === index || activeRow === index) && (
                <div className="project-menu__arrow-decoration" aria-hidden="true">
                  <Arrow width={30} height={24} />
                </div>
              )}
            </div>
          ))}
        </div>
        {hasMore && (
          <Button
            variant="primary"
            aria-label="Загрузить еще"
            className="project-menu__button"
            icon
            rotate
            onClick={handleLoadMore}
          >
            Загрузить еще
          </Button>
        )}
      </div>
    </section>
  );
};
