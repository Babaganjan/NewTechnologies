import Image from 'next/image';

import { Breadcrumbs } from '@/shared/ui';

import { getModifierClass } from './helpers/getModifierClass';
import { getSizes } from './helpers/getSizes';

interface GallerySpecProps {
  productName: string;
  productModel?: string;
  images: string[];
}

export const GallerySpec = ({ productName, productModel, images }: GallerySpecProps) => {
  const count = images.length;
  const modifierClass = getModifierClass(count);

  return (
    <section className="gallery-section">
      <Breadcrumbs />
      <div className="gallery__container container">
        <h1>
          {productName} {productModel && <span>{productModel}</span>}
        </h1>
        <div className={`gallery ${modifierClass}`}>
          {images.map((src, index) => (
            <div key={`gallery-${index}`} className="gallery__item">
              <Image
                src={src}
                alt={`Изображение продукта ${index + 1}`}
                fill
                className="gallery__img"
                sizes={getSizes(count, index)}
                loading={index === 0 ? 'eager' : 'lazy'}
                priority={index === 0}
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
