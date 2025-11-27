import Image from 'next/image';

import { H } from '@/shared/ui';

interface SizeSpecProps {
  images: string[];
}

export const SizeSpec = ({ images }: SizeSpecProps) => {
  return (
    <section className="sizeSpec">
      <div className="container">
        <div className="sizeSpec__title">
          <H level="2" variant="light">
            Размеры
          </H>
        </div>
        <div className="sizeSpec__img-container">
          {images.map((src, index) => (
            <div key={index} className="sizeSpec__img">
              <Image src={src} alt={`Размеры ${index + 1}`} fill />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
