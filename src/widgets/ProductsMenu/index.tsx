import Image from 'next/image';

import { Arrow } from '@/shared/icons';

import './productsMenu.scss';

export const ProductsMenu = () => {
  return (
    <section className="productsMenu">
      <div className="productsMenu__container container">
        <div className="productsMenu__title-container">
          <p className="productsMenu__title">Видеорегистраторы</p>
          <p className="productsMenu__subtitle">
            Надежные устройства для записи и хранения видеоматериалов, обеспечивающие контроль и
            защиту.
          </p>
        </div>
        <ul className="productsMenu__list">
          <li className="productsMenu__item">
            <div className="productsMenu__item-title-wrapper">
              <p className="productsMenu__item-model">nt-nvr3708e1-p8</p>
              <p className="productsMenu__item-title">8-ми канальный ip-регистратор</p>
              <div className="productsMenu__item-header">
                <p className="productsMenu__item-subtitle productsMenu__item-subtitle--one">
                  номер
                </p>
                <p className="productsMenu__item-subtitle productsMenu__item-subtitle--two">
                  модель
                </p>
                <p className="productsMenu__item-subtitle productsMenu__item-subtitle--three">
                  пропускная способность
                </p>
              </div>
              <p className="productsMenu__item-feature">40 Мбит/сек</p>
            </div>
            <div className="productsMenu__item-img">
              <Image src="/img/SN-IPR7140BZBN-Z.png" alt="/" fill />
            </div>
            <div className="productsMenu__item-arrow">
              <Arrow />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
