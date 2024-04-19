
import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';


const swiper = new Swiper('.swiper.about', {
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  modules:[Navigation],

  breakpoints: {
    375: {
      width: 260,
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
      width: 600,
    },
    1440: {
      width: 1200,
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next-about',
  },
});




