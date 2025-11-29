'use client';
import useModal from '@/hooks/useModal';
import { Button, H } from '@/shared/ui';
import { FormaConsultation } from '@/widgets';
import './_feedback-menu.scss';

interface FeedbackMenuProps {
  theme?: 'white'; // Варианты тем
}

export const FeedbackMenu = ({ theme }: FeedbackMenuProps) => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });

  const sectionClass = `feedback-menu feedback-menu--${theme}`;

  return (
    <>
      <section className={sectionClass} aria-labelledby="feedback-menu-title">
        <div className="container">
          <div className="feedback-menu__wrapper">
            <H level={'3'} variant="dark" id="feedback-menu-title" className="feedback-menu__title">
              Рассчитать решение под ваш объект?
            </H>
            <Button
              type="button"
              variant="feedback"
              icon
              onClick={handleOpenConsultation}
              aria-haspopup="dialog"
              aria-expanded={isConsultationModalOpen}
            >
              Подобрать решение
            </Button>
          </div>
        </div>
      </section>

      {/* Модалка консультации */}
      {isConsultationModalOpen && (
        <FormaConsultation
          onSubmit={() => {
            handleCloseConsultation();
          }}
          onClose={handleCloseConsultation}
        />
      )}
    </>
  );
};
