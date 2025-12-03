'use client';
import { motion } from 'framer-motion';

import { AnimatedList } from '@/shared/animations/AnimatedList';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import type { KeySpecItem, KeySpecLayout } from '@/shared/types/products.types';
import { H } from '@/shared/ui';

import './keySpec.scss';

import { SpecItem } from './SpecItem';

interface KeySpecsProps {
  title?: string;
  layout: KeySpecLayout;
  items: KeySpecItem[];
}

export const KeySpecs = ({ title = 'Основные характеристики', layout, items }: KeySpecsProps) => {
  const listClassName = `keySpecs__list keySpecs__list--${layout}`;

  return (
    <section className="keySpecs" aria-labelledby="keyspecs-title">
      <motion.div
        className="container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
          },
        }}
      >
        <motion.div variants={fadeInUp} className="keySpecs__title">
          <H level="2" variant="dark" id="keyspecs-title">
            {title}
          </H>
        </motion.div>
        <AnimatedList className={listClassName}>
          {items.map((item, index) => (
            <SpecItem key={item.id} item={item} index={index} />
          ))}
        </AnimatedList>
      </motion.div>
    </section>
  );
};
