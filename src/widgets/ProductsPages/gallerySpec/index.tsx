import Image from 'next/image';

import './gallerySpec.scss';

export const GallerySpec = ({ images = [] }: { images: string[] }) => {
  // Берем только первые 3, чтобы не сломать верстку
  const items = images.slice(0, 3);
  const count = items.length;

  if (count === 0) return null;

  // Определяем модификатор
  let modifierClass = '';

  if (count === 1) modifierClass = 'gallery--one';
  else if (count === 2) modifierClass = 'gallery--two';
  else if (count === 3) modifierClass = 'gallery--three';

  return (
    <div className={`gallery ${modifierClass} container`}>
      {items.map((src, index) => (
        <div key={index} className="gallery__item">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            fill
            className="gallery__img"
            // Оптимизация: на мобилке грузим полную ширину, на десктопе - половину
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
};
