'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/shared/ui';
import './sliderServices.scss';

import 'swiper/css';
import { SERVICES_ITEMS } from '../services.const';

interface SliderServicesProps {
  serviceId: number;
}

export const SliderServices = ({ serviceId }: SliderServicesProps) => {
  const currentServices = SERVICES_ITEMS.find((service) => service.id === serviceId);

  return (
    <div className="service-slider">
      <Swiper
        spaceBetween={10}
        slidesPerView={2.1}
        centeredSlides={false}
        centeredSlidesBounds={false}
        watchOverflow
        loop={true}
        breakpoints={{
          480: {
            slidesPerView: 2.3,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
        }}
        className="service-slider__swiper"
        role="region"
        aria-label="Слайдер услуг"
      >
        {currentServices?.list.map((item, index) => (
          <SwiperSlide
            key={index}
            role="group"
            aria-label={`Слайд ${index + 1} из ${currentServices.list.length}`}
          >
            <div className="slider__wrapper flex">
              <div className="wrapper-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={156}
                  height={156}
                  className="slider__image"
                />
              </div>
              <h4 className="slider__article-title">{item.name}</h4>
              <Button
                href={item.href}
                variant="link"
                icon
                className="service-slider__btn flex"
                aria-label={`Подробнее о ${item.name}`}
              >
                Подробнее
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
