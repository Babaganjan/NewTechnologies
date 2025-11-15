import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@/shared/icons';
import { Breadcrumbs } from '@/shared/ui';

import { PRODUCTMENUDATA } from './productMenus.const';

import './productsMenu.scss';

export const ProductsMenu = () => {
  return (
    <section className="productsMenu">
      <Breadcrumbs />
      <div className="productsMenu__container container">
        <p className="productsMenu__title">Видеорегистраторы</p>
        <p className="productsMenu__subtitle">
          Надежные устройства для записи и хранения видеоматериалов, обеспечивающие контроль и
          защиту.
        </p>

        <div className="productsMenu__item-header">
          <p className="productsMenu__item-subtitle productsMenu__item-subtitle--one">номер</p>
          <p className="productsMenu__item-subtitle productsMenu__item-subtitle--two">модель</p>
          <p className="productsMenu__item-subtitle productsMenu__item-subtitle--three">
            пропускная способность
          </p>
        </div>
        <ul className="productsMenu__list">
          {PRODUCTMENUDATA.map((item) => (
            <li key={item.id}>
              <Link href="" className="productsMenu__item" tabIndex={0}>
                <div className="productsMenu__item-title-wrapper">
                  <p className="productsMenu__item-model">{item.model}</p>
                  <p className="productsMenu__item-title">{item.title}</p>
                  <p className="productsMenu__item-subtitle productsMenu__item-subtitle--three">
                    пропускная способность
                  </p>
                  <p className="productsMenu__item-feature">{item.feature}</p>
                </div>
                <div className="productsMenu__item-img">
                  <Image src="/img/SN-IPR7140BZBN-Z.png" alt="/" fill />
                </div>
                <div className="productsMenu__item-arrow">
                  <Arrow />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
