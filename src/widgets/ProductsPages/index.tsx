import type { ProductsPagesProps } from '@/shared/types/productsPages.types';

import { ProductsMenu } from '../ProductsMenu';

import { GallerySpec } from './gallerySpec';
import { KeySpecs } from './keySpec';
import { SizeSpec } from './sizeSpec';
import { Spec } from './spec';

export const ProductsPages = ({ product }: ProductsPagesProps) => {
  if (!product) return null;

  return (
    <>
      <GallerySpec productName={product.title} productModel={product.model} />
      <KeySpecs type="NT-NVR3808E1-J" />
      <Spec model={product.model} />
      <SizeSpec />

      {product.category === 'CAMERAS' || product.category === 'SWITCHES' ? (
        <Spec title="Спецификация" model={product.model} button />
      ) : null}

      <ProductsMenu
        type={product.category}
        excludeProductId={product.id}
        isRelatedProducts={true}
      />
    </>
  );
};
