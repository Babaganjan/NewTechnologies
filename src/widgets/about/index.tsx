import Image from 'next/image';

import { Button, H } from '@/shared/ui';

import './_about.scss';

export const About = () => {
  return (
    <section className="about" aria-labelledby="about-heading" aria-describedby="about-description">
      <div className="container about__container">
        {/* Основной заголовок секции */}
        <H level={'2'} variant="light" className="about__title title" id="about-heading">
          Что мы делаем
        </H>

        {/* Подзаголовок с правильной семантикой */}
        <H level={'3'} variant="light" className="about__subtitle subtitle">
          <span aria-label="реализуем комплексные системы">реализуем комплексные системы</span>{' '}
          безопасности и оптимизируем бизнес в казахстане{' '}
          <span aria-label="С 2013 года">С 2013 года</span>
        </H>

        {/* Группа изображений с описательной ролью */}
        <div className="about__images" role="group" aria-label="Фотографии систем безопасности">
          <div className="about__images--top">
            <div className="image__wrapper image__big">
              <Image
                src="/img/about-1-1920.webp"
                alt="Современная система видеонаблюдения с камерами высокого разрешения, установленная на промышленном объекте"
                width={340}
                height={254}
                loading="lazy"
              />
            </div>
          </div>
          <div className="about__images--bottom">
            <div className="image__wrapper image__small-top">
              <Image
                src="/img/about-2-1920.webp"
                alt="Купольная камера видеонаблюдения с инфракрасной подсветкой для ночной съемки"
                width={168}
                height={134}
                loading="lazy"
              />
            </div>
            <div className="image__wrapper image__small-bottom">
              <Image
                src="/img/about-3-1920.webp"
                alt="Панель управления системой безопасности с датчиками и индикаторами"
                width={168}
                height={134}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Текстовый контент с правильной структурой */}
        <div className="about__text-wrapper">
          <div className="about__prevs-wrapper" id="about-description">
            <p className="about__desc">
              Мы фокусируемся на государственных, промышленных и стратегически важных объектах. А
              также обеспечиваем защиту частных школ, жилых комплексов и частных домов.
            </p>
            <p className="about__desc">
              Как лидер отрасли, мы разрабатываем и производим собственное оборудование под брендом
              <abbr title="NTOUCH" aria-label="Эн Тач">
                {' '}
                NTOUCH
              </abbr>
              , имеющее все необходимые сертификаты качества и соответствия.
            </p>
          </div>
          <Button
            variant="primaryLink"
            className="about__btn"
            icon
            href="/about"
            aria-label="Узнать больше о компании и наших услугах"
          >
            О компании
          </Button>
        </div>
      </div>
    </section>
  );
};
