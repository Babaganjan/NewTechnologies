'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { AnimatedCard } from '@/shared/animations/AnimatedCard';
import { AnimatedList } from '@/shared/animations/AnimatedList';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import type { ServiceTypeKey } from '@/shared/types/service.types';
import { H } from '@/shared/ui';

import { STAGESWORKALL } from './StagesWork.const';

import './StagesWork.scss';

export const StagesWork = ({ type }: { type: ServiceTypeKey }) => {
  const StagesWorkData = STAGESWORKALL[type];

  return (
    <section className="stagesWork">
      <motion.div
        className="stagesWork__container container"
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
        <motion.div variants={fadeInUp} className="stagesWork__title">
          <H level="2">Этапы работы</H>
        </motion.div>
        <AnimatedList className="stagesWork__list">
          {StagesWorkData.map((item, index) => (
            <AnimatedCard className="stagesWork__item" key={item.id} enableHover={false}>
              <data value={index + 1} className="stagesWork__item-number">
                {(index + 1).toString().padStart(2, '0')}
              </data>
              <div className="stagesWork__item__container">
                <div className="stagesWork__item__title-container">
                  <h3 className="stagesWork__item-title">{item.title}</h3>
                  <p className="stagesWork__item-subTitle">{item.subTitle}</p>
                </div>
                <div className="stagesWork__item-img">
                  <Image src={item.href} alt={item.title} width={196} height={196} />
                </div>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedList>
      </motion.div>
    </section>
  );
};
