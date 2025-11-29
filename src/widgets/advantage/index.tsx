import { H } from '@/shared/ui';

import type { AdvantageKeyType } from './advantage.const';
import { ADVANTAGEALL } from './advantage.const';

import './Advantage.scss';

export const Advantage = ({ type }: { type: AdvantageKeyType }) => {
  const AdvantageData = ADVANTAGEALL[type];

  const listId = `advantage-list-${type.toLowerCase()}`;
  const titleId = `advantage-title-${type.toLowerCase()}`;

  return (
    <section className="advantage" aria-labelledby={titleId}>
      <div className="advantage__container container">
        <div className="advantage__title">
          <H level="2" variant="light" id={titleId}>
            Преимущества
          </H>
        </div>
        <ul className="advantage__list" id={listId} aria-label="Список преимуществ">
          {AdvantageData.map((item, index) => (
            <li
              className={`advantage__item advantage__item--pos-${index + 1}`}
              key={`${type}-advantage-${index}`}
            >
              <h3>{item.title}</h3>
              <data value={index + 1} className="advantage__item-number" aria-hidden="true">
                [0{index + 1}]
              </data>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
