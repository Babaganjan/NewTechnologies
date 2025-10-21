import './_result.scss';
import { H } from '@/shared/ui';
import { ResultList } from '@/shared/ui/resultList/ResultList';

import { resultData } from './result.const';

export const Result = () => {
  return (
    <section className="result with-trapezoids" aria-label="Достижения компании">
      <div className="container result__container flex">
        <div className="result__inner flex">
          <H level={'2'} className="result__title title" aria-label="Достижения компании">
            Наши достижения
          </H>
        </div>

        {/* <ul className="result__list flex">
          <li className="result__item result__item--fill flex">
            <article className="item__inner flex">
              <strong className="item__number">100+</strong>
              <H level={'4'} className="item__title">
                Опытных сотрудников
              </H>
              <p className="result__prev">
                От&nbsp;первых монтажей до инженерных решений &mdash; постоянное обучение
                и&nbsp;рост.
              </p>
            </article>
          </li>
          <li className="result__item">
            <article className="item__inner flex">
              <H level={'4'} variant="light" className="item__title">
                Собственная разработка&nbsp;по
              </H>
              <p className="item__prev">
                Платформы с&nbsp;простой интеграцией, модульной архитектурой
                и&nbsp;масштабируемостью под любые задачи.
              </p>
            </article>
          </li>
          <li className="result__item">
            <article className="item__inner flex">
              <strong className="item__number">12</strong>
              <H level={'4'} variant="light" className="item__title item__title-width">
                Лет успешной работы
              </H>
            </article>
          </li>
          <li className="result__item">
            <article className="item__inner flex">
              <H level={'4'} variant="light" className="item__title">
                Собственное производство оборудования
              </H>
              <p className="item__prev">
                От&nbsp;проектирования до&nbsp;монтажа. Надёжные решения под ключ с&nbsp;гарантией
                до&nbsp;12&nbsp;месяцев.
              </p>
            </article>
          </li>
          <li className="result__item result__item-layout">
            <article className="item__inner item__inner-layout flex">
              <strong className="item__number item__number-layout">2000+</strong>
              <H level={'4'} variant="light" className="item__title item__title-layout">
                Успешно реализованных проектов
              </H>
              <p className="item__prev item__prev-layout">
                Возьмемся за&nbsp;проект любого масштаба: от&nbsp;частных владений до&nbsp;объектов
                национального значения.
              </p>
            </article>
          </li>
        </ul> */}
        <ResultList items={resultData} />
      </div>
    </section>
  );
};
