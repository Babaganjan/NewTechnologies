import type { KeySpecItem, KeySpecLayout } from '@/shared/types/products.types';
import { H } from '@/shared/ui';

import { SpecItem } from './SpecItem';

interface KeySpecsProps {
  title?: string;
  layout: KeySpecLayout;
  items: KeySpecItem[];
}

export const KeySpecs = ({ title = 'Основные характеристики', layout, items }: KeySpecsProps) => {
  const listClassName = `keySpecs__list keySpecs__list--${layout}`;

  return (
    <section className="keySpecs" aria-labelledby="keyspecs-title">
      <div className="container">
        <div className="keySpecs__title">
          <H level="2" variant="dark" id="keyspecs-title">
            {title}
          </H>
        </div>
        <ul className={listClassName}>
          {items.map((item, index) => (
            <SpecItem key={item.id} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};
