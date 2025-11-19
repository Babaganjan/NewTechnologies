import Image from 'next/image';

import { H } from '@/shared/ui';

import './sizeSpec.scss';

export const SizeSpec = () => {
  return (
    <section className="sizeSpec">
      <div className="container">
        <div className="sizeSpec__title">
          <H level="2" variant="light">
            Размеры
          </H>
        </div>
        <div className="sizeSpec__img-container">
          <div className="sizeSpec__img">
            <Image src="/img/camera1.jpg" alt="" fill />
          </div>
          <div className="sizeSpec__img">
            <Image src="/img/camera1.png" alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
};
