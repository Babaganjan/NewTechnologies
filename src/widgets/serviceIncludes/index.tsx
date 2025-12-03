'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Fragment } from 'react';

import { fadeInUp, slideInLeft } from '@/shared/animations/scroll-animations';
import type { ServiceTypeKey } from '@/shared/types/service.types';
import { H } from '@/shared/ui';

import { CONSULTATIONSERVICE_DATA, CONSULTATIONSERVICE_IMAGES } from './consultationService.const';

import './consultationService.scss';

export const ConsultationService = ({ type }: { type: ServiceTypeKey }) => {
  const data = CONSULTATIONSERVICE_DATA[type];
  const images = CONSULTATIONSERVICE_IMAGES[type];

  return (
    <section className="consultationService">
      <motion.div
        className="consultationService__container container"
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
        <div className="consultationService_title-container">
          <motion.div variants={fadeInUp} className="consultationService__title">
            <H level="2" variant="light">
              Что входит в услугу
            </H>
          </motion.div>
          <motion.div variants={fadeInUp} className="consultationService__subtitle">
            <span>Мы берем на себя все этапы:</span> от консультации до гарантийного обслуживания
          </motion.div>
        </div>
        <div className="consultationService__decoration-container">
          {images.item.map((item, index) => (
            <Fragment key={`${item}-${index}`}>
              <motion.div
                className={`consultationService__decoration${index + 1}`}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
                  },
                }}
              >
                <Image
                  src={item}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </Fragment>
          ))}
        </div>
        <div className="consultationService__lines">
          <span className="line line--vertical"></span>
          <span className="line line--horizontal line--left"></span>
          <span className="line line--horizontal line--right"></span>
          <span className="line line--horizontal line--bottom"></span>
        </div>
        <motion.ul
          className="consultationService__list"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.35, delayChildren: 0.1 },
            },
          }}
        >
          {data.item.map((item, index) => (
            <motion.li
              variants={slideInLeft}
              className="consultationService__item"
              key={`${index}-${item}`}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};
