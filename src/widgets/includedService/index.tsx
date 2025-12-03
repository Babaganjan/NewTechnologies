'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeInUp, slideInLeft } from '@/shared/animations/scroll-animations';
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
            transition: { staggerChildren: 0.35, delayChildren: 0.1 },
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
        <div className="includedService__wrapper">
          <div className="includedService__logo-wrapper">
            <motion.div variants={fadeInUp} className="includedService__logo">
              <span>NT</span>
            </motion.div>
          </div>
          <div className="includedService__img">
            <Image
              src="/img/IncludeService.webp"
              alt="Что вы получаете"
              fill
              sizes="(max-width: 768px) 100vw, 728px"
            />
          </div>
          <ul className="includedService__list">
            {data.map((item, index) => (
              <motion.li
                variants={slideInLeft}
                className="includedService__item"
                key={item.title}
                data-index={index + 1}
              >
                {item.title}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
