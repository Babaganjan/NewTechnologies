export const ProjectMenu = () => {
  return (
      <section className="project-menu" aria-labelledby="project-menu-title">
          <div className="project-menu__container container">
              <h2 id="project-menu-title" className="project-menu__title">Наши проекты</h2>
              <p className="project-menu__subtitle">
                  2000+ реализованных проектов
                  <span>—от уютных кафе у дома до объектов государственного значения.</span>
              </p>
              <ul className="project-menu__list">
                  <li className="project-menu-item">
                      <span className="project-menu-item__client">клиент</span>
                      <h5 className="project-menu-item__subtitle">
                          Филиал «Назарбаев Интеллектуальная школа» г. Тараз,<br/>
                          АОО «НИШ»
                      </h5>
                      <span>тип услуги</span>
                      <p>Система видеонаблюдения</p>
                  </li>
                  <li className="project-menu-item">
                      <span className="project-menu-item__client">клиент</span>
                      <h5 className="project-menu-item__subtitle">КГУ «Аппарат акима Жамбылской области»</h5>
                      <span>тип услуги</span>
                      <p>Система видеонаблюдения</p>
                  </li>
                  <li className="project-menu-item">
                      <span className="project-menu-item__client">клиент</span>
                      <h5 className="project-menu-item__subtitle">ЖОФ АО «Казпочта»</h5>
                      <span>тип услуги</span>
                      <p>Комплексная безопасность</p>
                  </li>
                  <li className="project-menu-item">
                      <span className="project-menu-item__client">клиент</span>
                      <h5 className="project-menu-item__subtitle">ТОО «Фиркан»</h5>
                      <span className="">тип услуги</span>
                      <p>пожарная сигнализация</p>
                  </li>
              </ul>
              <div className="project-menu__button-container">
                  <button className="project-menu__button">Смотреть еще</button>
              </div>
          </div>
      </section>

  )
}