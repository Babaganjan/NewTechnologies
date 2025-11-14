import type { ResultListProps } from '@/widgets/result/Result.types';
import { ResultItem } from '@/widgets/result/resultItem/ResultItem';
import './_resultList.scss';

export const ResultList = ({ items }: ResultListProps) => {
  return (
    <ul className="result__list">
      {items.map((item) => (
        <ResultItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
