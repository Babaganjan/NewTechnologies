'use client';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { HomeHeading, HomeHeadingBig } from '@/shared/icons';
import { H } from '@/shared/ui';
import './_hero.scss';

export const Hero = () => {
  return (
    <section className="hero with-trapezoids" aria-labelledby="hero-title">
      <motion.div
        className="container hero__container"
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
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="hero__video"
          aria-hidden="true"
        >
          <source src="/video/hero-video-360.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source
            src="/video/hero-video-768.mp4"
            type="video/mp4"
            media="(min-width: 768px) and (max-width: 1023px)"
          />
          <source src="/video/hero-video-1920.mp4" type="video/mp4" media="(min-width: 1024px)" />
          <source src="/video/hero-video-1920.mp4" type="video/mp4" />
        </video>
        <motion.div variants={fadeInUp} className="heading">
          <H level={'1'} id="hero-title">
            <HomeHeading className="home-heading_small" />
            <HomeHeadingBig className="home-heading_big" />
          </H>
        </motion.div>

        <div className="hero__content">
          <motion.div variants={fadeInUp} className="hero__title title">
            <H level={'2'}>Мы предлагаем</H>
          </motion.div>
          <motion.p variants={fadeInUp} className="hero__prev">
            инновационные решения для обеспечения безопасности: системы видеонаблюдения,
            охранно-пожарная сигнализация, пожаротушение, контроль доступа и системы оповещения.
          </motion.p>
        </div>
        <motion.div variants={fadeInUp}>
          <H level={'3'} className="hero__subtitle subtitle">
            Безопасность&nbsp;нового поколения
          </H>
        </motion.div>
      </motion.div>
    </section>
  );
};
