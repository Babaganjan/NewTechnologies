'use client';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { ServicesHeading } from '@/shared/icons';
import { H } from '@/shared/ui';
import './_servicesHero.scss';

export const ServicesHero = () => {
  return (
    <section className="services-hero">
      <motion.div
        className="services-hero__container container"
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
        <div className="services-hero__video-in-container">
          <video
            className="services-hero__video services-hero__video--mobile"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/video/camera-scan-360.mp4" type="video/mp4" />
          </video>
          <video
            className="services-hero__video services-hero__video--tablet"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/video/camera-scan-768.mp4" type="video/mp4" />
          </video>
          <video
            className="services-hero__video services-hero__video--desktop"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            poster="/img/poster.jpg"
          >
            <source src="/video/camera-scan-1920.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div variants={fadeInUp} className="wrapper-title">
          <H level={'1'} className="heading">
            <ServicesHeading />
          </H>
        </motion.div>
      </motion.div>
    </section>
  );
};
