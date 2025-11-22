import clsx from 'clsx';
import Image from 'next/image';

import './gallerySpec.scss';

export const GallerySpec = ({ images = [] }: { images: string[] }) => {
  const count = images.length;

  const modifierClass = clsx({
    'gallery--one': count === 1,
    'gallery--two': count === 2,
    'gallery--three': count === 3,
  });

  return (
    <div className={`gallery ${modifierClass[count]} container`}>
      {images.map((src, index) => (
        <div key={index} className="gallery__item">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="gallery__img"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
};
