import Image from 'next/image';

import { Breadcrumbs } from '@/shared/ui';

import './heroService.scss';
import type { HeroServiceKey } from './heroService.types';

export const HeroService = ({ title, type }: { title: string; type: HeroServiceKey }) => {
  return (
    <section className="heroService">
      <Breadcrumbs />
      <div className="heroService__container container">
        <div className="heroService__title">
          <h1>{title}</h1>
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
