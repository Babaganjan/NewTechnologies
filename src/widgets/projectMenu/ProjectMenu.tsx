'use client';

import { useState, useCallback } from 'react';

import { Arrow } from '@/shared/icons';
import { H, ProjectListItem, ProjectNumberItem, ProjectServiceItem } from '@/shared/ui';
import type { ProjectMenuItemProps } from '@/shared/ui/types/ProjectMenu.types';

import './_project-menu.scss';

import { PROJECT_MENU_DATA } from './projectMenu.const';
interface ProjectItemProps extends Omit<ProjectMenuItemProps, 'item' |'isHovered'>{
  hoveredRow: number | null;
}

export const ProjectMenu = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const onMouseEnter = useCallback((index: number) => {
    setHoveredRow(index);
  }, []);

  const onMouseLeave = useCallback(() => {
    setHoveredRow(null);
  }, []);


  const createProjectProps = ({index, hoveredRow, onMouseEnter, onMouseLeave}: ProjectItemProps): Omit<ProjectMenuItemProps, 'item'> => {
    return {
      index,
      isHovered: hoveredRow === index,
      onMouseEnter,
      onMouseLeave,
    };
  };

  return (
    <section className="project-menu" aria-labelledby="project-menu-title">
      <div className="project-menu__container container">
        <H level={'2'} variant="light" id="project-menu-title" className="project-menu__title">
        Наши проекты
        </H>
        <H level={'4'} variant="light" className="project-menu__subtitle">
        2000+ реализованных проектов
       <span>&nbsp;&mdash; от&nbsp;уютных кафе у&nbsp;дома до&nbsp;объектов государственного значения.</span>
        </H>
        <div className="project-menu__headers">
          <div className="project-menu__header project-menu__header--project">проект</div>
          <div className="project-menu__header project-menu__header--client">клиент</div>
          <div className="project-menu__header project-menu__header--service">тип услуги</div>
        </div>

        <div className="project-menu__numbers">
          {PROJECT_MENU_DATA.map((item, index) => (
            <ProjectNumberItem
              key={`number-${item.id}`}
              {...createProjectProps({index, hoveredRow, onMouseEnter, onMouseLeave})}
            />
          ))}
        </div>

        <ul className="project-menu__list" role="list">
          {PROJECT_MENU_DATA.map((item, index) => (
            <ProjectListItem
              key={item.id}
              item={item}
              {...createProjectProps({index, hoveredRow, onMouseEnter, onMouseLeave})}
            />
          ))}
        </ul>

        <div className="project-menu__services">
          {PROJECT_MENU_DATA.map((item, index) => (
            <ProjectServiceItem
              key={`service-${item.id}`}
              item={item}
              {...createProjectProps({index, hoveredRow, onMouseEnter, onMouseLeave})}
            />
          ))}
        </div>
        <button 
          className="project-menu__button"
          type="button"
          aria-label='Загрузить еще'
        >
          Загрузить еще <Arrow width={12} height={15} />
        </button>
      </div>
    </section>
  );
};
