'use client';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';
import { Heading } from '@/shared/ui/Heading';

import './_questions-block.scss';
import { QUESTIONS_DATA, ACTIVE_CARD_DATA } from './questions.const';

export const Questions = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="questions" aria-labelledby="questions-title">
      <div className="questions__container container">
        <Heading level={2} variant="light" id="questions-title" className="questions__title title">
          Частые вопросы
        </Heading>
        <ul className="card-wrapper">
          {QUESTIONS_DATA.map((question) => (
            <li
              key={question.id}
              className="questions__card"
              data-grid-index={question.gridIndex}
              onMouseEnter={() => setActiveCard(question.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="questions__card-decorative"></div>
              <h5 className="questions__content">{question.content}</h5>
              {activeCard === question.id && (
                <p className="questions__description">{question.description}</p>
              )}
              <Arrow width={20} height={25} className="questions__card-arrow" />
            </li>
          ))}
          <li
            className="questions__card--active questions__card"
            data-grid-index={ACTIVE_CARD_DATA.gridIndex}
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
