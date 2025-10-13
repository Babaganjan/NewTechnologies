import './_object-levels.scss';
import { OBJECT_LEVELS_DATA } from './objectLevels.const';

export const ObjectLevel = () => {
  return (
    <section className="object-levels">
      <div className="container object-levels__container flex">
        <div className="object-levels__inner flex">
          <h2 className="object-levels__title title">Кому подходит</h2>
          <h3 className="object-levels__subtitle subtitle">
            Индивидуальные решения <span>для объектов любого уровня</span>
          </h3>
        </div>
        <ul className="object-levels__list flex">
          {OBJECT_LEVELS_DATA.map((item) => (
            <li className={`object-levels__item item item-layout--${item.id}`} key={item.id}>
              <article className="item__inner flex">
                <h4 className="item__title">{item.title}</h4>
                <p className="item__prev">{item.prev}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
