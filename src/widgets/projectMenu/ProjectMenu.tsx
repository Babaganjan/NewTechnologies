import { Arrow } from '@/shared/icons';

import './_project-menu.scss';
import { projectMenuData } from './projectMenu.const';

export const ProjectMenu = () => {
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
        <ul className="project-menu__list">
          {projectMenuData.map((item) => (
            <li key={item.id} className="project-menu-item">
              <span className="project-menu-item__client">клиент</span>
              <h5 className="project-menu-item__subtitle">{item.subtitle}</h5>
              <span>тип услуги</span>
              <p>{item.service}</p>
            </li>
          ))}
        </ul>
        <button className="project-menu__button">
          Загрузить еще <Arrow width={12} height={15} />
        </button>
      </div>
    </section>
  );
};
