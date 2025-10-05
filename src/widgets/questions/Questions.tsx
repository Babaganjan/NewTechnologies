import { Arrow } from '@/shared/icons';

import './_questions-block.scss';
import { questionsData, activeCardData } from './questions.const';

export const Questions = () => {
  return (
    <section className="questions" aria-labelledby="questions-title">
      <div className="questions__container container">
        <h2 id="questions-title" className="questions__title">
          Частые вопросы
        </h2>
        <ul className="card-wrapper">
          {questionsData.map((question) => (
            <li key={question.id} className="questions__card" data-grid-index={question.gridIndex}>
              <div className="questions__card-decorative"></div>
              <h5 className="questions__content">{question.content}</h5>
              <Arrow width={20} height={25} className="questions__card-arrow" />
            </li>
          ))}
          <li
            className="questions__card--active questions__card"
            data-grid-index={activeCardData.gridIndex}
          >
            <div className="questions__card-content">
              <h4 className="questions__card-title">Все еще есть вопросы?</h4>
              <span className="questions__card-subtitle">Мы готовы помочь.</span>
              <Arrow width={20} height={25} className="questions__card-arrow--active" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
