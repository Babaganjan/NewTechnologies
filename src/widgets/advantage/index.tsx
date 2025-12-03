'use client';
import { motion } from 'framer-motion';

import { AnimatedCard } from '@/shared/animations/AnimatedCard';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

import type { AdvantageKeyType } from './advantage.const';
import { ADVANTAGEALL } from './advantage.const';

import './Advantage.scss';

export const Advantage = ({ type }: { type: AdvantageKeyType }) => {
  const AdvantageData = ADVANTAGEALL[type];

  const listId = `advantage-list-${type.toLowerCase()}`;
  const titleId = `advantage-title-${type.toLowerCase()}`;

  return (
    <section className="advantage" aria-labelledby={titleId}>
      <motion.div
        className="advantage__container container"
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
        <motion.div variants={fadeInUp} className="advantage__title">
          <H level="2" variant="light" id={titleId}>
            Преимущества
          </H>
        </motion.div>
        <motion.ul className="advantage__list" id={listId} aria-label="Список преимуществ">
          {AdvantageData.map((item, index) => (
            <AnimatedCard
              className={`advantage__item advantage__item--pos-${index + 1}`}
              key={`${type}-advantage-${index}`}
            >
              <h3>{item.title}</h3>
              <data value={index + 1} className="advantage__item-number" aria-hidden="true">
                [0{index + 1}]
              </data>
            </AnimatedCard>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};
