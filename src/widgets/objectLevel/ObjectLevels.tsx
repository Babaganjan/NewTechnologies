import './_object-levels.scss';
import { H } from '@/shared/ui';

import { OBJECT_LEVELS_DATA } from './objectLevels.const';

export const ObjectLevel = () => {
  return (
    <section className="object-levels">
      <div className="container object-levels__container flex">
        <div className="object-levels__inner flex">
          <H level={'2'} variant="light" className="object-levels__title title">
            Кому подходит
          </H>
          <H level={'3'} variant="light" className="object-levels__subtitle subtitle">
            Индивидуальные решения <span>для объектов любого уровня</span>
          </H>
        </div>
        <ul className="object-levels__list flex">
          {OBJECT_LEVELS_DATA.map((item) => (
            <li className={`object-levels__item item item-layout--${item.id}`} key={item.id}>
              <article className="item__inner flex">
                <H level={'4'} variant="light"className="item__title">
                  {item.title}
                </H>
                <p className="item__prev">{item.prev}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
