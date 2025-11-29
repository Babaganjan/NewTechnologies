import { H } from '@/shared/ui';
import './_object-levels.scss';

import { OBJECT_LEVELS_DATA } from './objectLevels.const';

export const ObjectLevel = () => {
  return (
    <section className="object-levels" aria-labelledby="target-audience-heading">
      <div className="container object-levels__container">
        <header className="object-levels__inner">
          <H
            level={'2'}
            variant="light"
            className="object-levels__title title"
            id="target-audience-heading"
          >
            Кому подходит
          </H>
          <H level={'3'} variant="light" className="object-levels__subtitle subtitle">
            Индивидуальные решения <span>для объектов любого уровня</span>
          </H>
        </header>
        <ul className="object-levels__list">
          {OBJECT_LEVELS_DATA.map((item) => (
            <li className={`object-levels__item item item-layout--${item.id}`} key={item.id}>
              <div className="item__inner">
                <H level={'4'} variant="light" className="item__title">
                  {item.title}
                </H>
                <p className="item__prev">{item.prev}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
