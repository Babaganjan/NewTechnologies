import { Button, H } from '@/shared/ui';
import './_feedback-menu.scss';
export const FeedbackMenu = () => {
  return (
    <section className="feedback-menu" aria-labelledby="feedback-menu-title">
      <div className="feedback-menu__wrapper container">
        <H level={'3'} variant="dark" id="feedback-menu-title" className="feedback-menu__title">
          Рассчитать решение под ваш объект?
        </H>
        <Button type="button" variant="feedback" icon>
          Подобрать решение
        </Button>
      </div>
      <div className="feedback-menu__decoration" aria-hidden="true"></div>
    </section>
  );
};
