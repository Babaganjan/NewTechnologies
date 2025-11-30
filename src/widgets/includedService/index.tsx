import Image from 'next/image';

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
            <H level="3">6 причин довериться нашей системе безопасности</H>
          </div>
        </div>
        <div className="includedService__wrapper">
          <div className="includedService__logo-wrapper">
            <div className="includedService__logo">
              <span>NT</span>
            </div>
          </div>
          <div className="includedService__img">
            <Image
              src="/img/IncludeService.webp"
              alt="Что вы получаете"
              fill
              sizes="(max-width: 768px) 100vw, 728px"
            />
          </div>
          <ul className="includedService__list">
            {data.map((item, index) => (
              <li className="includedService__item" key={item.title} data-index={index + 1}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
