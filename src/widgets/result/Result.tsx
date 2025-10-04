import './_result.scss';

export const Result = () => {
  return (
    <section
      className="result with-top-trapezoid with-bottom-trapezoid"
      aria-label="Достижения компании"
    >
      <div className="container result__container flex">
        <div className="result__inner flex">
          <h2 className="result__title title">Наши достижения</h2>
        </div>

        <ul className="result__list flex" role="list">
          <li className="result__content flex">
            <article className="result__wrapper flex">
              <strong className="result__number">100+</strong>
              <h4 className="result__article-title">Опытных сотрудников</h4>
            </article>
            <p className="result__prev">
              От&nbsp;первых монтажей до&nbsp;инженерных решений&mdash; постоянное обучение
              и&nbsp;рост.
            </p>
          </li>
          <li className="result__item">
            <article className="item__inner flex">
              <h4 className="item__title">Собственная разработка&nbsp;по</h4>
              <p className="item__prev">
                Платформы с&nbsp;простой интеграцией, модульной архитектурой
                и&nbsp;масштабируемостью под любые задачи.
              </p>
            </article>
          </li>
          <li className="result__item">
            <article className="item__inner flex">
              <strong className="item__number">12</strong>
              <h4 className="item__title item__title-width">Лет успешной работы</h4>
            </article>
          </li>
          <li className="result__item">
            <article className="item__inner flex">
              <h4 className="item__title">Собственное производство оборудования</h4>
              <p className="item__prev">
                От&nbsp;проектирования до&nbsp;монтажа. Надёжные решения под ключ с&nbsp;гарантией
                до&nbsp;12&nbsp;месяцев.
              </p>
            </article>
          </li>
          <li className="result__item result__item-layout">
            <article className="item__inner item__inner-layout flex">
              <strong className="item__number item__number-layout">2000+</strong>
              <h4 className="item__title item__title-layout">Успешно реализованных проектов</h4>
              <p className="item__prev item__prev-layout">
                Возьмемся за&nbsp;проект любого масштаба: от&nbsp;частных владений до&nbsp;объектов
                национального значения.
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};
