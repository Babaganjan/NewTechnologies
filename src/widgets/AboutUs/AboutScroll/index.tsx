// AboutScroll.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import { AboutUsHeadingBottom, AboutUsHeadingTop } from '@/shared/icons';
import './AboutScroll.scss';

export const AboutScroll = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const topBlockY = useTransform(scrollYProgress, [0, 0.5], [0, -700]);
  const bottomBlockY = useTransform(scrollYProgress, [0, 0.5], [0, 700]);

  return (
    <section className="hero-scroll-section" ref={containerRef} data-theme={'dark'}>
      <div className="sticky-container">
        <motion.div
          className="block top-block container"
          style={{
            y: topBlockY,
          }}
        >
          <AboutUsHeadingTop />
        </motion.div>

        <motion.div className="aboutUs__img-wrapperScroll">
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
          className="block bottom-block container"
          style={{
            y: bottomBlockY,
          }}
        >
          <AboutUsHeadingBottom />
          <p className="bottom-block__desc">
            Лидер в сфере систем безопасности и автоматизации бизнеса
          </p>
        </motion.div>
      </div>
    </section>
  );
};
