import { Arrow } from '@/shared/icons';
import { Heading } from '@/shared/ui/Heading';

import './_services.scss';
import { SERVICES_ITEMS } from './services.const';

export const Services = () => {
  return (
    <section className="services with-top-trapezoid with-bottom-trapezoid">
      <div className="container services__container">
        <div className="services__wrapper-title">
          <Heading level={2} className="services__title title">
            Наши услуги
          </Heading>
        </div>
        <ul className="services__list flex">
          {SERVICES_ITEMS.map((item) => (
            <li className="services__item item" key={item.id}>
              <div className="item__inner flex">
                <Heading level={3} className="item__subtitle subtitle">
                  {item.title}
                </Heading>
                <button className="item__btn">
                  <Arrow color="var(--text-white)" width={25} height={20} />
                </button>
              </div>
            </li>
          ))}
          {/* TODO: swiper */}
        </ul>
      </div>
    </section>
  );
};
