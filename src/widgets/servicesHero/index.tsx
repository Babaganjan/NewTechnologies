import { ServicesHeading } from '@/shared/icons';
import { H } from '@/shared/ui';
import './_servicesHero.scss';

export const ServicesHero = () => {
  return (
    <section className="services-hero" data-header-theme="dark">
      <div className="services-hero__container container">
        <div className="services-hero__video-in-container">
          <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
            <source src="/video/service-video-1920.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="wrapper-title">
        <H level={'1'} className="heading">
          <ServicesHeading />
        </H>
      </div>
    </section>
  );
};
