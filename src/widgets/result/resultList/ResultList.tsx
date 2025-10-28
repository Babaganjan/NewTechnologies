import type { ResultListProps } from '@/shared/ui/types/Result.types';
import { ResultItem } from '@/widgets/result/resultItem/ResultItem';
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
