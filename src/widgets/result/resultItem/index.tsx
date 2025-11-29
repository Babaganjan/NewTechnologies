import type { ResultItem as ResultItemType } from '@/widgets/result/Result.types';
import './_resultItem.scss';

interface ResultItemProps {
  item: ResultItemType;
}

export const ResultItem = ({ item }: ResultItemProps) => {
  const { type, number, title, description, className = '', layout = {} } = item;

  const isNumericAchievement = type !== 'text' && number;

  return (
    <li className={`result__item ${className} ${layout.item || ''}`}>
      <div className={`item__inner ${layout.inner || ''}`}>
        {isNumericAchievement && (
          <data value={number.replace(/\D/g, '')} className={`item__number ${layout.number || ''}`}>
            {number}
          </data>
        )}

        <h3 className={`item__title ${layout.title || ''}`}>{title}</h3>

        {description && <p className={`item__prev ${layout.description || ''}`}>{description}</p>}
      </div>
    </li>
  );
};
