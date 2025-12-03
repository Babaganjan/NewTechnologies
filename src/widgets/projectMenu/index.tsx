'use client';
import { motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

import { fadeInUp } from '@/shared/animations/scroll-animations';
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
      <motion.div
        className="project-menu__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.35, delayChildren: 0.1 },
          },
        }}
      >
        <header className="project-menu__header-section">
          <motion.div variants={fadeInUp}>
            <H level="2" variant="light" id="projects-heading" className="project-menu__title">
              Наши проекты
            </H>
          </motion.div>

          <motion.h3 variants={fadeInUp} className="project-menu__subtitle">
            {titleData.title}
            {titleData.highlightTitle && <span> {titleData.highlightTitle}</span>}
          </motion.h3>
        </header>

        <motion.div variants={fadeInUp} className="project-menu__headers">
          <div className="project-menu__header">проект</div>
          <div className="project-menu__header">клиент</div>
          <div className="project-menu__header">тип услуги</div>
        </motion.div>

        <motion.div variants={fadeInUp} className="project-menu__list">
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
        </motion.div>

        {hasMore && (
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 0.8 }}
            className="project-menu__button"
          >
            <Button
              variant="primary"
              aria-label="Загрузить еще"
              icon
              rotate
              onClick={handleLoadMore}
            >
              Загрузить еще
            </Button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};
