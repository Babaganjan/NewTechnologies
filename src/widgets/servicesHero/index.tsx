import { ServicesHeading } from '@/shared/icons';
import { H } from '@/shared/ui';
import './_servicesHero.scss';

export const ServicesHero = () => {
  return (
    <section className="services-hero">
      <div className="services-hero__container container">
        <div className="services-hero__video-in-container">
          <video
            className="services-hero__video services-hero__video--mobile"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/video/camera-scan-360.mp4" type="video/mp4" />
          </video>
          <video
            className="services-hero__video services-hero__video--tablet"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/video/camera-scan-768.mp4" type="video/mp4" />
          </video>
          <video
            className="services-hero__video services-hero__video--desktop"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/video/camera-scan-1920.mp4" type="video/mp4" />
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
