'use client';
import { motion } from 'framer-motion';

import { fadeInUp, slideInRight } from '@/shared/animations/scroll-animations';
import type { descriptionItem } from '@/shared/types/products.types';
import { H } from '@/shared/ui';

export const DescriptiosSpec = ({ item }: { item: descriptionItem }) => {
  return (
    <section className="descriptionsSpec">
      <motion.div
        className="descriptionsSpec__container container"
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
        <div className="descriptionsSpec__container-wrapper">
          <motion.div variants={fadeInUp} className="descriptionsSpec__title">
            <H level="2" variant="dark">
              Описание
            </H>
          </motion.div>
          <motion.div variants={slideInRight} className="descriptionsSpec__text-wrapper">
            <p>{item.title1}</p>
            <p>{item.title2}</p>
            <p>{item.title3}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
