import Image from 'next/image';

import { H } from '@/shared/ui';

import './AboutUs.scss';

export const AboutUs = () => {
  return (
    <section className="aboutUs">
      <div className="aboutUs-container container">
        <div className="aboutUs__title">
          <H level="2" variant="dark">
            О нас
          </H>
        </div>
        <div className="aboutUs__wrapper-container">
          <div className="aboutUs__subtitle">
            <H level="4" variant="dark">
              мы поставляем системы безопасности и контроля бизнеса по всему казахстану с 2013 года.
            </H>
          </div>
          <div className="aboutUs__description">
            <p>
              С 2022 года развиваем собственное оборудование под брендом NTouch. Мы выпускаем камеры
              видеонаблюдения, турникеты, серверные шкафы, сетевые коммутаторы и видеорегистраторы.
              <span>
                Наш собственный сервисный центр обеспечивает гарантийное и постгарантийное
                обслуживаниев течение 12 месяцев.
              </span>
            </p>
            <p>
              Производственный цех площадью 1,300 м² позволяет поддерживать стабильные складские
              запасы для оперативных поставок. Все изделия соответствуют требованиям СТ-KZ и
              проходят многоступенчатый контроль качества перед отгрузкой заказчикам.
            </p>
          </div>
          <div className="aboutUs__img-wrapper">
            <Image src="/img/AboutUs.webp" alt="" width={340} height={190} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};
