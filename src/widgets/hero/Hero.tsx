'use client';
import { usePathname } from 'next/navigation';

import { HEADING_COMPONENTS } from '@/shared/ui/HeadingSvg/heading.const';
import { Heading } from '@/shared/ui/Heading';

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
          <Heading level={1} className="heading">
            <HeadingComponent />
          </Heading>
        )}
        <div className="hero__content flex">
          <Heading level={2} className="hero__title title">
            Мы&nbsp;предлагаем
          </Heading>
          <p className="hero__prev">
            системы видеонаблюдения, пожаротушения, охранно-пожарной сигнализации, скуд
            и&nbsp;оповещения для частых лиц и&nbsp;бизнеса
          </p>
        </div>
        <Heading level={3} className="hero__subtitle subtitle">
          Безопасность&nbsp;нового поколения
        </Heading>
      </div>
    </section>
  );
};
