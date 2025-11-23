import clsx from 'clsx';

import type { SpecItem } from '../keySpec.types';

export const getItemClasses = (item: SpecItem, index: number): string => {
  return clsx('keySpecs__item', `keySpecs__item--${index + 1}`, {
    'keySpecs__item--with-subtitle': item.subtitle,
    'keySpecs__item--with-value-layout': item.type === 'big',
    'keySpecs__item--subtitle': item.type === 'subtitle',
    'keySpecs__item--singleValue': item.type === 'singleValue',
    'keySpecs__item--titleEmpty': item.type === 'titleEmpty',
    'keySpecs__item--titleNone': item.type === 'titleNone',
  });
};
