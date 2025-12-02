'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

import './_products-block.scss';
import { ProductItem } from './ProductItem';
import { PRODUCTS_DATA } from './products.const';

export const Products = () => {
  const path = usePathname().split('/')[1];
  const isProductsPage = path !== 'products';

  return (
    <section className="products" aria-labelledby="products-title">
      <motion.div
        className="products__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.35, delayChildren: 0.1 },
          },
        }}
      >
        <header className="products__wrapper-text">
          <motion.div variants={fadeInUp}>
            <H level={'2'} variant="light" id="products-title" className="products-title title">
              Наша продукция
            </H>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <H level={'3'} variant="light" className="products-subtitle">
              {isProductsPage ? (
                <>
                  <span className="products-subtitle--mobile">
                    Надежное оборудование, <span>соответствующее строгим</span> отраслевым{' '}
                    <span>стандартам</span>
                  </span>
                  <span className="products-subtitle--descktop">
                    Оборудование, соответствующее строгим отраслевым стандартам
                  </span>
                </>
              ) : (
                'Производим собственное оборудование с 2022 года для частных лиц и бизнеса.'
              )}
            </H>
          </motion.div>
        </header>
        <ul className="products__list">
          {PRODUCTS_DATA.map((item) => (
            <ProductItem key={item.id} itemData={item} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
};
