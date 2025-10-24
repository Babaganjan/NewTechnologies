import { ResultItem } from '@/shared/ui/resultItem/ResultItem';
import type { ResultListProps } from '@/shared/ui/types/Result.types';
import './_resultList.scss';

export const ResultList = ({ items }: ResultListProps) => {
  return (
    <ul className="result__list flex">
      {items.map((item) => (
        <ResultItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
