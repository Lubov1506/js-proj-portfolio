
import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';


new Swiper('.swiper-about', {
  slidesPerView: 1,
  // direction: 'horizontal',
  loop: true,
  modules:[Navigation],

  breakpoints: {
    320: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 3,

    },
    1440: {
      slidesPerView: 6,
  
    },
  },
  navigation: {
    nextEl: '.swiper-about-next',
  },
});


