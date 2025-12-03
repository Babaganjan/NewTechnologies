'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { Breadcrumbs } from '@/shared/ui';

import { getModifierClass } from './helpers/getModifierClass';
import { getSizes } from './helpers/getSizes';

import './gallerySpec.scss';

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
      <motion.div
        className="gallery__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
          },
        }}
      >
        <motion.h1 variants={fadeInUp}>
          {productName} {productModel && <span>{productModel}</span>}
        </motion.h1>
        <motion.div variants={fadeInUp} className={`gallery ${modifierClass}`}>
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
        </motion.div>
      </motion.div>
    </section>
  );
};
