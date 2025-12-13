'use client';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

import { Arrow } from '@/shared/icons';

import { InlineCarousel } from './InlineCarousel';
import { OURACHIEVEMENTS__DATA } from './ourAchievements.const';
import './OurAchievements.scss';

export const OurAchievements = () => {
  const [open, setOpen] = useState<string | null>(null);

  const toggleOpen = (subtitle: string) => {
    setOpen((prev) => (prev === subtitle ? null : subtitle));
  };

  return (
    <section className="ourAchievements">
      <div className="ourAchievements__container container">
        <div className="ourAchievements__wrapper">
          {OURACHIEVEMENTS__DATA.map((group) => (
            <Fragment key={group.mainTitle}>
              <div className="ourAchievements__mainTitle">
                <h2>{group.mainTitle}</h2>
              </div>

              {group.data.map((item, index) => {
                const isOpen = open === item.subtitle;
                const isLastItem = index === group.data.length - 1;
                const isFirstItem = index === 0;

                return (
                  <div
                    key={`${item.sliderTitle}-${index}`}
                    className={clsx(
                      'ourAchievements__innerWrapper',
                      isOpen && 'open',
                      isLastItem && 'last-in-group',
                      isFirstItem && 'first-in-group'
                    )}
                    onClick={() => toggleOpen(item.subtitle)}
                  >
                    <span className="ourAchievements__city">{item.city}</span>

                    <h3 className="ourAchievements__subtitle">{item.subtitle}</h3>

                    <div className="ourAchievements__arrow-wrapper">
                      <Arrow
                        className={clsx(
                          'ourAchievements__arrow',
                          isOpen && 'ourAchievements__arrow--active'
                        )}
                        color="var(--text-black)"
                      />
                    </div>

                    {isOpen && (
                      <>
                        <p className="ourAchievements__description">
                          {item.sliderTitle}
                          <span>{item.sliderHiglightTitle}</span>
                        </p>

                        <div className="ourAchievements__gallery">
                          <InlineCarousel slides={item.sliderList} />
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
