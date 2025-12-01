'use client';
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef, useState } from 'react';

import { H } from '@/shared/ui';

import { PartnerSlide } from './PartnerSlide';
import './_advertising-block.scss';
import { PARTNERS } from './advertising.const';

export const Advertising = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Инициализируем Embla только когда секция в viewport
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
      skipSnaps: false,
      containScroll: 'trimSnaps',
    },
    [
      AutoScroll({
        speed: 3,
        stopOnFocusIn: false,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        startDelay: 0,
      }),
    ]
  );

  // Intersection Observer для определения видимости секции
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px', // Подгружаем чуть заранее
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  // Останавливаем автоскролл если секция не видна (экономия ресурсов)
  useEffect(() => {
    if (!emblaApi) return;

    const onVisibilityChange = () => {
      const autoScroll = emblaApi.plugins()?.autoScroll;

      if (!autoScroll) return;

      if (document.hidden) {
        autoScroll.stop();
      } else if (isInView) {
        autoScroll.play();
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, [emblaApi, isInView]);

  return (
    <section
      ref={sectionRef}
      className="advertising with-trapezoids"
      aria-labelledby="advertising-title"
    >
      <div className="advertising__container container">
        <H level="2" id="advertising-title" className="advertising__title title">
          Наши партнеры
        </H>
        <div className="advertising__subtitle-wrapper">
          <H level="3" className="advertising__subtitle">
            <span className="advertising__subtitle-line1">
              Работаем с лидерами <span className="advertising__subtitle-desktop-word">рынка</span>
            </span>
            <span className="advertising__subtitle-line2">
              <span className="advertising__subtitle-mobile-word">рынка </span>
              из <span className="advertising__subtitle--break">отрасли</span>
            </span>
          </H>
        </div>

        {/* Рендерим карусель только когда секция близко к viewport */}
        {isInView && (
          <div className="continuous-scroll-container" ref={emblaRef}>
            <div className="continuous-scroll-wrapper">
              {PARTNERS.map((slide) => (
                <PartnerSlide
                  key={slide.id}
                  id={slide.id}
                  component={slide.component}
                  name={slide.name}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
