import Image from 'next/image';

import { H } from '@/shared/ui';

import { CONSULTATIONSERVICE_DATA, type ConsultationServiceKey } from './consultationService.const';
import './consultationService.scss';

export const ConsultationService = ({ type }: { type: ConsultationServiceKey }) => {
  const data = CONSULTATIONSERVICE_DATA[type];

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
          <div className="consultationService__decorationOne">
            <Image src="/img/consultationService/consultation-1.webp" alt="decoration" fill />
          </div>
          <div className="consultationService__decorationTwo">
            <Image src="/img/consultationService/consultation-2.webp" alt="decoration" fill />
          </div>
          <div className="consultationService__decorationThree">
            <Image src="/img/consultationService/consultation-1.webp" alt="decoration" fill />
          </div>
          <div className="consultationService__decorationFour">
            <Image src="/img/consultationService/consultation-3.webp" alt="decoration" fill />
          </div>
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
