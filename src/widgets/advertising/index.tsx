'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';

import { H } from '@/shared/ui';

import './_advertising-block.scss';

import { PartnerSlide } from './PartnerSlide';
import { PARTNERS } from './advertising.const';

export const Advertising = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    AutoScroll({
      speed: 3,
      stopOnFocusIn: false,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
      startDelay: 0,
    }),
  ]);

  return (
    <section className="advertising with-trapezoids" aria-labelledby="advertising-title">
      <div className="advertising__container container">
        <H level="2" id="advertising-title" className="advertising__title title">
          Наши партнеры
        </H>

        <div className="advertising__subtitle-wrapper">
          <H level="3" className="advertising__subtitle">
            <span className="advertising__subtitle-line1">
              Работаем с лидерами <span className="advertising__subtitle-desktop-word">рынка</span>
            </span>
            <span className="advertising__subtitle-line2">
              <span className="advertising__subtitle-mobile-word">рынка </span>
              из <span className="advertising__subtitle--break">отрасли</span>
            </span>
          </H>
        </div>

        <div className="continuous-scroll-container" ref={emblaRef}>
          <div className="continuous-scroll-wrapper">
            {PARTNERS.map((slide) => (
              <PartnerSlide
                key={slide.id}
                id={slide.id}
                component={slide.component}
                name={slide.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
