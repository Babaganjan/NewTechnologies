import Image from 'next/image';
import './_favorite-project.scss';

export const FavoritesProject = () => {
  return (
    <section className="favorites-project" aria-labelledby="favorites-project-title">
      <div className="favorites-project__container container">
        <h2 id="favorites-project-title" className="favorites-project__title">
          Избранные проекты
        </h2>
        <article className="favorites-project__item">
          <div className="favorites-project__img">
            <Image
              src="/img/favorite-1.webp"
              alt="Метрополитен г. алматы"
              layout="responsive"
              width={340}
              height={242}
            />
            <div className="favorites-project__decoration" aria-hidden="true"></div>
          </div>
          <h4>Метрополитен г. алматы</h4>
          <p>Реализовали монтаж автоматического порошкового пожаротушения «Тунгус».</p>
        </article>
        <article className="favorites-project__item">
          <div className="favorites-project__img">
            <div className="favorites-project__decoration" aria-hidden="true"></div>
            <Image
              src="/img/favorite-2.webp"
              alt="Проект «комфортная школа»"
              layout="responsive"
              width={340}
              height={242}
            />
          </div>
          <h4>Проект «комфортная школа»</h4>
          <p>Установили турникеты NT по всему Казахстану при поддержке фонда «Самрук-Қазына».</p>
        </article>
        <article className="favorites-project__item">
          <div className="favorites-project__decoration" aria-hidden="true"></div>
          <div className="favorites-project__img">
            <div className="favorites-project__decoration"></div>
            <Image
              src="/img/favorite-3.webp"
              alt="Метрополитен г. алматы"
              layout="responsive"
              width={341}
              height={242}
            />
          </div>
          <div className="favorites-project__wrapper">
            <h4>Метрополитен г. алматы</h4>
            <p>Оборудовали объект современными серверными шкафами.</p>
          </div>
        </article>
      </div>
    </section>
  );
};
