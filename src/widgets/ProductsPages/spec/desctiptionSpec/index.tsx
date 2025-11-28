import type { descriptionItem } from '@/shared/types/products.types';
import { H } from '@/shared/ui';

export const DescriptiosSpec = ({ item }: { item: descriptionItem }) => {
  return (
    <section className="descriptionsSpec">
      <div className="container">
        <div className="descriptionsSpec__container-wrapper">
          <div className="descriptionsSpec__title">
            <H level="2" variant="dark">
              Описание
            </H>
          </div>
          <div className="descriptionsSpec__text-wrapper">
            <p>{item.title1}</p>
            <p>{item.title2}</p>
            <p>{item.title3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
