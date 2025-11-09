import Image from 'next/image';

import { Breadcrumbs, H } from '@/shared/ui';

import './heroService.scss';

export type HeroServiceType =
  | 'notificationSystem'
  | 'accessControl'
  | 'videoSurveillance'
  | 'fireSuppression'
  | 'fireAlarm';

export const HeroService = ({ title, type }: { title: string; type: HeroServiceType }) => {
  return (
    <section className="heroService">
      <Breadcrumbs />
      <div className="heroService__container container">
        <div className="heroService__title">
          <H level="3">{title}</H>
        </div>
        <div className="heroService__img">
          <Image
            src={`/img/heroService/${type}.webp`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};
