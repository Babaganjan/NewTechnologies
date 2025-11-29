import Image from 'next/image';

import type { ServiceTypeKey } from '@/shared/types/service.types';
import { H } from '@/shared/ui';

import { STAGESWORKALL } from './StagesWork.const';

import './StagesWork.scss';

export const StagesWork = ({ type }: { type: ServiceTypeKey }) => {
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
              <data value={index + 1} className="stagesWork__item-number">
                {(index + 1).toString().padStart(2, '0')}
              </data>
              <div className="stagesWork__item__container">
                <div className="stagesWork__item__title-container">
                  {/* <H level="4" variant="dark" className="stagesWork__item-title">
                    {item.title}
                  </H> */}
                  <h3 className="stagesWork__item-title">{item.title}</h3>
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
