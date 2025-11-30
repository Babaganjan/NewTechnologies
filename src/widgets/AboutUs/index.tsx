import Image from 'next/image';

import { H } from '@/shared/ui';

import './AboutUs.scss';

export const AboutUs = () => {
  return (
    <section
      className="aboutUs"
      aria-labelledby="aboutus-heading"
      aria-describedby="aboutus-description"
    >
      <div className="aboutUs-container container">
        <div className="aboutUs__title">
          <H level="2" variant="dark" id="aboutus-heading">
            О нас
          </H>
        </div>
        <div className="aboutUs__wrapper-container">
          <div className="aboutUs__subtitle">
            <H level="4" variant="dark">
              мы поставляем системы безопасности и контроля бизнеса по всему казахстану с 2013 года.
            </H>
          </div>
          <div className="aboutUs__description" id="aboutus-description">
            <p>
              С 2022 года развиваем собственное оборудование под брендом{' '}
              <abbr title="NTOUCH - собственный бренд оборудования систем безопасности">
                NTOUCH
              </abbr>
              . Мы выпускаем камеры видеонаблюдения, турникеты, серверные шкафы, сетевые коммутаторы
              и видеорегистраторы.
              <span>
                Наш собственный сервисный центр обеспечивает гарантийное и постгарантийное
                обслуживание в течение 12 месяцев.
              </span>
            </p>
            <p>
              Производственный цех площадью 1,300 <abbr title="квадратных метров">м²</abbr>{' '}
              позволяет поддерживать стабильные складские запасы для оперативных поставок. Все
              изделия соответствуют требованиям <abbr title="Стандарт Казахстана">СТ-KZ</abbr> и
              проходят многоступенчатый контроль качества перед отгрузкой заказчикам.
            </p>
          </div>
          <figure
            className="aboutUs__img-wrapper"
            role="group"
            aria-label="Производственное помещение"
          >
            <Image
              src="/img/AboutUs.webp"
              alt="Производственный цех площадью 1300 квадратных метров с оборудованием для сборки систем безопасности NTOUCH"
              width={340}
              height={190}
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
