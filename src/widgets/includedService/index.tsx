'use client';

import type { ServiceTypeKey } from '@/shared/types/service.types';
import { H } from '@/shared/ui';

import { INCLUDEDSERVICE__ALL } from './includedService.const';

import './includedService.scss';

export const IncludedService = ({ type }: { type: ServiceTypeKey }) => {
  const data = INCLUDEDSERVICE__ALL[type];

  return (
    <section className="includedService">
      <div className="includedService__container container">
        <div className="includedService__titleAndSubtitle-container">
          <div className="includedService__title">
            <H level="2" variant="dark">
              Что вы получаете
            </H>
          </div>
          <div className="includedService__subtitle">
            <H level="3">6 ПРИЧИН ДОВЕРИТЬСЯ НАМ</H>
          </div>
        </div>

        <ul className="includedService__list">
          {data.map((item) => (
            <li className="includedService__item" key={item.title}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
