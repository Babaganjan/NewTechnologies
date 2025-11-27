import { getProductByModel } from '@/shared/const/Products/utils/getProductByModel';

import { ProductsMenu } from '../ProductsMenu';

import { GallerySpec } from './gallerySpec';
import { KeySpecs } from './keySpec';
import { SizeSpec } from './sizeSpec';
import { Spec } from './spec';

interface ProductsPagesProps {
  productModel: string;
}

export const ProductsPages = ({ productModel }: ProductsPagesProps) => {
  const product = getProductByModel(productModel);

  if (!product) return null;

  return (
    <>
      <GallerySpec
        productName={product.name}
        productModel={product.model}
        images={product.gallery.images}
      />

      <KeySpecs layout={product.keySpecs.layout} items={product.keySpecs.items} />

      {product.specifications.general && (
        <Spec title="Общие характеристики" section={product.specifications.general} />
      )}

      {product.dimensions && <SizeSpec images={product.dimensions.images} />}

      {product.specifications.technical && (
        <Spec title="Спецификация" section={product.specifications.technical} button />
      )}

      <ProductsMenu type={product.category} excludeProductId={product.id} isRelatedProducts />
    </>
  );
};
