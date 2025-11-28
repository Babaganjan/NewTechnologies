// components/FeedbackMenu/FeedbackMenu.tsx
'use client';
import useModal from '@/hooks/useModal';
import { Button, H } from '@/shared/ui';
import { FormaConsultation } from '@/widgets';
import './_feedback-menu.scss';

export const FeedbackMenu = () => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });

  return (
    <>
      <section className="feedback-menu" aria-labelledby="feedback-menu-title">
        <div className="feedback-menu__wrapper container">
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
