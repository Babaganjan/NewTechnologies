'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { ResultHeading } from '@/shared/icons';
import { H } from '@/shared/ui';
import './_heroResult.scss';

export const HeroResult = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3,
      x: '-50%',
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: '-50%',
      transition: {
        duration: 1,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="hero-result" aria-labelledby="hero-result-title">
      <motion.div
        className="container hero-result__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="heading-wrapper">
          <H level={'1'} id="hero-result-title" className="result-heading">
            <ResultHeading />
          </H>
        </div>

        <motion.div
          className="wrapper-cubak"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        >
          <Image
            src="/img/result-cubak.webp"
            alt="Кубак достижений"
            width={69}
            height={48}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="hero-result__content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 2 }}
        >
          <p className="hero-result__prev">
            Компания «Новые технологии» регулярно подтверждает высокий уровень компетенций в сфере
            систем безопасности, получая признание на государственном, отраслевом и международном
            уровнях.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
