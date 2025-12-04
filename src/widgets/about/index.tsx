'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeInUp, slideInLeft } from '@/shared/animations/scroll-animations';
import { Button, H } from '@/shared/ui';

import './_about.scss';

export const About = () => {
  return (
    <section className="about" aria-labelledby="about-heading">
      <motion.div
        className="container about__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
          },
        }}
      >
        <motion.div variants={fadeInUp}>
          <H level={'2'} variant="light" className="about__title title" id="about-heading">
            Что мы делаем
          </H>
        </motion.div>

        <motion.div className="about__subtitle subtitle" variants={fadeInUp}>
          <H level={'3'} variant="light">
            <span>реализуем комплексные системы</span> безопасности и оптимизируем бизнес в
            казахстане <span>С 2013 года</span>
          </H>
        </motion.div>

        <figure className="about__images">
          <div className="about__images--top">
            <motion.div variants={slideInLeft} className="image__wrapper image__big">
              <Image
                src="/img/about-1-1920.webp"
                alt="Система видеонаблюдения на промышленном объекте"
                width={340}
                height={254}
                loading="lazy"
              />
            </motion.div>
          </div>
          <div className="about__images--bottom">
            <motion.div variants={slideInLeft} className="image__wrapper image__small-top">
              <Image
                src="/img/about-2-1920.webp"
                alt="Купольная камера видеонаблюдения"
                width={168}
                height={134}
                loading="lazy"
              />
            </motion.div>
            <motion.div variants={slideInLeft} className="image__wrapper image__small-bottom">
              <Image
                src="/img/about-3-1920.webp"
                alt="Панель управления системой безопасности"
                width={168}
                height={134}
                loading="lazy"
              />
            </motion.div>
          </div>
        </figure>

        <div className="about__text-wrapper">
          <div className="about__prevs-wrapper">
            <motion.p className="about__desc" variants={fadeInUp}>
              Мы фокусируемся на государственных, промышленных и стратегически важных объектах. А
              также обеспечиваем защиту частных школ, жилых комплексов и частных домов.
            </motion.p>
            <motion.p className="about__desc" variants={fadeInUp}>
              Как лидер отрасли, мы разрабатываем и производим собственное оборудование под брендом
              <abbr title="NTOUCH"> NTOUCH</abbr>, имеющее все необходимые сертификаты качества и
              соответствия.
            </motion.p>
          </div>
          <motion.div variants={fadeInUp}>
            <Button variant="primaryLink" className="about__btn" icon href="/about" scrambler>
              О компании
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
