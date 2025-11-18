'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import './sliderServices.scss';
import { H } from '@/shared/ui';

import 'swiper/css';
import { Arrow } from './../../shared/icons/Arrow/Arrow';
import { SLIDER_DATA } from './sliderServices.const';

interface SliderServicesProps {
  serviceId: number;
}

export const SliderServices = ({ serviceId }: SliderServicesProps) => {
  const serviceData = SLIDER_DATA[serviceId as keyof typeof SLIDER_DATA];

  if (!serviceData) {
    return <div>Слайдер не найден</div>;
  }

  return (
    <div className="service-slider">
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        loop={true}
        className="service-slider__swiper"
        role="region"
        aria-label="Слайдер услуг"
      >
        {serviceData.slides.map((slide, index) => (
          <SwiperSlide key={index} role="group" aria-label={`Слайд ${index + 1} из ${serviceData.slides.length}`}>
            <div className="slider__wrapper flex">
              <div className="wrapper-image">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={156}
                  height={156}
                  className="slider__image"
                />
              </div>
              <H level={'5'} className="slider__article-title">
                {slide.heading}
              </H>
              <p className="slider__caption">{slide.alt}</p>
              <button className="service-slider__btn flex" aria-label={`Подробнее о ${slide.heading}`}>
                <span>Подробнее</span>
                <Arrow color="var(--text-white)" width={15} height={12} aria-hidden="true" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
