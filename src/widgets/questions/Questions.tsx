import './_questions-block.scss';

export const Questions = () => {
  return (
    <section className="questions" aria-labelledby="questions-title">
      <div className="questions__container container">
        <h2 id="questions-title" className="questions__title">
          Частые вопросы
        </h2>
        <ul className="card-wrapper">
          <li className="questions__card card--a">
            <div className="questions__card-decorative"></div>
            <h5 className="questions__content">С какими объектами вы работаете?</h5>
          </li>
          <li className="questions__card card--b">
            <div className="questions__card-decorative"></div>
            <h5 className="questions__content">Можно ли интегрировать системы между собой?</h5>
          </li>
          <li className="questions__card card--c">
            <div className="questions__card-decorative"></div>
            <h5 className="questions__content">
              Работает ли система сигнализации при отключении электричества?
            </h5>
          </li>
          <li className="questions__card card--d">
            <div className="questions__card-decorative"></div>
            <h5 className="questions__content">Как происходит проектирование и установка?</h5>
          </li>
          <li className="questions__card card--e">
            <div className="questions__card-decorative"></div>
            <h5 className="questions__content">Предоставляете ли вы техническое обслуживание?</h5>
          </li>
          <li className="questions__card card--f">
            <div className="questions__card-decorative"></div>
            <h5 className="questions__content">
              У вас есть оборудование в наличии или нужно ждать поставку?
            </h5>
          </li>
          <li className="questions__card card--g">
            <div className="questions__card-decorative"></div>
            <h5 className="questions__content">
              Работаете ли вы с государственными организациями?
            </h5>
          </li>
          <li className="questions__card card--h">
            <div className="questions__card-decorative"></div>
            <p className="questions__content">Сколько времени занимает установка систем?</p>
          </li>
          <li className="questions__card--active questions__card">
            <a href="#">
              <h4 className="questions__card-title">Все еще есть вопросы?</h4>
              <span className="questions__card-subtitle">Мы готовы помочь.</span>
              <div className="questions__card-arrow--active"></div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
