'use client';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import type { TextItem } from '@/shared/types/products.types';

export const SpecList = ({ data }: { data: TextItem[] }) => (
  <dl className="specList-list">
    <motion.div
      className="spec__container container"
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
      {data.map((item) => (
        <motion.div variants={fadeInUp} className="spec-item" key={item.title}>
          <dt className="spec-item__title">{item.title}</dt>
          <dd className="spec-item__subtitle">{item.subtitle}</dd>
        </motion.div>
      ))}
    </motion.div>
  </dl>
);
