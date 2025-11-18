'use client';
import Image from 'next/image';
import { useGlitch } from 'react-powerglitch';

import { H } from '@/shared/ui';

import './_favorite-project.scss';
import { FAVORITES_PROJECT_DATA } from './favorite-project.const';

export const FavoritesProject = () => {
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
    <section className="favorites-project" aria-labelledby="favorites-project-title">
      <div className="favorites-project__container container">
        <H
          level={'2'}
          variant="light"
          id="favorites-project-title"
          className="favorites-project__title"
        >
          Избранные проекты
        </H>
        {FAVORITES_PROJECT_DATA.map((item, index) => {
          const glitch = glitches[index];

          return (
            <article className="favorites-project__item" key={item.id}>
              <div
                className="favorites-project__img"
                ref={glitch.ref}
                onMouseEnter={glitch.startGlitch}
                onMouseLeave={glitch.stopGlitch}
              >
                <Image
                  src={item.image}
                  alt={item.description}
                  width={340}
                  height={242}
                  className="favorites-project__img-item"
                />
              </div>
              <div className="favorites-project__wrapper">
                <H level={'5'} className="item__small-title">
                  {item.title}
                </H>
                <p className="item__prev">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
