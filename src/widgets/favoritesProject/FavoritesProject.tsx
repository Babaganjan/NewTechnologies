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
          <div className="favorites-project__wrapper">
            <h5 className="item__small-title">Метрополитен г. алматы</h5>
            <p className="item__prev">
              Реализовали монтаж автоматического порошкового пожаротушения «Тунгус».
            </p>
          </div>
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
          <div className="favorites-project__wrapper">
            <h5 className="item__small-title">Проект «комфортная школа»</h5>
            <p className="item__prev">
              Установили турникеты NT по всему Казахстану при поддержке фонда «Самрук-Қазына».
            </p>
          </div>
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
            <h5 className="item__small-title">Метрополитен г. алматы</h5>
            <p className="item__prev">Оборудовали объект современными серверными шкафами.</p>
          </div>
        </article>
      </div>
    </section>
  );
};
