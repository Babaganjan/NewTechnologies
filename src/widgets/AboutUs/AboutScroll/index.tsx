'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { AboutUsHeadingBottom, AboutUsHeadingTop } from '@/shared/icons';
import './AboutScroll.scss';

export const AboutScroll = () => {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [hasVideoStarted, setHasVideoStarted] = useState(false);

  const topBlockY = useTransform(scrollYProgress, [0, 0.5], [0, -550]);
  const bottomBlockY = useTransform(scrollYProgress, [0, 0.5], [0, 550]);

  const videoOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (videoRef.current && !hasVideoStarted && latest > 0.05) {
        videoRef.current.play().catch(console.error);
        setHasVideoStarted(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, hasVideoStarted]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (videoRef.current && document.visibilityState === 'hidden') {
        videoRef.current.pause();
      } else if (videoRef.current && document.visibilityState === 'visible' && hasVideoStarted) {
        videoRef.current.play().catch(console.error);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasVideoStarted]);

  return (
    <section
      className="hero-scroll-section"
      ref={containerRef}
      data-theme="dark"
      aria-labelledby="about-scroll-heading"
    >
      <motion.div
        className="sticky-container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="block top-block container"
          style={{
            y: topBlockY,
          }}
          role="heading"
          aria-level={2}
          aria-label="Заголовок: О компании и наших достижениях"
          // variants={fadeInUp}
        >
          <AboutUsHeadingTop aria-hidden="false" role="img" />
        </motion.div>

        <motion.div
          className="aboutUs__video-wrapperScroll"
          aria-hidden="true"
          role="presentation"
          style={{
            opacity: videoOpacity,
          }}
        >
          <div className="aboutUs__video-in-container">
            <video
              ref={videoRef}
              className="aboutUs__video aboutUs__video--desktop"
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/video/about-desktop.webm" type="video/webm" />
            </video>
          </div>
        </motion.div>

        <motion.div
          className="block bottom-block container"
          style={{
            y: bottomBlockY,
          }}
          role="contentinfo"
          aria-label="Информация о компании"
          // variants={fadeInUp}
        >
          <AboutUsHeadingBottom aria-hidden="false" role="img" />
          <motion.p className="bottom-block__desc" variants={fadeInUp}>
            Лидер в сфере систем безопасности
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
