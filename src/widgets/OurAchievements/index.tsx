'use client';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

import { Arrow } from '@/shared/icons';

import { InlineCarousel } from './InlineCarousel';
import { OURACHIEVEMENTS__DATA } from './ourAchievements.const';
import './OurAchievements.scss';

export const OurAchievements = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="ourAchievements">
      <div className="ourAchievements__container container">
        <div className="ourAchievements__wrapper">
          {OURACHIEVEMENTS__DATA.map((item) => {
            return (
              <Fragment key={item.mainTitle}>
                <h2 id="our-achievements-title">{item.mainTitle}</h2>
                {item.data.map((item, index) => {
                  return (
                    <div
                      key={`${item.sliderTitle}-${index}`}
                      className="ourAchievements__innerWrapper"
                      onClick={() =>
                        setOpen((prev) => (prev === item.subtitle ? null : item.subtitle))
                      }
                    >
                      <div className="ourAchievements__subtitle-wrapper">
                        <h3 id="our-achievements-subtitle">{item.subtitle}</h3>
                        <Arrow
                          className={clsx(
                            'ourAchievements__arrow',
                            open == item.subtitle && 'ourAchievements__arrow--active'
                          )}
                          color="var(--text-black)"
                        />
                      </div>
                      {open === item.subtitle && (
                        <>
                          <p className="ourAchievements__description">
                            {item.sliderTitle}
                            <span>{item.sliderHiglightTitle}</span>
                          </p>
                          <InlineCarousel slides={item.sliderList} />
                        </>
                      )}
                      <span className="ourAchievements__city">{item.city}</span>
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
