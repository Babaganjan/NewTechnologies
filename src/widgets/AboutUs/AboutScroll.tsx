// AboutScroll.tsx
'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import './AboutScroll.scss';
import { AboutUsHeadingBottom } from './../../shared/icons/AboutUs/AboutUsHeadingBottom';
import { AboutUsHeadingTop } from './../../shared/icons/AboutUs/AboutUsHeadingTop';

export const AboutScroll = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const topBlockY = useTransform(scrollYProgress, [0, 0.5], [0, -700]);
  const bottomBlockY = useTransform(scrollYProgress, [0, 0.5], [0, 700]);

  return (
    <section className="hero-scroll-section" ref={containerRef}>
      <div className="sticky-container">
        <motion.div
          className="block top-block"
          style={{
            y: topBlockY,
          }}
        >
          <AboutUsHeadingTop />
        </motion.div>

        <motion.div className="aboutUs__img-wrapperScroll" style={{}}>
          <Image
            className="aboutUs__img"
            src="/img/AboutUs/aboutScroll.webp"
            alt="Фоновое изображение"
            width={1920}
            height={1080}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          className="block bottom-block"
          style={{
            y: bottomBlockY,
          }}
        >
          <AboutUsHeadingBottom />
        </motion.div>
      </div>
    </section>
  );
};
