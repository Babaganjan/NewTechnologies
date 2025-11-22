import clsx from 'clsx';

import { H } from '@/shared/ui';

import { specKeyData } from './keySpec.const';
import './keySpec.scss';
import type { KeySpecsProps } from './keySpec.types';

export const KeySpecs = ({ title = 'Основные характеристики', type }: KeySpecsProps) => {
  const data = specKeyData[type];

  return (
    <section className="keySpecs">
      <div className="container">
        <div className="keySpecs__title">
          <H level="2" variant="dark">
            {title}
          </H>
        </div>
        <ul className={`keySpecs__list keySpecs__list--${data.layout}`}>
          {data.item.map((item, index) => (
            <li
              key={item.id}
              className={clsx(
                `keySpecs__item keySpecs__item--${index + 1}`,
                item.subtitle && 'keySpecs__item--with-subtitle',
                item.type === 'big' && 'keySpecs__item--with-value-layout',
                item.type === 'subtitle' && 'keySpecs__item--subtitle',
                item.type === 'singleValue' && 'keySpecs__item--singleValue',
                item.type === 'titleEmpty' && 'keySpecs__item--titleEmpty',
                item.type === 'titleNone' && 'keySpecs__item--titleNone'
              )}
            >
              {item.title && <h3 className="keySpecs__item-title">{item.title}</h3>}

              {item.value && (
                <div className="keySpecs__item-wrapper">
                  <p className="keySpecs__item-value">{item.value}</p>
                  <span className="keySpecs__item-unit">{item.unit}</span>
                </div>
              )}

              {item.description && <p className="keySpecs__item-description">{item.description}</p>}
              {item.subtitle && <p className="keySpecs__item-description">{item.subtitle}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
