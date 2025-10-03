import Image from 'next/image';

export const Products = () => {
  return (
      <section className="products" aria-labelledby="products-title">
          <div className="products__container container">
              <div className="products__wrapper-text">
                  <h2 id="products-title" className="products-title">Наша продукция</h2>
                  <p className="products-subtitle">
                      <span>надежное Оборудование,</span> соответствующее строгим
                      <span>отраслевым</span> стандартам
                  </p>
              </div>
              <ul className="products__list">
                  <li className="products__item">
                      <div className="products__img">
                          <Image
                              src="/img/turniket.png"
                              alt="Турникеты"
                              width={96}
                              height={110}
                          />
                      </div>
                      <div className="products__title">
                          <h5>Турникеты</h5>
                      </div>
                  </li>
                  <li className="products__item">
                      <div className="products__img">
                          <Image
                              src="/img/camera.png"
                              alt="Камеры"
                              width={110}
                              height={100}
                          />
                      </div>
                      <div className="products__title">
                          <h5>Видеокамеры</h5>
                      </div>
                  </li>
                  <li className="products__item">
                      <div className="products__img">
                          <Image
                              src="/img/commutator-v2.png"
                              alt="Видеорегистраторы"
                              width={120}
                              height={54}
                          />
                      </div>
                      <div className="products__title">
                          <h5>Видеорегистраторы</h5>
                      </div>
                  </li>
                  <li className="products__item">
                      <div className="products__img">
                          <Image
                              src="/img/server.png"
                              alt="Сервера"
                              width={110}
                              height={110}
                          />
                      </div>
                      <div className="products__title">
                          <h5>Серверные шкафы</h5>
                      </div>
                  </li>
                  <li className="products__item">
                      <div className="products__img">
                          <Image
                              src="/img/commutator.png"
                              alt="Коммутаторы"
                              width={130}
                              height={48}
                          />
                      </div>
                      <div className="products__title">
                          <h5>Коммутаторы</h5>
                      </div>
                  </li>
              </ul>
          </div>
      </section>
  )
}