'use client';

import { useState } from 'react';

import { Arrow } from '@/shared/icons';

import './_project-menu.scss';
import { PROJECT_MENU_DATA } from './projectMenu.const';

export const ProjectMenu = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  return (
    <section className="project-menu" aria-labelledby="project-menu-title">
      <div className="project-menu__container container">
        <h2 id="project-menu-title" className="project-menu__title">
          Наши проекты
        </h2>
        <p className="project-menu__subtitle">
          2000+ реализованных проектов
          <span>—от уютных кафе у дома до объектов государственного значения.</span>
        </p>
        <div className="project-menu__headers">
          <div className="project-menu__header project-menu__header--project">проект</div>
          <div className="project-menu__header project-menu__header--client">клиент</div>
          <div className="project-menu__header project-menu__header--service">тип услуги</div>
        </div>

        <div className="project-menu__numbers">
          {PROJECT_MENU_DATA.map((item, index) => (
            <div
              key={`number-${item.id}`}
              className={`project-menu-item__number ${hoveredRow === index && 'hovered'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              №{(index + 1).toString().padStart(3, '0')}
            </div>
          ))}
        </div>

        <ul className="project-menu__list">
          {PROJECT_MENU_DATA.map((item, index) => (
            <li
              key={item.id}
              className={`project-menu-item ${hoveredRow === index && 'hovered'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-menu-item__content">
                <span className="project-menu-item__client service-label--services">клиент</span>
                <div className="project-menu-item__subtitle">
                  <p className="project-menu-item__subtitle-title">{item.subtitle}</p>
                  <Arrow
                    color="var(--text-black)"
                    width={12}
                    height={15}
                    className="project-menu-item__arrow"
                  />
                </div>
                <span className="project-menu-item__service-label service-label--services">
                  тип услуги
                </span>
                <p className="project-menu-item__service service-label--services">{item.service}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="project-menu__services">
          {PROJECT_MENU_DATA.map((item, index) => (
            <div
              key={`service-${item.id}`}
              className={`project-menu-item__service ${hoveredRow === index && 'hovered'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <p>{item.service}</p>
            </div>
          ))}
        </div>
        <button className="project-menu__button">
          Загрузить еще <Arrow width={12} height={15} />
        </button>
      </div>
    </section>
  );
};
