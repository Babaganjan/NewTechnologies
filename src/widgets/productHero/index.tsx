'use client';
import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { ProductionHeading, ProductionHeadingBig } from '@/shared/icons';
import { H } from '@/shared/ui';
import './product-hero.scss';

export const ProductHero = () => {
  return (
    <>
      <section className="products-page-section" aria-labelledby="products-page-title">
        <motion.div
          className="products-page-section__container container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 0.2 },
            },
          }}
        >
          <motion.div variants={fadeInUp} className="products-page-section__title">
            <p>
              {'Производим собственное \n оборудование с 2022 года \n для частных лиц и бизнеса.'}
            </p>

            <H level={'1'} variant="light" id="products-page-title">
              <ProductionHeading className="products-page-title__small" />
              <ProductionHeadingBig className="products-page-title__big" />
            </H>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
