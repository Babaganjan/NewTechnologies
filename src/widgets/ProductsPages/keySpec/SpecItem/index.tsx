'use client';
import { AnimatedCard } from '@/shared/animations/AnimatedCard';
import type { KeySpecItem } from '@/shared/types/products.types';

import { getItemClasses } from '../utils/getItemClasses';

export const SpecItem = ({ item, index }: { item: KeySpecItem; index: number }) => {
  const itemClasses = getItemClasses(item, index);

  return (
    <AnimatedCard className={itemClasses} enableHover={false}>
      {item.title && <h3 className="keySpecs__item-title">{item.title}</h3>}

      {item.value && (
        <div className="keySpecs__item-wrapper" aria-label="Значение характеристики">
          <p className="keySpecs__item-value">{item.value}</p>
          {item.unit && <span className="keySpecs__item-unit">{item.unit}</span>}
        </div>
      )}

      {item.description && <p className="keySpecs__item-description">{item.description}</p>}
      {item.subtitle && <p className="keySpecs__item-description">{item.subtitle}</p>}
    </AnimatedCard>
  );
};
