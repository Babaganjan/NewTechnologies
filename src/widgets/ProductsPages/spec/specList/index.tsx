import type { SpecItem } from '../spec.types';

export const SpecList = ({ data }: { data: SpecItem[] }) => (
  <ul className="specList-list">
    <li>
      {data.map((item) => (
        <div className="spec-item" key={item.title}>
          <h3 className="spec-item__title">{item.title}</h3>
          <p className="spec-item__subtitle">{item.subtitle}</p>
        </div>
      ))}
    </li>
  </ul>
);
