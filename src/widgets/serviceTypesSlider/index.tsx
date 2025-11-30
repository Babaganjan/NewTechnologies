'use client';

import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { H } from '@/shared/ui';

import { DATA_ALL_TYPES, type TDataAllTypes } from './TypesOfBlock.const';

import 'swiper/css/pagination';
import './typesOfBlock.scss';

export const TypesOfBlock = ({ type, title }: { type: TDataAllTypes; title: string }) => {
  const data = DATA_ALL_TYPES[type];

  return (
    <section className="typesOfBlock" data-type={type}>
      <div className="typesOfBlock__container container">
        <div className="typesOfBlock__wrapper">
          <div className="typesOfBlock__title">
            <H level="2" variant="dark">
              {title}
            </H>
          </div>
          <div className="typesOfBlock__subTitle">
            <h3>
              {data.mainTitle}
              <span>{data.mainTitleHighlight}</span>
            </h3>
          </div>
        </div>
        <Swiper
          className="typesOfBlock__slider"
          spaceBetween={8}
          slidesPerView="auto"
          loop={true}
          modules={[Pagination]}
          centeredSlides={true}
          initialSlide={0}
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
                    sizes="(min-width: 1024px) 600px, 510px"
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
      </div>
    </section>
  );
};
