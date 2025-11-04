import { Button, H } from '@/shared/ui';
import './description.scss';

export const Description = () => {
  return (
    <section className="description">
      <div className="description__container container">
        <div className="description__title-wrapper">
          <div className="description__title">
            <H level="2">Описание</H>
          </div>
          <H level="4" className="description__subtitle">
            <span>
              Системы пожаротушения — это важнейшая часть комплексной системы безопасности, которая
            </span>
            автоматически обнаруживает и тушит пожар, защищая людей и имущество
          </H>
        </div>
        <div className="description__wrapper">
          <div className="description__title-description">
            <p className="description__title-one">
              Мы занимаемся проектированием, установкой, настройкойи обслуживанием систем
              пожаротушения на объектах любой сложности:от офисов и торговых центров до складов,
              производстви промышленных предприятий.Наши решения соответствуют нормативам пожарной
              безопасности РК и основаны на применении современного сертифицированного оборудования.
            </p>
            <p className="description__title-two">
              Все решения разрабатываются индивидуально под объект— от квартир и офисов до торговых
              центров, школ и производственных помещений.
            </p>
          </div>
          <div className="description-button-container">
            <Button variant="description" icon className="description-button">
              Заказать услугу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
