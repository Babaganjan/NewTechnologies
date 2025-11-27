import type { TextItem } from '@/shared/types/products.types';

export const SpecList = ({ data }: { data: TextItem[] }) => (
  <dl className="specList-list">
    <div>
      {data.map((item) => (
        <div className="spec-item" key={item.title}>
          <dt className="spec-item__title">{item.title}</dt>
          <dd className="spec-item__subtitle">{item.subtitle}</dd>
        </div>
      ))}
    </div>
  </dl>
);
