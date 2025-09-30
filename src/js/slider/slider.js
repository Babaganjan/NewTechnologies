import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export function swiper() {
  return new Swiper('.mySwiper', {
    modules: [Autoplay],
    slidesPerView: 4,
    spaceBetween: 8,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      1024: { slidesPerView: 5 },
      1366: { slidesPerView: 6 },
      1920: { slidesPerView: 7 },
    },
  });
}
document.addEventListener('DOMContentLoaded', swiper);
