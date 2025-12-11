'use client';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { HomeHeading, HomeHeadingBig } from '@/shared/icons';
import { H } from '@/shared/ui';
import './_heroResult.scss';

export const HeroResult = () => {
  return (
    <section className="hero-result with-trapezoids" aria-labelledby="hero-title">
      <motion.div
        className="container hero-result__container"
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
        <motion.div variants={fadeInUp} className="heading">
          <H level={'1'} id="hero-result-title">
            <HomeHeading className="home-heading_small" />
            <HomeHeadingBig className="home-heading_big" />
          </H>
        </motion.div>

        <div className="hero-result__content">
          <motion.p variants={fadeInUp} className="hero-result__prev">
            Компания «Новые технологии» регулярно подтверждает высокий уровень компетенций в сфере
            систем безопасности, получая признание на государственном, отраслевом и международном
            уровнях.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
