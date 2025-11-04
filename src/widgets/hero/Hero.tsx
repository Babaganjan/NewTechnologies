// 'use client';
// import dynamic from 'next/dynamic';

import { HomeHeading } from '@/shared/icons';
import { H } from '@/shared/ui';
import './_hero.scss';

// const HomeHeading = dynamic(() => import('@/shared/icons/HomeHeading/HomeHeading'), {
//   ssr: false, // Отключает SSR
//   loading: () => <div>Loading...</div>, // Опционально: плейсхолдер во время загрузки
// });

export const Hero = () => {
  return (
    <section className="hero with-trapezoids">
      <div className="container hero__container flex">
        <video autoPlay muted loop playsInline className="hero__video hero__video--mobile">
          <source src="/video/hero-video-360.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop playsInline className="hero__video hero__video--tablet">
          <source src="/video/hero-video-768.mp4" type="video/mp4" />
        </video>
        <video autoPlay muted loop playsInline className="hero__video--desktop">
          <source src="/video/hero-video-1920.mp4" type="video/mp4" />
        </video>
        <H level={'1'} className="heading">
          <HomeHeading />
        </H>
        <div className="hero__content flex">
          <H level={'2'} className="hero__title title">
            Мы предлагаем
          </H>
          <p className="hero__prev">
            инновационные решения для обеспечения безопасности: системы видеонаблюдения,
            охранно-пожарная сигнализация, пожаротушение, контроль доступа и системы оповещения.
          </p>
        </div>
        <H level={'3'} className="hero__subtitle subtitle">
          Безопасность&nbsp;нового поколения
        </H>
      </div>
    </section>
  );
};
