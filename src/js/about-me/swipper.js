import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper('.swiper.about', {
  direction: 'horizontal',
  enabled: true,
  loop: true,
  modules: [Navigation],
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },

  navigation: {
    nextEl: '.swiper-button-next-about',
  },
  breakpoints: {
    320: {
      width: 260,
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      width: 600,
    },
    1440: {
      width: 1200,
      slidesPerView: 6,
    },
  },
});
