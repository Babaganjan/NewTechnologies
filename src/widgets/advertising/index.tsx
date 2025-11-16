import { H } from '@/shared/ui';
import './_advertising-block.scss';

import { PARTNERS } from './advertising.const';

export const Advertising = () => {
  return (
    <section className="advertising with-trapezoids" aria-labelledby="advertising-title">
      <div className="advertising__container container">
        <H level={'2'} id="advertising-title" className="advertising__title title">
          Наши партнеры
        </H>
        <div className="advertising__subtitle-wrapper">
          <H level={'3'} className="advertising__subtitle">
            <span className="advertising__subtitle-line1">
              Работаем с лидерами <span className="advertising__subtitle-desktop-word">рынка</span>
            </span>
            <span className="advertising__subtitle-line2">
              <span className="advertising__subtitle-mobile-word">рынка </span>
              из <span className="advertising__subtitle--break">отрасли</span>
            </span>
          </H>
        </div>
        <div className="continuous-scroll-container">
          <div className="continuous-scroll-wrapper">
            {PARTNERS.map((slide) => {
              const PartnerComponent = slide.component;

              return (
                <div key={slide.id} className="continuous-slide">
                  <PartnerComponent />
                </div>
              );
            })}
            {PARTNERS.map((slide) => {
              const PartnerComponent = slide.component;

              return (
                <div key={`duplicate-${slide.id}`} className="continuous-slide">
                  <PartnerComponent />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
