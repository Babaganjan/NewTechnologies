import React from 'react';

import './_resultList.scss';
import { ResultItem } from '@/shared/ui/resultItem/ResultItem';
import type { ResultListProps } from '@/shared/ui/types/Result.types';

export const ResultList: React.FC<ResultListProps> = ({ items }) => {
  return (
    <ul className="result__list flex">
      {items.map((item) => (
        <ResultItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
