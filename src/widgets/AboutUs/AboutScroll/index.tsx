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
    <section
      className="hero-scroll-section"
      ref={containerRef}
      data-theme="dark"
      aria-labelledby="about-scroll-heading"
      role="region"
      aria-roledescription="Интерактивная секция с параллакс-эффектом"
    >
      <div className="sticky-container container">
        <motion.div
          className="block top-block container"
          style={{
            y: topBlockY,
          }}
          role="heading"
          aria-level={2}
          aria-label="Заголовок: О компании и наших достижениях"
        >
          <AboutUsHeadingTop aria-hidden="false" role="img" />
          <span className="sr-only" id="about-scroll-heading">
            О компании и наших достижениях
          </span>
        </motion.div>

        <motion.div className="aboutUs__img-wrapperScroll" aria-hidden="true" role="presentation">
          <Image
            className="aboutUs__img"
            src="/img/AboutUs/aboutScroll.webp"
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          className="block bottom-block container"
          style={{
            y: bottomBlockY,
          }}
          role="contentinfo"
          aria-label="Информация о компании"
        >
          <AboutUsHeadingBottom aria-hidden="false" role="img" />
          <p
            className="bottom-block__desc"
            aria-label="Лидер в сфере систем безопасности и автоматизации бизнеса"
          >
            Лидер в сфере систем безопасности и автоматизации бизнеса
          </p>
        </motion.div>
      </div>
    </section>
  );
};
