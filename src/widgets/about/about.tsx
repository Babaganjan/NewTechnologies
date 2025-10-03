export const about = () => {
  return (
      <section className="about">
          <div className="container about__container flex">
              <h2 className="about__title title">Что мы&nbsp;делаем</h2>
              <h3 className="about__subtitle subtitle">
                  <span>реализуем комплексные системы</span> безопасности и&nbsp;оптимизируем&nbsp;бизнес
                  в&nbsp;казахстане
                  <span>С&nbsp;2013 года</span>
              </h3>
              <div className="about__images flex">
                  <div className="about__images--top">
                      <div className="image__wrapper image__big">
                          <span className="decor-bottom-right"></span>
                          <picture>
                              <source media="(min-width: 1024px)" srcSet="src/assets/img/about-1-1920.jpg"/>
                              <img src="src/assets/img/about-1.jpg" alt="Картинка камеры"/>
                          </picture>
                      </div>
                  </div>
                  <div className="about__images--bottom flex">
                      <div className="image__wrapper image__small-top">
                          <span className="decor-bottom-right"></span>
                          <picture>
                              <source media="(min-width: 1024px)" srcSet="src/assets/img/about-2-1920.jpg"/>
                              <img src="src/assets/img/about-2.jpg" alt="Картинка камеры"/>
                          </picture>
                      </div>
                      <div className="image__wrapper image__small-bottom">
                          <span className="decor-bottom-right"></span>
                          <picture>
                              <source media="(min-width: 1024px)" srcSet="src/assets/img/about-3-1920.jpg"/>
                              <img src="src/assets/img/about-3.jpg" alt="Картинка камеры"/>
                          </picture>
                      </div>
                  </div>
              </div>
              <div className="about__text-wrapper">
                  <div className="about__prevs-wrapper flex">
                      <p className="about__desc">
                          Мы&nbsp;фокусируемся на&nbsp;государственных, промышленных и&nbsp;стратегически
                          важных объектах. А&nbsp;также обеспечиваем защиту частных школ, жилых комплексов
                          и&nbsp;частных домов.
                      </p>
                      <p className="about__desc">
                          Как лидер отрасли, мы&nbsp;разрабатываем и&nbsp;производим собственное оборудование
                          под брендом NTouch, имеющее все необходимые сертификаты качества
                          и&nbsp;соответствия.
                      </p>
                  </div>
                  <div className="about__btn-wrapper flex">
                      <button className="about__btn">О&nbsp;компании</button>
                  </div>
              </div>
          </div>
      </section>
  )
}