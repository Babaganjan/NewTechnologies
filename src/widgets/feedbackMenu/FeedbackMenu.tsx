import './_feedback-menu.scss';

export const FeedbackMenu = () => {
  return (
    <section className="feedback-menu" aria-labelledby="feedback-menu-title">
      <div className="feedback-menu__wrapper container">
        <h3 id="feedback-menu-title" className="feedback-menu__title">
          Рассчитать решение под ваш объект?
        </h3>
        <div className="feedback-menu__button-container">
          <button type="submit" className="feedback-menu__button">
            Подобрать решение
          </button>
        </div>
      </div>
      <div className="feedback-menu__decoration" aria-hidden="true"></div>
    </section>
  );
};
