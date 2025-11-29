import Image from 'next/image';
import Link from 'next/link';

import { PRODUCT_MENU_TITLES } from '@/shared/const/Products/catalog';
import { getFeatureTitle } from '@/shared/const/Products/utils/getFeatureTitle';
import { getProductsByCategory } from '@/shared/const/Products/utils/getProductsByCategory';
import { Arrow } from '@/shared/icons';
import type { ProductCategory } from '@/shared/types/products.types';
import { Breadcrumbs, H } from '@/shared/ui';
import { slugify } from '@/shared/utils/slugify';

import './productsMenu.scss';

interface ProductsMenuProps {
  type: ProductCategory;
  excludeProductId?: number;
  isRelatedProducts?: boolean;
}

export const ProductsMenu = ({
  type,
  excludeProductId,
  isRelatedProducts = false,
}: ProductsMenuProps) => {
  const allData = getProductsByCategory(type);
  const menuTitle = PRODUCT_MENU_TITLES[type];
  const featureTitle = getFeatureTitle(type);

  const data = excludeProductId ? allData.filter((item) => item.id !== excludeProductId) : allData;

  const title = isRelatedProducts ? 'Другие модели' : menuTitle.title;

  return (
    <section className="productsMenu" aria-labelledby="products-menu-title">
      {!isRelatedProducts && <Breadcrumbs />}

      <div className="productsMenu__container container">
        {!isRelatedProducts ? (
          <h1 id="products-menu-title" className="productsMenu__title">
            {title}
          </h1>
        ) : (
          <div className="products-menu-title">
            <H level="2" variant="dark">
              {title}
            </H>
          </div>
        )}
        {!isRelatedProducts && <p className="productsMenu__subtitle">{menuTitle.subtitle}</p>}

        <div className="productsMenu__item-header" aria-hidden="true">
          <span className="productsMenu__item-subtitle productsMenu__item-subtitle--one">
            номер
          </span>
          <span className="productsMenu__item-subtitle productsMenu__item-subtitle--two">
            модель
          </span>
          <span className="productsMenu__item-subtitle productsMenu__item-subtitle--three">
            {featureTitle}
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
                  aria-label={`${item.model} ${item.name}, ${item.feature}`}
                >
                  <div className="productsMenu__item-title-wrapper">
                    <span className="productsMenu__item-model">{item.model}</span>
                    <span className="productsMenu__item-title">{item.name}</span>
                    <span
                      className="productsMenu__item-subtitle productsMenu__item-subtitle--three"
                      aria-hidden="true"
                    >
                      {featureTitle}
                    </span>
                    <span className="productsMenu__item-feature">{item.feature}</span>
                  </div>

                  <div className="productsMenu__item-img" aria-hidden="true">
                    <Image
                      src={item.gallery.images[0] || '/img/placeholder.png'}
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
