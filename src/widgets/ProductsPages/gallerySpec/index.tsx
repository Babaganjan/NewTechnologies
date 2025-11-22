import Image from 'next/image';

import './gallerySpec.scss';
import { getModifierClass } from './helpers/getModifierClass';
import { getSizes } from './helpers/getSizes';

interface GallerySpecProps {
  images?: string[];
}

export const GallerySpec = ({ images = [] }: GallerySpecProps) => {
  const count = images.length;

  const modifierClass = getModifierClass(count);

  return (
    <section className="gallery-section">
      <div className={`gallery ${modifierClass} container`}>
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
    </section>
  );
};
