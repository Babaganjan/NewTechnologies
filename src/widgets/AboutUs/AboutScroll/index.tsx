// AboutScroll.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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

  // Анимация движения блоков
  const topBlockY = useTransform(scrollYProgress, [0, 0.5], [0, -550]);
  const bottomBlockY = useTransform(scrollYProgress, [0, 0.5], [0, 550]);

  // Контроль прозрачности видео - появляется когда блоки начинают расходиться
  const videoOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Отслеживаем когда достигли 20% скролла для запуска видео
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (videoRef.current && !hasVideoStarted && latest > 0.05) {
        videoRef.current.play().catch(console.error);
        setHasVideoStarted(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, hasVideoStarted]);

  // Останавливаем видео когда секция скрывается из viewport
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
              <source src="/video/about-desktop.mp4" type="video/mp4" />
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
