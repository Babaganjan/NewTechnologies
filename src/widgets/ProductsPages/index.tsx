import { getButtonTitle } from '@/shared/const/Products/utils/getButtonTitle';
import { getProductByModel } from '@/shared/const/Products/utils/getProductByModel';

import { ProductsMenu } from '../ProductsMenu';

import { GallerySpec } from './gallerySpec';
import { KeySpecs } from './keySpec';
import { SizeSpec } from './sizeSpec';
import { Spec } from './spec';
import { DescriptiosSpec } from './spec/desctiptionSpec';

interface ProductsPagesProps {
  productModel: string;
}

const CATEGORIES_WITH_BUTTON = ['SERVERCABINETS', 'TURNSTILES', 'SWITCHES'];
const CATEGORIES_AFTER_DIMENSIONS = ['TURNSTILES', 'SWITCHES'];

export const ProductsPages = ({ productModel }: ProductsPagesProps) => {
  const product = getProductByModel(productModel);

  if (!product) return null;

  const hasGeneralSpecs = !!product.specifications.general;
  const showBeforeDimensions =
    hasGeneralSpecs && !CATEGORIES_AFTER_DIMENSIONS.includes(product.category);
  const showAfterDimensions =
    hasGeneralSpecs && CATEGORIES_AFTER_DIMENSIONS.includes(product.category);
  const buttonForCategory = CATEGORIES_WITH_BUTTON.includes(product.category);

  return (
    <>
      <GallerySpec
        productName={product.name}
        productModel={product.model}
        images={product.gallery.images}
      />

      {product.description && <DescriptiosSpec item={product.description} />}

      <KeySpecs layout={product.keySpecs.layout} items={product.keySpecs.items} />

      {showBeforeDimensions && product.specifications.general && (
        <Spec
          title="Общие характеристики"
          section={product.specifications.general}
          button={buttonForCategory}
          buttonTitle={getButtonTitle(product.category)}
        />
      )}

      {product.dimensions && <SizeSpec images={product.dimensions.images} />}

      {showAfterDimensions && product.specifications.general && (
        <Spec
          title="Общие характеристики"
          section={product.specifications.general}
          button
          buttonTitle={getButtonTitle(product.category)}
        />
      )}

      {product.specifications.technical && (
        <Spec
          title="Спецификация"
          section={product.specifications.technical}
          button
          buttonTitle={getButtonTitle(product.category)}
        />
      )}

      <ProductsMenu type={product.category} excludeProductId={product.id} isRelatedProducts />
    </>
  );
};
