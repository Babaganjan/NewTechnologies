'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

import { Arrow } from '@/shared/icons';
import './OurAchievements.scss';

export const OurAchievements = () => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    breakpoints: {
      '(min-width: 1024px)': { active: false },
    },
  });

  return (
    <section className="ourAchievements">
      <div className="ourAchievements__container container">
        <div className="ourAchievements__wrapper">
          <h2 id="our-achievements-title">Государственное признание</h2>
          <div className="ourAchievements__subtitle-wrapper">
            <h3 id="our-achievements-subtitle">«Қазақстанның үздік тауары»</h3>
            <Arrow className="ourAchievements__arrow" color="var(--text-black)" />
          </div>
          <p className="ourAchievements__description">
            Победитель в номинации «Өндірістік мақсаттағы үздік тауарлар» (Лучшие товары
            производственного назначения) среди товаров производственного назначения
            <span>
              — Признание высокого качества и конкурентоспособности отечественного оборудования
            </span>
          </p>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <div className="ourAchievements__image-wrapper">
                  <Image
                    src="/img/our-achievements.png"
                    alt="Our Achievements"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="embla__slide">
                <div className="ourAchievements__image-wrapper">
                  <Image
                    src="/img/our-achievements-1.png"
                    alt="Our Achievements"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
              <div className="embla__slide">
                <div className="ourAchievements__image-wrapper">
                  <Image
                    src="/img/our-achievements-2.png"
                    alt="Our Achievements"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
