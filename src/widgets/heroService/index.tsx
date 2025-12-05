'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Breadcrumbs } from '@/shared/ui';

import './heroService.scss';
import type { HeroServiceKey } from './heroService.types';

export const HeroService = ({ title, type }: { title: string; type: HeroServiceKey }) => {
  return (
    <section className="heroService">
      <motion.div
        className="heroService__container container"
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
        <Breadcrumbs />
        <div className="heroService__title">
          <h1>{title}</h1>
        </div>
        <div className="heroService__img">
          <Image
            src={`/img/heroService/${type}.webp`}
            alt={title}
            width={1920}
            height={1080}
            sizes="100vw"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};
