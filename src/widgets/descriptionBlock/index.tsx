'use client';
import useModal from '@/hooks/useModal';
import { Button, H } from '@/shared/ui';

import { FormaConsultation } from '../forma';

import type { DescriptionTypeKey } from './description.const';
import { DESCRIPTION__DATA } from './description.const';

import './description.scss';

export const Description = ({ type }: { type: DescriptionTypeKey }) => {
  const { isConsultationModalOpen, handleOpenConsultation, handleCloseConsultation } = useModal({
    initialValue: false,
  });
  const data = DESCRIPTION__DATA[type];

  return (
    <>
      <section className="description">
        <div className="description__container container">
          <div className="description__title-wrapper">
            <div className="description__title">
              <H level="2">Описание</H>
            </div>

            <h3 className="description__subtitle">
              {data.highlightTitle && <span>{data.highlightTitle}</span>}
              {data.title}
            </h3>
          </div>
          <div className="description__wrapper">
            <div className="description__title-description">
              <p className="description__title-one">{data.subtitleOne}</p>
              <p className="description__title-two">{data.subtitleTwo}</p>
            </div>
            <div className="description-button-container">
              <Button
                variant="description"
                icon
                className="description-button"
                onClick={handleOpenConsultation}
              >
                Заказать услугу
              </Button>
            </div>
          </div>
        </div>
      </section>
      {isConsultationModalOpen && (
        <FormaConsultation onSubmit={handleCloseConsultation} onClose={handleCloseConsultation} />
      )}
    </>
  );
};
