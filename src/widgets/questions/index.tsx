'use client';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

import useModal from '@/hooks/useModal';
import { AnimatedList } from '@/shared/animations/AnimatedList';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import { Arrow } from '@/shared/icons';
import { H } from '@/shared/ui';

import { FormaConsultation } from '../forma';
import './_questions-block.scss';

import type { QuestionFAQ } from './questions.const';
import { ACTIVE_CARD_DATA, ALL_FAQ } from './questions.const';
import { QuestionsCard } from './questionsCard';

export const Questions = ({ type = 'DEFAULT' }: { type?: QuestionFAQ }) => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });

  const [activeCard, setActiveCard] = useState<string | null>(null);
  const data = ALL_FAQ[type];
  const isDefault = type === 'DEFAULT';

  return (
    <>
      <section className="questions" aria-labelledby="faq-heading">
        <motion.div
          className="questions__container container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={fadeInUp}>
            <H level={'2'} variant="light" id="faq-heading" className="questions__title title">
              Частые вопросы
            </H>
          </motion.div>

          <AnimatedList className={clsx('card-wrapper', !isDefault && 'card-wrapper--custom')}>
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
              onClick={handleOpenConsultation}
            >
              <div className="questions__card-content">
                <h3 className="questions__card-title">Все еще есть вопросы?</h3>
                <p className="questions__card-subtitle">Мы готовы помочь.</p>
                <Arrow width={20} height={25} className="questions__card-arrow--active" />
              </div>
            </div>
          </AnimatedList>
        </motion.div>
      </section>
      {isConsultationModalOpen && (
        <FormaConsultation onSubmit={handleCloseConsultation} onClose={handleCloseConsultation} />
      )}
    </>
  );
};
