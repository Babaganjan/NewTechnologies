'use client';
import { usePathname } from 'next/navigation';

import { H } from '@/shared/ui';

import './_products-block.scss';
import { ProductItem } from './ProductItem';
import { PRODUCTS_DATA } from './products.const';

export const Products = () => {
  const path = usePathname().split('/')[1];
  const isProductsPage = path !== 'products';

  return (
    <section className="products" aria-labelledby="products-title">
      <div className="products__container container">
        <header className="products__wrapper-text">
          <H level={'2'} variant="light" id="products-title" className="products-title title">
            Наша продукция
          </H>
          <H level={'3'} variant="light" className="products-subtitle">
            {isProductsPage ? (
              <>
                <span className="products-subtitle--mobile">
                  Надежное оборудование, <span>соответствующее строгим</span> отраслевым{' '}
                  <span>стандартам</span>
                </span>
                <span className="products-subtitle--descktop">
                  Оборудование, соответствующее строгим отраслевым стандартам
                </span>
              </>
            ) : (
              'Производим собственное оборудование с 2022 года для частных лиц и бизнеса.'
            )}
          </H>
        </header>
        <ul className="products__list">
          {PRODUCTS_DATA.map((item) => (
            <ProductItem key={item.id} itemData={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};
