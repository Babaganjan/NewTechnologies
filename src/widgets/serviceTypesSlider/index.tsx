'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { H } from '@/shared/ui';

import { DATA_ALL_TYPES, type TDataAllTypes } from './TypesOfBlock.const';

import 'swiper/css/pagination';
import './typesOfBlock.scss';

export const TypesOfBlock = ({ type, title }: { type: TDataAllTypes; title: string }) => {
  const data = DATA_ALL_TYPES[type];

  return (
    <section className="typesOfBlock" data-type={type}>
      <motion.div
        className="typesOfBlock__container container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        <div className="typesOfBlock__wrapper">
          <motion.div variants={fadeInUp} className="typesOfBlock__title">
            <H level="2" variant="dark">
              {title}
            </H>
          </motion.div>
          <motion.div variants={fadeInUp} className="typesOfBlock__subTitle">
            <h3>
              {data.mainTitle}
              <span>{data.mainTitleHighlight}</span>
            </h3>
          </motion.div>
        </div>
        <Swiper
          className="typesOfBlock__slider"
          spaceBetween={8}
          slidesPerView="auto"
          loop={true}
          freeMode={true}
          modules={[Pagination]}
          centeredSlides={true}
          initialSlide={0}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {data.items.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="typesOfBlock__slide-item">
                <div className="typesOfBlock__slide-item-img">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="typesOfBlock__slide-item-title">
                  <h4>{item.title}</h4>
                  <p>{item.subTitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};
