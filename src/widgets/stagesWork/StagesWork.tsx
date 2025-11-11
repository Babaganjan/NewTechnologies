import Image from 'next/image';

import { H } from '@/shared/ui';

import type { StagesWorkType } from './StagesWork.const';
import { STAGESWORKALL } from './StagesWork.const';
import './StagesWork.scss';

export const StagesWork = ({ type }: { type: StagesWorkType }) => {
  const StagesWorkData = STAGESWORKALL[type];

  return (
    <section className="stagesWork">
      <div className="stagesWork__container container">
        <div className="stagesWork__title">
          <H level="2">Этапы работы</H>
        </div>
        <ul className="stagesWork__list">
          {StagesWorkData.map((item, index) => (
            <li className="stagesWork__item" key={item.id}>
              <span className="stagesWork__item-number">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="stagesWork__item__container">
                <div className="stagesWork__item__title-container">
                  <H level="4" variant="dark" className="stagesWork__item-title">
                    {item.title}
                  </H>
                  <p className="stagesWork__item-subTitle">{item.subTitle}</p>
                </div>
                <div className="stagesWork__item-img">
                  <Image src={item.href} alt={item.title} width={196} height={196} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
