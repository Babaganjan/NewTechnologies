import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export function swiper() {
  return new Swiper(".mySwiper", {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 8,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
}
document.addEventListener("DOMContentLoaded", swiper);
