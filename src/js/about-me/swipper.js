import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
const skillsswiper = new Swiper('.skills-swiper', {
  direction: 'horizontal',
  spaceBetween: 0,
  loop: true,
  touch: true,
  modules: [Navigation],
  keyboard: {
    keyCodes: [9, 37, 39],
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
      slidesPerGroup: 1,
      slidesOffsetAfter: 200,
    },
    768: {
      width: 600,
      slidesPerView: 3,
      slidesPerGroup: 1,
      slidesOffsetAfter: 200,
    },
    1440: {
      width: 1200,
      slidesPerView: 6,
      slidesPerGroup: 1,
      slidesOffsetAfter: 200,
    },
  },
});
