// 'use client';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';

// export const SliderServices = () => {
//   return (
//     <Swiper
//       spaceBetween={8}
//       slidesPerView={2.3}
//       loop={true}
//       // onSlideChange={() => console.log('slide change')}
//       // onSwiper={(swiper) => console.log(swiper)}
//       // style={{ width: '100%', height: '200px' }}
//     >
//       <SwiperSlide>
//         <div className="slider__wrapper">
//           <Image
//             src="/img/slider-services-1m.webp"
//             alt="logo"
//             width={100}
//             height={100}
//             className="slider__image"
//           />
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="slider__wrapper">
//           <Image
//             src="/img/slider-services-1m.webp"
//             alt="logo"
//             width={100}
//             height={100}
//             className="slider__image"
//           />
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="slider__wrapper">
//           <Image
//             src="/img/slider-services-1m.webp"
//             alt="logo"
//             width={100}
//             height={100}
//             className="slider__image"
//           />
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <div className="slider__wrapper">
//           <Image
//             src="/img/slider-services-1m.webp"
//             alt="logo"
//             width={100}
//             height={100}
//             className="slider__image"
//           />
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// };
// SliderServices.tsx
'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { H } from '@/shared/ui';
import 'swiper/css';

interface SliderServicesProps {
  serviceId: number;
}

// Разные данные для каждого типа услуг
const SLIDER_DATA = {
  1: {
    // Системы защиты
    title: 'Системы защиты',
    slides: [
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Система видеонаблюдения',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Контроль доступа',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Пожарная сигнализация',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Охранная сигнализация',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
    ],
  },
  2: {
    // IT-решения
    title: 'IT-решения',
    slides: [
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Веб-разработка',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Мобильные приложения',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Облачные решения',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Кибербезопасность',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
    ],
  },
  3: {
    // Обучение
    title: 'Обучение',
    slides: [
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Курсы по безопасности',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'IT-тренинги',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Сертификация',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
      {
        src: '/img/slider-services-1m.webp',
        heading: 'Практические занятия',
        alt: 'Датчики дыма, движения, звуковая и световая сигнализация, панели управления',
      },
    ],
  },
};

export const SliderServices = ({ serviceId }: SliderServicesProps) => {
  const serviceData = SLIDER_DATA[serviceId as keyof typeof SLIDER_DATA];

  if (!serviceData) {
    return <div>Слайдер не найден</div>;
  }

  return (
    <div className="service-slider">
      <h4 className="service-slider__title">{serviceData.title}</h4>
      <Swiper spaceBetween={8} slidesPerView={2.3} loop={true} className="service-slider__swiper">
        {serviceData.slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider__wrapper">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
