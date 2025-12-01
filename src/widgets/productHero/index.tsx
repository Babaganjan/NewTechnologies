import { ProductionHeading, ProductionHeadingBig } from '@/shared/icons';
import { H } from '@/shared/ui';
import './product-hero.scss';

export const ProductHero = () => {
  return (
    <>
      <section className="products-page-section" aria-labelledby="products-page-title">
        <div className="products-page-section__container container">
          <div className="products-page-section__title">
            <p>
              {'Производим собственное \n оборудование с 2022 года \n для частных лиц и бизнеса.'}
            </p>

            <H level={'1'} variant="light" id="products-page-title">
              <ProductionHeading className="products-page-title__small" />
              <ProductionHeadingBig className="products-page-title__big" />
            </H>
          </div>
        </div>
      </section>
    </>
  );
};
