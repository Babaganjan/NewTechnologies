import Image from 'next/image';

import './gallerySpec.scss';

import { Breadcrumbs } from '@/shared/ui';

import { myImages } from './gallery.const';
import { getModifierClass } from './helpers/getModifierClass';
import { getSizes } from './helpers/getSizes';

export const GallerySpec = () => {
  const count = myImages.length;

  const modifierClass = getModifierClass(count);

  return (
    <section className="gallery-section">
      <Breadcrumbs />
      <div className="gallery__container container">
        <h1>
          Сетевая цилиндрическая ИК-камера <span>NT-ipr5122-m</span>
        </h1>
        <div className={`gallery ${modifierClass} `}>
          {myImages.map((src, index) => (
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
