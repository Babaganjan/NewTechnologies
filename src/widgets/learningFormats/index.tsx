import useModal from '@/hooks/useModal';
import { Button, H } from '@/shared/ui';

import { FormaConsultation } from '../forma';
import './learningFormats.scss';

export const LearningFormats = () => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });

  return (
    <>
      <section className="learning">
        <div className="learning__container container">
          <div className="learning-title">
            <H level="2" variant="light">
              Форматы обучения
            </H>
          </div>
          <div className="learning-card-wrapper">
            <article className="learning-card">
              <div className="learning-card__title-container">
                <h3 className="learning-card__title">Для официальных партнеров</h3>
                <p className="learning-card__subtitle learning-card__subtitle--mobile">
                  Обучение для наших партнеров предоставляется на <span>безвозмездной основе</span>.
                </p>
              </div>
              <p className="learning-card__subtitle learning-card__subtitle--desctop">
                Обучение для наших партнеров предоставляется на <span>безвозмездной основе</span>.
              </p>
              <div className="learning__button">
                <Button variant="feedback" icon onClick={handleOpenConsultation}>
                  Заказать услугу
                </Button>
              </div>
            </article>
            <article className="learning-card">
              <div className="learning-card__title-container">
                <h3 className="learning-card__title">Для специалистов и всех желающих</h3>
                <p className="learning-card__subtitle learning-card__subtitle--mobile">
                  Платные программы для развития профессиональных навыков и освоения современных
                  технологий безопасности
                </p>
              </div>
              <p className="learning-card__subtitle learning-card__subtitle--desctop">
                Платные программы для развития профессиональных навыков и освоения современных
                технологий безопасности.
              </p>
              <div className="learning__button">
                <Button variant="feedback" icon onClick={handleOpenConsultation}>
                  Заказать услугу
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
      {isConsultationModalOpen && (
        <FormaConsultation onSubmit={handleCloseConsultation} onClose={handleCloseConsultation} />
      )}
    </>
  );
};
