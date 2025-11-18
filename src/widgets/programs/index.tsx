import { Button, H } from '@/shared/ui';

import './programs.scss';

export const Programs = () => (
  <section className="programs">
    <div className="programs__container container">
      <div className="programs__title-container">
        <H level="2" variant="light">
          Программы
        </H>
      </div>
      <article className="programs__card">
        <div className="programs__card-title-wrapper">
          <h3 className="programs__card-title">Безопасная школа</h3>
          <p className="programs__card-subtitle">
            Комплексное программное обеспечение для мониторинга и управления безопасностью учебного
            заведения.
          </p>
        </div>
        <div className="programs__card-wrapper">
          <span>функционал</span>
          <ul className="programs__card-list">
            <li>контроль доступа в здание и учебные корпуса;</li>
            <li>интеграция с системами видеонаблюдения и охранной сигнализацией;</li>
            <li>система оповещения и автоматической фиксации инцидентов;</li>
            <li>отчетность для администрации и надзорных органов.</li>
          </ul>
        </div>
        <Button variant="feedback" icon className="programs__button">
          Заказать услугу
        </Button>
      </article>
      <article className="programs__card">
        <div className="programs__card-title-wrapper">
          <h3 className="programs__card-title">Антибуллинг</h3>
          <p className="programs__card-subtitle">
            Программа, направленная на профилактику и предотвращение буллинга в образовательных
            учреждениях.
          </p>
        </div>
        <div className="programs__card-wrapper">
          <span>функционал</span>
          <ul className="programs__card-list">
            <li>анонимное обращение учеников о случаях травли или угроз;</li>
            <li>сбор и анализ данных для администрации;</li>
            <li>формирование отчетов для принятия мер;</li>
            <li>интеграцию с системами школьной безопасности</li>
          </ul>
        </div>
        <Button variant="feedback" icon className="programs__button">
          Заказать услугу
        </Button>
      </article>
    </div>
  </section>
);
