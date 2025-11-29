// src/widgets/projectMenu/index.tsx
'use client';
import { useCallback, useMemo, useState } from 'react';

import { Button, H } from '@/shared/ui';

import { ProjectMenuItem } from './ProjectMenuItem';
import { INITIAL_ITEMS_COUNT, PROJECT_MENU_DATA_TITLE, TYPEPROJECT } from './projectMenu.const';
import type { ProjectCategory } from './projectMenu.types';

import './_project-menu.scss';

export const ProjectMenu = ({ type = 'ALL' }: { type?: ProjectCategory }) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_COUNT);
  const [isExpanding, setIsExpanding] = useState(false);

  const projectData = useMemo(() => TYPEPROJECT[type], [type]);
  const titleData = useMemo(() => PROJECT_MENU_DATA_TITLE[type], [type]);
  const visibleProjects = useMemo(
    () => projectData.slice(0, visibleCount),
    [projectData, visibleCount]
  );
  const hasMore = visibleCount < projectData.length;

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredRow((prev) => (prev === null ? index : prev));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredRow(null);
  }, []);

  const handleActiveRow = useCallback((index: number) => {
    setActiveRow((prev) => (prev === index ? null : index));
  }, []);

  const handleLoadMore = useCallback(() => {
    setIsExpanding(true);
    setVisibleCount(projectData.length);
  }, [projectData.length]);

  return (
    <section className="project-menu" aria-labelledby="projects-heading">
      <div className="project-menu__container container">
        <header className="project-menu__header-section">
          <H level="2" variant="light" id="projects-heading" className="project-menu__title">
            Наши проекты
          </H>

          {/* <H level="4" variant="light" className="project-menu__subtitle">
            {titleData.title}
            {titleData.highlightTitle && <span> {titleData.highlightTitle}</span>}
          </H> */}
          <h3 className="project-menu__subtitle">
            {titleData.title}
            {titleData.highlightTitle && <span> {titleData.highlightTitle}</span>}
          </h3>
        </header>

        {/* Заголовки колонок (только desktop) */}
        <div className="project-menu__headers">
          <div className="project-menu__header">проект</div>
          <div className="project-menu__header">клиент</div>
          <div className="project-menu__header">тип услуги</div>
        </div>

        {/* Список проектов */}
        <div className="project-menu__list">
          {visibleProjects.map((item, index) => (
            <ProjectMenuItem
              key={item.id}
              item={item}
              index={index}
              isHovered={hoveredRow === index}
              isActive={activeRow === index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onActiveRow={handleActiveRow}
              isAnimated={index >= INITIAL_ITEMS_COUNT && isExpanding}
            />
          ))}
        </div>

        {/* Кнопка загрузки */}
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
