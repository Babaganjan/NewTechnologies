import Image from 'next/image';

import { Button, H } from '@/shared/ui';

import './_about.scss';

export const About = () => {
  return (
    <section className="about" aria-labelledby="Что-мы-делаем">
      <div className="container about__container flex">
        <H level={'2'} variant="light" className="about__title title" id="Что-мы-делаем">
          Что мы делаем
        </H>
        <H level={'3'} variant="light" className="about__subtitle subtitle">
          <span>реализуем комплексные системы</span> безопасности и оптимизируем бизнес в казахстане
          <span> С 2013 года</span>
        </H>
        <div className="about__images flex">
          <div className="about__images--top">
            <div className="image__wrapper image__big">
              <span className="decor-bottom-right"></span>
              <Image src="/img/about-1-1920.webp" alt="Картинка камеры" width={340} height={254} />
            </div>
          </div>
          <div className="about__images--bottom flex">
            <div className="image__wrapper image__small-top">
              <span className="decor-bottom-right"></span>
              <Image
                src="/img/about-2-1920.webp"
                alt="Картинка камеры"
                width={168}
                height={134}
                sizes="(max-width: 1023px) 168px, 447px"
              />
            </div>
            <div className="image__wrapper image__small-bottom">
              <span className="decor-bottom-right"></span>
              <Image src="/img/about-3-1920.webp" alt="Картинка камеры" width={168} height={134} />
            </div>
          </div>
        </div>
        <div className="about__text-wrapper">
          <div className="about__prevs-wrapper flex">
            <p className="about__desc">
              Мы фокусируемся на государственных, промышленных и стратегически важных объектах. А
              также обеспечиваем защиту частных школ, жилых комплексов и частных домов.
            </p>
            <p className="about__desc">
              Как лидер отрасли, мы разрабатываем и производим собственное оборудование под брендом
              NTouch, имеющее все необходимые сертификаты качества и соответствия.
            </p>
          </div>
          <Button className="about__btn" icon>
            О компании
          </Button>
        </div>
      </div>
    </section>
  );
};
