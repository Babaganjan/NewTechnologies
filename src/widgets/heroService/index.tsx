'use client';
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
          <div className="heroService__decoration" aria-hidden={true}></div>
          <Image
            src={`/img/heroService/${type}.webp`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
            style={{ objectFit: 'cover' }}
            quality={85}
          />
          <div className="heroService__decoration-1" aria-hidden={true}></div>
        </div>
      </div>
    </section>
  );
};
