'use client';

import { motion } from 'framer-motion';

import { fadeInDown, fadeInUp } from '@/shared/animations/scroll-animations';
import type { ServiceTypeKey } from '@/shared/types/service.types';
import { H } from '@/shared/ui';

import { INCLUDEDSERVICE__ALL } from './includedService.const';

import './includedService.scss';

export const IncludedService = ({ type }: { type: ServiceTypeKey }) => {
  const data = INCLUDEDSERVICE__ALL[type];

  return (
    <section className="includedService">
      <motion.div
        className="includedService__container container"
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
        <div className="includedService__titleAndSubtitle-container">
          <motion.div variants={fadeInUp} className="includedService__title">
            <H level="2" variant="dark">
              Что вы получаете
            </H>
          </motion.div>
          <motion.div variants={fadeInUp} className="includedService__subtitle">
            <H level="3">6 ПРИЧИН ДОВЕРИТЬСЯ НАМ</H>
          </motion.div>
        </div>

        <ul className="includedService__list">
          {data.map((item) => (
            <motion.li variants={fadeInDown} className="includedService__item" key={item.title}>
              {item.title}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
