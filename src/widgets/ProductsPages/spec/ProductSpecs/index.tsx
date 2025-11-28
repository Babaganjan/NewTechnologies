import type { ProductInfoItem } from '@/shared/types/products.types';

export const ProductSpecs = ({ items }: { items: ProductInfoItem[] }) => {
  return (
    <div className="productSpecs">
      {items.map((item) => (
        <>
          <div className="productSpecs__group productSpecs__group--model">
            <span className="productSpecs__label">модель</span>
            <span className="productSpecs__value">{item.model}</span>
          </div>

          <div className="productSpecs__row">
            <div className="productSpecs__group">
              <span className="productSpecs__label">размеры (мм)</span>
              <span className="productSpecs__value">{item.dimensions}</span>
            </div>

            <div className="productSpecs__group">
              <span className="productSpecs__label">U юниты</span>
              <span className="productSpecs__value">{item.units}</span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
