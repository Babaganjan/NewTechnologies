'use client';
import { Arrow } from '@/shared/icons';
import type { QuestionItem } from '@/widgets/questions/questions.const';

import { H } from '../Heading/H';
import './_questionsCard.scss';

interface QuestionsCardProps {
  question: QuestionItem;
  setActiveCard: (id: string | null) => void;
  activeCard: string | null;
}

export const QuestionsCard = ({ question, setActiveCard, activeCard }: QuestionsCardProps) => {
  return (
    <li
      className="questions__card"
      data-grid-index={question.gridIndex}
      onMouseEnter={() => setActiveCard(question.id)}
      onMouseLeave={() => setActiveCard(null)}
    >
      <div className="questions__card-decorative"></div>
      <H level={'5'} className="questions__content">
        {question.content}
      </H>
      {activeCard === question.id && (
        <H level={'5'} className="questions__description">
          {question.description}
        </H>
      )}
      <Arrow width={20} height={25} className="questions__card-arrow" />
    </li>
  );
};
