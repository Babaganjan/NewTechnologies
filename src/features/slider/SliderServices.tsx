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
      <Swiper spaceBetween={8} slidesPerView={2.3} loop={true} className="service-slider__swiper">
        {serviceData.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider__wrapper flex">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={156}
                height={156}
                className="slider__image"
              />
              <H level={'5'} className="slider__article-title">
                {slide.heading}
              </H>
              <p className="slider__caption">{slide.alt}</p>
              <button className="service-slider__btn flex">
                <span>Подробнее</span>
                <Arrow color="var(--text-white)" width={15} height={12} />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
