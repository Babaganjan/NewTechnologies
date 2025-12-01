import { ProductionHeading } from '@/shared/icons';
import { H } from '@/shared/ui';
import './product-hero.scss';

export const ProductHero = () => {
  return (
    <>
      <section className="products-page-section" aria-labelledby="products-page-title">
        <div className="products-page-section__container container">
          <p>
            {'Производим собственное \n оборудование с 2022 года \n для частных лиц и бизнеса.'}
          </p>
          <div className="products-page-section__title">
            <H level={'1'} variant="light" id="products-page-title">
              <ProductionHeading />
            </H>
          </div>
        </div>
      </section>
    </>
  );
};
