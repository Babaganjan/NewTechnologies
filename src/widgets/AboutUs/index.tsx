'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeInUp, slideInLeft } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

import './AboutUs.scss';

export const AboutUs = () => {
  return (
    <section
      className="aboutUs"
      aria-labelledby="aboutus-heading"
      aria-describedby="aboutus-description"
    >
      <motion.div
        className="aboutUs-container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        <motion.div variants={fadeInUp} className="aboutUs__title">
          <H level="2" variant="dark" id="aboutus-heading">
            О нас
          </H>
        </motion.div>
        <div className="aboutUs__wrapper-container">
          <motion.div variants={fadeInUp} className="aboutUs__subtitle">
            <h3>Мы поставляем системы безопасности по всему Казахстану с 2013 года.</h3>
          </motion.div>
          <motion.div variants={fadeInUp} className="aboutUs__description" id="aboutus-description">
            <p>
              Мы работаем в сфере систем безопасности с 2013 года и реализуем проекты любого
              масштаба — от частных объектов до инфраструктуры республиканского значения. В нашей
              компании трудится более 150 специалистов, включая инженеров, проектировщиков,
              монтажные бригады и команду технической поддержки.
              <span>
                Мы представлены в Алматы, Астане и Таразе, что позволяет оперативно работать с
                корпоративными и государственными заказчиками по всей стране. Сотрудники проходят
                регулярное обучение и повышение квалификации, а стандарты качества и сервиса
                совершенствуются на постоянной основе.
              </span>
            </p>
            <p>
              С 2022 года мы развиваем собственное производство оборудования под брендом NTOUCH. Мы
              производим камеры видеонаблюдения, серверные шкафы, турникеты, PoE-коммутаторы,
              терминалы доступа, контроллеры, видеорегистраторы и собственное ПО.
              <span>
                Наш производственный цех площадью 1 300 <abbr title="квадратных метров">м²</abbr>{' '}
                обеспечивает выпуск продукции с уровнем локализации до 60%. Мы являемся призёрами
                конкурса «Лучший товар Казахстана» и обладателями почётного звания «Лидер отрасли –
                2020».
              </span>
              <span>
                Все изделия соответствуют требованиям СТ-KZ и проходят многоступенчатый контроль
                качества перед отгрузкой заказчикам. Собственные склады и логистическая
                инфраструктура позволяют поддерживать стабильные запасы оборудования и обеспечивать
                своевременные поставки. Сервисный центр осуществляет гарантийную и постгарантийную
                поддержку.
              </span>
            </p>
          </motion.div>
          <motion.figure
            variants={slideInLeft}
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
          </motion.figure>
        </div>
      </motion.div>
    </section>
  );
};
