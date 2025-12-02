'use client';
import { motion } from 'framer-motion';

import { AnimatedCard } from '@/shared/animations/AnimatedCard';
import { fadeInUp, slideInLeft, slideInRight } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';
import './_object-levels.scss';

import { OBJECT_LEVELS_DATA } from './objectLevels.const';

export const ObjectLevel = () => {
  return (
    <section className="object-levels" aria-labelledby="target-audience-heading">
      <motion.div
        className="container object-levels__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        <header className="object-levels__inner">
          <motion.div className="result__inner" variants={fadeInUp}>
            <H
              level={'2'}
              variant="light"
              className="object-levels__title title"
              id="target-audience-heading"
            >
              Кому подходит
            </H>
          </motion.div>

          <motion.div variants={fadeInUp} className="object-levels__subtitle subtitle">
            <H level={'3'} variant="light">
              Индивидуальные решения <span>для объектов любого уровня</span>
            </H>
          </motion.div>
        </header>
        <ul className="object-levels__list">
          {OBJECT_LEVELS_DATA.map((item) => (
            <AnimatedCard
              className={`object-levels__item item item-layout--${item.id}`}
              key={item.id}
            >
              <div className="item__inner">
                <motion.div variants={slideInLeft}>
                  <H level={'4'} variant="light" className="item__title">
                    {item.title}
                  </H>
                </motion.div>

                <motion.p className="item__prev" variants={slideInRight}>
                  {item.prev}
                </motion.p>
              </div>
            </AnimatedCard>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
