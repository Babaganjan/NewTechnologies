'use client';
import { Arrow } from '@/shared/icons';
import { H } from '@/shared/ui';
import type { QuestionItem } from '@/widgets/questions/questions.const';

import './_questionsCard.scss';

interface QuestionsCardProps {
  question: QuestionItem;
  setActiveCard: (id: string | null) => void;
  activeCard: string | null;
}

export const QuestionsCard = ({ question, setActiveCard, activeCard }: QuestionsCardProps) => {
  const isExpanded = activeCard === question.id;

  return (
    <li
      className="questions__card"
      data-grid-index={question.gridIndex}
      onMouseEnter={() => setActiveCard(question.id)}
      onMouseLeave={() => setActiveCard(null)}
      role="button"
      aria-expanded={isExpanded}
      tabIndex={0}
      onFocus={() => setActiveCard(isExpanded ? null : question.id)}
    >
      <div className="questions__card-decorative" aria-hidden="true"></div>
      <H level={'5'} className="questions__content">
        {question.content}
      </H>
      {isExpanded && (
        <div className="questions__description" role="region" aria-label="Ответ на вопрос">
          <p>{question.description}</p>
          {question.descriptionList && (
            <ul className="questions__list">
              {question.descriptionList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
      <Arrow width={20} height={25} className="questions__card-arrow" aria-hidden="true" />
    </li>
  );
};
