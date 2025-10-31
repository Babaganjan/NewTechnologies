'use client';
import clsx from 'clsx';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';
import { H } from '@/shared/ui';

import './_questions-block.scss';
import { getFAQByCategory } from './helpers/getFAQByCategory';
import { ACTIVE_CARD_DATA } from './questions.const';
import { QuestionsCard } from './questionsCard/QuestionsCard';

export const Questions = ({ type = 'default' }: { type?: string }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const data = getFAQByCategory(type);
  const isDefault = type === 'default';

  return (
    <section className="questions" aria-labelledby="questions-title">
      <div className="questions__container container">
        <H level={'2'} variant="light" id="questions-title" className="questions__title title">
          Частые вопросы
        </H>
        <ul className={clsx('card-wrapper', isDefault && 'card-wrapper--custom')}>
          {data.map((question) => (
            <QuestionsCard
              key={question.id}
              question={question}
              setActiveCard={setActiveCard}
              activeCard={activeCard}
            />
          ))}
          <li
            className={clsx(
              'questions__card--active questions__card',
              isDefault && 'questions__card--custom-position'
            )}
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
