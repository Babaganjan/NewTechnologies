import './keySpec.scss';
import type { SpecItem } from './keySpec.types';

interface KeySpecsProps {
  title?: string;
  items: SpecItem[];
}

export const KeySpecs = ({ title = 'Основные характеристики', items = [] }: KeySpecsProps) => {
  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
        <div>
          {items.map((item) => (
            <div key={item.id}>gfeg</div>
          ))}
        </div>
      </div>
    </section>
  );
};
