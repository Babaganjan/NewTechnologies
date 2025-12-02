'use client';

import { AnimatedList } from '@/shared/animations/AnimatedList';
import type { ResultListProps } from '@/widgets/result/Result.types';
import { ResultItem } from '@/widgets/result/resultItem';
import './_resultList.scss';

export const ResultList = ({ items }: ResultListProps) => {
  return (
    <AnimatedList className="result__list">
      {items.map((item, index) => (
        <ResultItem key={item.id} item={item} index={index} />
      ))}
    </AnimatedList>
  );
};
