import './_object-levels.scss';

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
        <ul className="object-levels__list flex" role="list">
          <li className="object-levels__item item item-layout--1">
            <article className="item__inner flex">
              <h4 className="item__title">Промышленные объекты</h4>
              <p className="item__prev">
                Металлургические и&nbsp;химические заводы, производственные цеха.
              </p>
            </article>
          </li>
          <li className="object-levels__item item item-layout--2">
            <article className="item__inner flex">
              <h4 className="item__title">Государственные учреждения</h4>
              <p className="item__prev">
                Металлургические и&nbsp;химические заводы, производственные цеха.
              </p>
            </article>
          </li>
          <li className="object-levels__item item item-layout--3">
            <article className="item__inner flex">
              <h4 className="item__title">Социальные объекты</h4>
              <p className="item__prev">
                Металлургические и&nbsp;химические заводы, производственные цеха.
              </p>
            </article>
          </li>
          <li className="object-levels__item item item-layout--4">
            <article className="item__inner flex">
              <h4 className="item__title">Стратегические объекты</h4>
              <p className="item__prev">
                Металлургические и&nbsp;химические заводы, производственные цеха.
              </p>
            </article>
          </li>
          <li className="object-levels__item item item-layout--5">
            <article className="item__inner flex">
              <h4 className="item__title">Жилые объекты</h4>
              <p className="item__prev">
                Металлургические и&nbsp;химические заводы, производственные цеха.
              </p>
            </article>
          </li>
          <li className="object-levels__item item item-layout--6">
            <article className="item__inner flex">
              <h4 className="item__title">Административные учреждения</h4>
              <p className="item__prev">
                Металлургические и&nbsp;химические заводы, производственные цеха.
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};
