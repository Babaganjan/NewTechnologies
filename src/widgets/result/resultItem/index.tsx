'use client';
import { motion } from 'framer-motion';

import { AnimatedCard } from '@/shared/animations/AnimatedCard';
import { fadeInUp, numberVariants, slideInLeft } from '@/shared/animations/scroll-animations';
import type { ResultItem as ResultItemType } from '@/widgets/result/Result.types';
import './_resultItem.scss';

interface ResultItemProps {
  item: ResultItemType;
  index: number;
}

export const ResultItem = ({ item }: ResultItemProps) => {
  const { type, number, title, description, className = '', layout = {} } = item;
  const isNumericAchievement = type !== 'text' && number;

  return (
    <AnimatedCard className={`result__item ${className} ${layout.item || ''}`} enableHover={false}>
      <div className={`item__inner ${layout.inner || ''}`}>
        {isNumericAchievement && (
          <motion.data
            value={number.replace(/\D/g, '')}
            className={`item__number ${layout.number || ''}`}
            variants={numberVariants}
          >
            {number}
          </motion.data>
        )}

        <motion.h3 className={`item__title ${layout.title || ''}`} variants={slideInLeft}>
          {title}
        </motion.h3>

        {description && (
          <motion.p className={`item__prev ${layout.description || ''}`} variants={fadeInUp}>
            {description}
          </motion.p>
        )}
      </div>
    </AnimatedCard>
  );
};
