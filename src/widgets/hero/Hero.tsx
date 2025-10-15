'use client';
import { usePathname } from 'next/navigation';

import { Heading } from '@/shared/ui/Heading';
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
          <Heading level={1} className="heading">
            <HeadingComponent />
          </Heading>
        )}
        <div className="hero__content flex">
          <Heading level={2} className="hero__title title">
            Мы&nbsp;предлагаем
          </Heading>
          <p className="hero__prev">
            инновационные решения для обеспечения безопасности: системы видеонаблюдения,
            охранно-пожарная сигнализация, пожаротушение, контроль доступа и&nbsp;системы
            оповещения.
          </p>
        </div>
        <Heading level={3} className="hero__subtitle subtitle">
          Безопасность&nbsp;нового поколения
        </Heading>
      </div>
    </section>
  );
};
