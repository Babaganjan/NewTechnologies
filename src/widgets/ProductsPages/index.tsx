import { GallerySpec } from './gallerySpec';
import { KeySpecs } from './keySpec';
import { SizeSpec } from './sizeSpec';
import { Spec } from './spec';

export const ProductsPages = () => {
  return (
    <>
      <GallerySpec />
      <KeySpecs type="СЕРИЯ 450" />
      <SizeSpec />
      <Spec />
    </>
  );
};
