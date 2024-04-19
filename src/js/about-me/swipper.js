
import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';


const swiper = new Swiper('.swiper.about', {
  direction: 'horizontal',
  slidesPerView: 2,
  loop: true,
  modules:[Navigation],
  breakpoints: {
    320: {
      width: 260,
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
  navigation: {
    nextEl: '.swiper-button-next-about',
  },
});




