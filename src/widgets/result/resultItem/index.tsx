import { H } from '@/shared/ui';
import type { ResultItem as ResultItemType } from '@/widgets/result/Result.types';
import './_resultItem.scss';

interface ResultItemProps {
  item: ResultItemType;
}

export const ResultItem = ({ item }: ResultItemProps) => {
  const { type, number, title, description, variant = 'dark', className = '', layout = {} } = item;

  return (
    <li className={`result__item ${className} ${layout.item || ''}`}>
      <article className={`item__inner ${layout.inner || ''}`}>
        {type !== 'text' && number && (
          <strong className={`item__number ${layout.number || ''}`}>{number}</strong>
        )}

        <H level={'4'} className={`item__title ${layout.title || ''}`} variant={variant}>
          {title}
        </H>

        {description && <p className={`item__prev ${layout.description || ''}`}>{description}</p>}
      </article>
    </li>
  );
};
