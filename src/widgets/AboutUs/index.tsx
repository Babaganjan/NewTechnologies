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
            transition: { staggerChildren: 0.35, delayChildren: 0.1 },
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
            <H level="4" variant="dark">
              мы поставляем системы безопасности и контроля бизнеса по всему казахстану с 2013 года.
            </H>
          </motion.div>
          <motion.div variants={fadeInUp} className="aboutUs__description" id="aboutus-description">
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
