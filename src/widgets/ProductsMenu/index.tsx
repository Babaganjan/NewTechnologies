import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@/shared/icons';
import { Breadcrumbs } from '@/shared/ui';

import type { ProductMenuTypes } from './productMenus.const';
import { PRODUCTMENUDATA__ALL, PRODUCTMENUDATA__TITLE } from './productMenus.const';
import './productsMenu.scss';

export const ProductsMenu = ({ type }: { type: ProductMenuTypes }) => {
  const data = PRODUCTMENUDATA__ALL[type];
  const dataTitle = PRODUCTMENUDATA__TITLE[type];

  return (
    <section className="productsMenu" aria-labelledby="products-menu-title">
      <Breadcrumbs />

      <div className="productsMenu__container container">
        <h1 id="products-menu-title" className="productsMenu__title">
          {dataTitle.title}
        </h1>
        <p className="productsMenu__subtitle">{dataTitle.subtitle}</p>

        <div className="productsMenu__item-header" aria-hidden="true">
          <span className="productsMenu__item-subtitle productsMenu__item-subtitle--one">
            номер
          </span>
          <span className="productsMenu__item-subtitle productsMenu__item-subtitle--two">
            модель
          </span>
          <span className="productsMenu__item-subtitle productsMenu__item-subtitle--three">
            пропускная способность
          </span>
        </div>

        <ul className="productsMenu__list">
          {data.map((item, index) => (
            <li key={item.id}>
              <Link
                href={`/products/${item.id}`}
                className="productsMenu__item"
                aria-label={`${item.model} ${item.title}, ${item.feature}`}
              >
                <div className="productsMenu__item-title-wrapper">
                  <span className="productsMenu__item-model">{item.model}</span>

                  <span className="productsMenu__item-title">{item.title}</span>

                  <span
                    className="productsMenu__item-subtitle productsMenu__item-subtitle--three"
                    aria-hidden="true"
                  >
                    пропускная способность
                  </span>

                  <span className="productsMenu__item-feature">{item.feature}</span>
                </div>

                <div className="productsMenu__item-img" aria-hidden="true">
                  <Image
                    src="/img/SN-IPR7140BZBN-Z.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 47vw, 0vw"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>

                <span className="productsMenu__item-arrow" aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
