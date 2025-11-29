'use client';
import Image from 'next/image';
import { useGlitch } from 'react-powerglitch';

import { H } from '@/shared/ui';

import './_favorite-project.scss';
import type { FavoritesProjectData } from './favorite-project.const';
import { FAVORITES_PROJECT_DATA } from './favorite-project.const';

export const FavoritesProject = ({
  data = FAVORITES_PROJECT_DATA,
}: {
  data?: FavoritesProjectData[];
}) => {
  const glitch1 = useGlitch({
    playMode: 'hover',
    hideOverflow: true,
    shake: false,
  });

  const glitch2 = useGlitch({
    playMode: 'hover',
    hideOverflow: true,
    shake: false,
  });

  const glitch3 = useGlitch({
    playMode: 'hover',
    hideOverflow: true,
    shake: false,
  });

  const glitches = [glitch1, glitch2, glitch3];

  return (
    <section className="favorites-project" aria-labelledby="featured-projects-heading">
      <div className="favorites-project__container container">
        <H
          level={'2'}
          variant="light"
          id="featured-projects-heading"
          className="favorites-project__title"
        >
          Избранные проекты
        </H>
        {data.map((item, index) => {
          const glitch = glitches[index];

          return (
            <article className="favorites-project__item" key={item.id}>
              <figure
                className="favorites-project__img"
                ref={glitch.ref}
                onMouseEnter={glitch.startGlitch}
                onMouseLeave={glitch.stopGlitch}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={340}
                  height={242}
                  className="favorites-project__img-item"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </figure>
              <div className="favorites-project__wrapper">
                {/* <H level={'5'} className="item__small-title">
                  {item.title}
                </H> */}
                <h3 className="item__small-title">{item.title}</h3>
                <p className="item__prev">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
