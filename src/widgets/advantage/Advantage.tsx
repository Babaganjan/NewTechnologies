import { H } from '@/shared/ui';

import type { AdvantageWorkType } from './advantage.const';
import { ADVANTAGEALL } from './advantage.const';

import './Advantage.scss';

export const Advantage = ({ type }: { type: AdvantageWorkType }) => {
  const AdvantageData = ADVANTAGEALL[type];

  return (
    <section className="advantage">
      <div className="advantage__container container">
        <div className="advantage__title">
          <H level="2" variant="light">
            Преимущества
          </H>
        </div>
        <ul className="advantage__list">
          {AdvantageData.map((item, index) => (
            <li className={`advantage__item advantage__item--pos-${index + 1}`} key={item.title}>
              <div className="advantage__item-decoration"></div>
              <H level="5" variant="light">
                {item.title}
              </H>
              <span className="advantage__item-number">[0{index + 1}]</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
