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
            <Image src="/img/mainImg-4.jpg" alt="Метрополитен г. алматы" width={340} height={242} />
            <div className="favorites-project__decoration" aria-hidden="true"></div>
          </div>
          <h4>Метрополитен г. алматы</h4>
          <p>Реализовали монтаж автоматического порошкового пожаротушения «Тунгус».</p>
        </article>
        <article className="favorites-project__item">
          <div className="favorites-project__img">
            <div className="favorites-project__decoration" aria-hidden="true"></div>
            <Image
              src="/img/mainImg-5.jpg"
              alt="Проект «комфортная школа»"
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
            <Image src="/img/mainImg-6.jpg" alt="Метрополитен г. алматы" width={341} height={242} />
          </div>
          <h4>Метрополитен г. алматы</h4>
          <p>Оборудовали объект современными серверными шкафами.</p>
        </article>
      </div>
    </section>
  );
};
