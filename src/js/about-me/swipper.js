<<<<<<< Updated upstream

import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
=======
// import Swiper JS
import Swiper from 'swiper/bundle';
// import Swiper styles
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
>>>>>>> Stashed changes


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
<<<<<<< Updated upstream
      spaceBetween: 0,
=======
      width: 600,
>>>>>>> Stashed changes
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




