'use client';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';
import { H, QuestionsCard } from '@/shared/ui';

import './_questions-block.scss';
import { QUESTIONS_DATA, ACTIVE_CARD_DATA } from './questions.const';

export const Questions = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="questions" aria-labelledby="questions-title">
      <div className="questions__container container">
        <H level={'2'} variant="light" id="questions-title" className="questions__title title">
          Частые вопросы
        </H>
        <ul className="card-wrapper">
          {QUESTIONS_DATA.map((question) => (
            <QuestionsCard
              key={question.id}
              question={question}
              setActiveCard={setActiveCard}
              activeCard={activeCard}
            />
          ))}
          <li
            className="questions__card--active questions__card"
            data-grid-index={ACTIVE_CARD_DATA.gridIndex}
          >
            <div className="questions__card-content">
              <H level={'4'} className="questions__card-title">
                Все еще есть вопросы?
              </H>
              <p className="questions__card-subtitle">Мы готовы помочь.</p>
              <Arrow width={20} height={25} className="questions__card-arrow--active" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
