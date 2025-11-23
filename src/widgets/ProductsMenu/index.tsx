import Image from 'next/image';
import Link from 'next/link';

import { Arrow } from '@/shared/icons';
import { Breadcrumbs, H } from '@/shared/ui';
import { slugify } from '@/shared/utils/slugidy';

import type { ProductMenuTypes } from './productMenus.const';
import { PRODUCTMENUDATA__ALL, PRODUCTMENUDATA__TITLE } from './productMenus.const';
import './productsMenu.scss';

interface ProductsMenuProps {
  type: ProductMenuTypes;
  excludeProductId?: number; // ID продукта, который нужно исключить
  isRelatedProducts?: boolean; // Флаг что это "Другие модели"
}

export const ProductsMenu = ({
  type,
  excludeProductId,
  isRelatedProducts = false,
}: ProductsMenuProps) => {
  const allData = PRODUCTMENUDATA__ALL[type];
  const dataTitle = PRODUCTMENUDATA__TITLE[type];

  const data = excludeProductId ? allData.filter((item) => item.id !== excludeProductId) : allData;
  const title = isRelatedProducts && 'Другие модели';

  return (
    <section className="productsMenu" aria-labelledby="products-menu-title">
      {!isRelatedProducts && <Breadcrumbs />}

      <div className="productsMenu__container container">
        {!isRelatedProducts ? (
          <h1 id="products-menu-title" className="productsMenu__title">
            {dataTitle.title}
          </h1>
        ) : (
          <div className="products-menu-title">
            <H level="2" variant="dark">
              {title}
            </H>
          </div>
        )}
        {!isRelatedProducts && <p className="productsMenu__subtitle">{dataTitle.subtitle}</p>}

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
          {data.map((item, index) => {
            const categorySlug = type.toLowerCase();
            const productSlug = slugify(item.model);

            return (
              <li key={item.id}>
                <Link
                  href={`/products/${categorySlug}/${productSlug}`}
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
            );
          })}
        </ul>
      </div>
    </section>
  );
};
