import { Arrow } from '@/shared/icons';
import './_feedback-menu.scss';
import { H } from '@/shared/ui';

export const FeedbackMenu = () => {
  return (
    <section className="feedback-menu" aria-labelledby="feedback-menu-title">
      <div className="feedback-menu__wrapper container">
        <H level={'3'} variant="dark" id="feedback-menu-title" className="feedback-menu__title">
          Рассчитать решение под ваш объект?
        </H>
        <div className="feedback-menu__button-container">
          <button type="submit" className="feedback-menu__button">
            Подобрать решение
            <Arrow width={12} height={15} />
          </button>
        </div>
      </div>
      <div className="feedback-menu__decoration" aria-hidden="true"></div>
    </section>
  );
};
