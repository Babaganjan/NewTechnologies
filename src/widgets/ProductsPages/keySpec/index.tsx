import { H } from '@/shared/ui';

import { SpecItem } from './SpecItem';
import { specKeyData } from './keySpec.const';
import './keySpec.scss';
import type { KeySpecsProps } from './keySpec.types';

export const KeySpecs = ({ title = 'Основные характеристики', type }: KeySpecsProps) => {
  const data = specKeyData[type];

  const listClassName = `keySpecs__list keySpecs__list--${data.layout}`;

  return (
    <section className="keySpecs" aria-labelledby="keyspecs-title">
      <div className="container">
        <div className="keySpecs__title">
          <H level="2" variant="dark" id="keyspecs-title">
            {title}
          </H>
        </div>
        <ul className={listClassName}>
          {data.item.map((item, index) => (
            <SpecItem key={item.id} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
