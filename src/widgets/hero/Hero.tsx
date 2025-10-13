'use client';
import { usePathname } from 'next/navigation';

import { HEADING_COMPONENTS } from '@/shared/ui/HeadingSvg/heading.const';

import './_hero.scss';

export const Hero = () => {
  const pathname = usePathname();
  const HeadingComponent =
    pathname && HEADING_COMPONENTS
      ? HEADING_COMPONENTS[pathname as keyof typeof HEADING_COMPONENTS]
      : null;

  return (
    <section className="hero with-bottom-trapezoid">
      <div className="container hero__container flex">
        {HeadingComponent && (
          <h1 className="heading">
            <HeadingComponent />
          </h1>
        )}
        <div className="hero__content flex">
          <h2 className="hero__title title">Мы&nbsp;предлагаем</h2>
          <p className="hero__prev">
            системы видеонаблюдения, пожаротушения, охранно-пожарной сигнализации, скуд
            и&nbsp;оповещения для частых лиц и&nbsp;бизнеса
          </p>
        </div>
        <h3 className="hero__subtitle subtitle">Безопасность&nbsp;нового поколения</h3>
      </div>
    </section>
  );
};
