import { H } from '@/shared/ui';
import { HomeHeading } from '@/shared/ui/HeadingSvg/HomeHeading';
import './_hero.scss';

export const Hero = () => {
  return (
    <section className="hero with-bottom-trapezoid">
      <div className="container hero__container flex">
        <H level={'1'} className="heading">
          <HomeHeading />
        </H>
        <div className="hero__content flex">
          <H level={'2'} className="hero__title title">
            Мы&nbsp;предлагаем
          </H>
          <p className="hero__prev">
            инновационные решения для обеспечения безопасности: системы видеонаблюдения,
            охранно-пожарная сигнализация, пожаротушение, контроль доступа и&nbsp;системы
            оповещения.
          </p>
        </div>
        <H level={'3'} className="hero__subtitle subtitle">
          Безопасность&nbsp;нового поколения
        </H>
      </div>
    </section>
  );
};
