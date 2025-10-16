import { H } from '@/shared/ui';
import './products-page.scss';
import { ProductionHeading } from '@/shared/ui/HeadingSvg/ProductionHeading';

export const ProductsPage = () => {
  return (
    <>
      <section className="products-page-section" aria-labelledby="products-page-title">
        <div className="products-page-section__container container">
          <p>
            {'Производим собственное \n оборудование с 2022 года \n для частных лиц и бизнеса.'}
          </p>
          <H level={'1'} variant="light" id="products-page-title">
            <ProductionHeading />
          </H>
        </div>
      </section>
    </>
  );
};
