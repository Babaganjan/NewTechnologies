'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeInUp } from '@/shared/animations/scroll-animations';
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
          <motion.h1 variants={fadeInUp}>{title}</motion.h1>
        </div>
        <div className="heroService__img">
          <div className="heroService__decoration" aria-hidden={true}></div>
          <Image
            src={`/img/heroService/${type}.webp`}
            alt={title}
            width={360}
            height={229}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="heroService__decoration-1" aria-hidden={true}></div>
        </div>
      </motion.div>
    </section>
  );
};
