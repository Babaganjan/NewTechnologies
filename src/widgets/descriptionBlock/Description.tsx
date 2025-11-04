import { Button, H } from '@/shared/ui';

import type { DescriptionKey } from './description.const';
import { DESCRIPTION__DATA } from './description.const';
import './description.scss';

export const Description = ({ type }: { type: DescriptionKey }) => {
  const data = DESCRIPTION__DATA[type];

  return (
    <section className="description">
      <div className="description__container container">
        <div className="description__title-wrapper">
          <div className="description__title">
            <H level="2">Описание</H>
          </div>
          <H level="4" className="description__subtitle">
            <span>{data.highlightTitle}</span>
            {data.title}
          </H>
        </div>
        <div className="description__wrapper">
          <div className="description__title-description">
            <p className="description__title-one">{data.subtitleOne}</p>
            <p className="description__title-two">{data.subtitleTwo}</p>
          </div>
          <div className="description-button-container">
            <Button variant="description" icon className="description-button">
              Заказать услугу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
