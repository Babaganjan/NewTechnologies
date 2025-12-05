'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { AnimatedCard } from '@/shared/animations/AnimatedCard';
import { AnimatedList } from '@/shared/animations/AnimatedList';
import { fadeInUp } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

import { seeAlsoTypeData } from './helper/seeAlsoTypeData';
import './seeAlso.scss';

export const SeeAlso = ({ type }: { type: string }) => {
  const data = seeAlsoTypeData(type);

  return (
    <section className="seeAlso">
      <motion.div
        className="seeAlso__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
      >
        <motion.div variants={fadeInUp} className="seeAlso__title">
          <H level="2" variant="light">
            смотрите также
          </H>
        </motion.div>
        <motion.h3 variants={fadeInUp} className="seeAlso__subtitle">
          Дополнительные направления по безопасности
        </motion.h3>
        <AnimatedList className="seeAlso__list">
          {data.map((item) => (
            <AnimatedCard className="seeAlso__item" key={item.id} enableHover={false}>
              <Link href={item.href}>
                <Image src={item.image} alt={item.title} width={110} height={110} />
                <h4>{item.title}</h4>
              </Link>
            </AnimatedCard>
          ))}
        </AnimatedList>
      </motion.div>
    </section>
  );
};
