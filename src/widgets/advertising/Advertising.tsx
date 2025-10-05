import './_advertising-block.scss';
import { PARTNERS } from './advertising.const';

export const Advertising = () => {
  return (
    <section
      className="advertising with-top-trapezoid with-bottom-trapezoid"
      aria-labelledby="advertising-title"
    >
      <div className="advertising__container container">
        <h2 id="advertising-title" className="advertising__title">
          Наши партнеры
        </h2>
        <div className="advertising__subtitle-container">
          <h3 className="advertising__subtitle">
            Работаем с лидерами
            <span>
              рынка из <span className="advertising__subtitle--break">отрасли</span>
            </span>
          </h3>
        </div>
        <div className="continuous-scroll-container">
          <div className="continuous-scroll-wrapper">
            {PARTNERS.map((slide) => {
              const PartnerComponent = slide.component;

              return (
                <div key={slide.id} className="continuous-slide">
                  <PartnerComponent />
                  <div className="advertising__decoration" aria-hidden="true"></div>
                </div>
              );
            })}
            {PARTNERS.map((slide) => {
              const PartnerComponent = slide.component;

              return (
                <div key={`duplicate-${slide.id}`} className="continuous-slide">
                  <PartnerComponent />
                  <div className="advertising__decoration" aria-hidden="true"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
