import { Heading } from '@/shared/ui/Heading';
import { HomeHeading } from '@/shared/ui/HeadingSvg/HomeHeading';

import './_hero.scss';

export const Hero = () => {
  return (
    <section className="hero with-bottom-trapezoid">
      <div className="container hero__container flex">
        <Heading level={1} className="heading">
          <HomeHeading />
        </Heading>
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
