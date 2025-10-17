import Image from 'next/image';

import { H } from '@/shared/ui';

import './_favorite-project.scss';
import { FAVORITES_PROJECT_DATA } from './favorite-project.const';

export const FavoritesProject = () => {
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
        {FAVORITES_PROJECT_DATA.map((item) => (
          <article className="favorites-project__item" key={item.id}>
            <div className="favorites-project__img">
              <Image
                src={item.image}
                alt={item.description}
                width={340}
                height={242}
                className="favorites-project__img-item"
              />
              <div className="favorites-project__decoration" aria-hidden="true"></div>
            </div>
            <div className="favorites-project__wrapper">
              <H level={'5'} className="item__small-title">
                {item.title}
              </H>
              <p className="item__prev">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
