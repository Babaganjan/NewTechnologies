import Image from 'next/image';
import { Fragment } from 'react';

import type { ServiceTypeKey } from '@/shared/types/service.types';
import { H } from '@/shared/ui';

import { CONSULTATIONSERVICE_DATA, CONSULTATIONSERVICE_IMAGES } from './consultationService.const';

import './consultationService.scss';

export const ConsultationService = ({ type }: { type: ServiceTypeKey }) => {
  const data = CONSULTATIONSERVICE_DATA[type];
  const images = CONSULTATIONSERVICE_IMAGES[type];

  return (
    <section className="consultationService">
      <div className="consultationService__container container">
        <div className="consultationService_title-container">
          <div className="consultationService__title">
            <H level="2" variant="light">
              Что входит в услугу
            </H>
          </div>
          <div className="consultationService__subtitle">
            <span>Мы берем на себя все этапы:</span> от консультации до гарантийного обслуживания
          </div>
        </div>
        <div className="consultationService__decoration-container">
          {images.item.map((item, index) => (
            <Fragment key={`${item}-${index}`}>
              <div className={`consultationService__decoration${index + 1}`}>
                <Image src={item} alt="" fill />
              </div>
            </Fragment>
          ))}
        </div>
        <div className="consultationService__lines">
          <span className="line line--vertical"></span>
          <span className="line line--horizontal line--left"></span>
          <span className="line line--horizontal line--right"></span>
          <span className="line line--horizontal line--bottom"></span>
        </div>
        <ul className="consultationService__list">
          {data.item.map((item, index) => (
            <li className="consultationService__item" key={`${index}-${item}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
