'use client';
import { motion } from 'framer-motion';

import useModal from '@/hooks/useModal';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import { Button } from '@/shared/ui';
import { FormaConsultation } from '@/widgets';
import './_feedback-menu.scss';

interface FeedbackMenuProps {
  theme?: 'white';
}

export const FeedbackMenu = ({ theme }: FeedbackMenuProps) => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });

  const sectionClass = `feedback-menu feedback-menu--${theme}`;

  return (
    <>
      <section className={sectionClass} aria-labelledby="feedback-menu-title">
        <motion.div
          className="container"
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
          <div className="feedback-menu__wrapper">
            <motion.h2
              variants={fadeInUp}
              id="feedback-menu-title"
              className="feedback-menu__title"
            >
              Рассчитать решение под ваш объект?
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Button
                type="button"
                variant="feedback"
                icon
                onClick={handleOpenConsultation}
                aria-haspopup="dialog"
                aria-expanded={isConsultationModalOpen}
                scrambler
              >
                Подобрать решение
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {isConsultationModalOpen && (
        <FormaConsultation onSubmit={handleCloseConsultation} onClose={handleCloseConsultation} />
      )}
    </>
  );
};
