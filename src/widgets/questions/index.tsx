'use client';
import clsx from 'clsx';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';
import { H } from '@/shared/ui';

import './_questions-block.scss';
import type { QuestionFAQ } from './questions.const';
import { ACTIVE_CARD_DATA, ALL_FAQ } from './questions.const';
import { QuestionsCard } from './questionsCard';

export const Questions = ({ type = 'DEFAULT' }: { type?: QuestionFAQ }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const data = ALL_FAQ[type];
  const isDefault = type === 'DEFAULT';

  return (
    <section className="questions" aria-labelledby="faq-heading">
      <div className="questions__container container">
        <H level={'2'} variant="light" id="faq-heading" className="questions__title title">
          Частые вопросы
        </H>
        <div className={clsx('card-wrapper', !isDefault && 'card-wrapper--custom')}>
          {data.map((question) => (
            <QuestionsCard
              key={question.id}
              question={question}
              setActiveCard={setActiveCard}
              activeCard={activeCard}
            />
          ))}
          <div
            className="questions__card--active questions__card"
            data-grid-index={ACTIVE_CARD_DATA.gridIndex}
          >
            <div className="questions__card-content">
              <h3 className="questions__card-title">Все еще есть вопросы?</h3>
              <p className="questions__card-subtitle">Мы готовы помочь.</p>
              <Arrow width={20} height={25} className="questions__card-arrow--active" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
