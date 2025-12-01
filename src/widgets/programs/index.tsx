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
          <h3 className="programs__card-title">Безопасная среда</h3>
          <p className="programs__card-subtitle">
            Комплексное программное обеспечение для мониторинга и управления безопасностью в
            организациях любого масштаба - от школ и университетов до медицинских центров, офисов и
            промышленных предприятий.
          </p>
        </div>
        <div className="programs__card-wrapper">
          <span>Функционал системы:</span>
          <ul className="programs__card-list">
            <li>Контроль доступа в здания, учебные корпуса и служебные помещения;</li>
            <li>Интеграция с системами видеонаблюдения, пожарной и охранной сигнализацией;</li>
            <li>Система оповещения и автоматической фиксации инцидентов;</li>
            <li>Централизованный мониторинг всех объектов на одной платформе;</li>
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
            Инновационная программа, направленная на профилактику конфликтов, буллинга и
            агрессивного поведения в коллективах. Подходит для учебных заведений, детских садов,
            колледжей и корпоративных организаций.
          </p>
        </div>
        <div className="programs__card-wrapper">
          <span>Функционал системы:</span>
          <ul className="programs__card-list">
            <li>
              Анонимные обращения учеников, сотрудников или родителей о случаях травли, угроз или
              нарушений;
            </li>
            <li>Сбор и анализ данных для администрации или HR-отдела;</li>
            <li>
              Автоматическое формирование отчетов и рекомендаций по предотвращению конфликтов;
            </li>
            <li>Интеграция с системами внутренней безопасности и корпоративными порталами.</li>
          </ul>
        </div>
        <Button variant="feedback" icon className="programs__button">
          Заказать услугу
        </Button>
      </article>
    </div>
  </section>
);
