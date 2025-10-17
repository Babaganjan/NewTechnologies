'use client';
import { useState } from 'react';

import { Arrow } from '@/shared/icons';
import { H } from '@/shared/ui';

import './_services.scss';
import { SliderServices } from './../../features/slider/SliderServices';
import { SERVICES_ITEMS } from './services.const';

export const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleSlider = (id: number) => {
    if (activeService === id) {
      setActiveService(null);
    } else {
      setActiveService(id);
    }
  };

  return (
    <section className="services with-trapezoids">
      <div className="container services__container">
        <div className="services__wrapper-title">
          <H level={'2'} className="services__title title">
            Наши услуги
          </H>
        </div>
        <ul className="services__list flex">
          {SERVICES_ITEMS.map((item) => (
            <li className="services__item item" key={item.id}>
              <div className="item__inner flex">
                <H level={'3'} className="item__subtitle subtitle">
                  {item.title}
                </H>
                <button
                  className={`item__btn ${activeService === item.id ? 'active' : ''}`}
                  onClick={() => toggleSlider(item.id)}
                  aria-label={`Показать слайдер для ${item.title}`}
                >
                  <Arrow color="var(--text-white)" width={25} height={20} />
                </button>
              </div>
              {activeService === item.id && (
                <div className="services__slider-wrapper">
                  <SliderServices serviceId={item.id} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
