'use client';
import { Arrow } from '@/shared/icons';
import type { QuestionItem } from '@/widgets/questions/questions.const';

import { highlightText } from '../utils/highlightText';
import './_questionsCard.scss';

interface QuestionsCardProps {
  question: QuestionItem;
  setActiveCard: (id: string | null) => void;
  activeCard: string | null;
}

export const QuestionsCard = ({ question, setActiveCard, activeCard }: QuestionsCardProps) => {
  const isExpanded = activeCard === question.id;

  return (
    <div
      className="questions__card"
      data-grid-index={question.gridIndex}
      onMouseEnter={() => setActiveCard(question.id)}
      onMouseLeave={() => setActiveCard(null)}
      onClick={() => setActiveCard(isExpanded ? null : question.id)}
    >
      <h3 className="questions__content">{question.content}</h3>
      {isExpanded && (
        <div className="questions__description" role="region" aria-label="Ответ на вопрос">
          <p>
            {question.highlight
              ? highlightText(question.description, question.highlight)
              : question.description}
          </p>
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
    </div>
  );
};
