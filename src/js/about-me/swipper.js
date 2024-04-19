// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';



const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  modules: [ Navigation ],

  breakpoints: {
    375: {
      slidesPerView: 2,
      width: 260
    },
    768: {
      slidesPerView: 3,
      width: 600
    },
    1440: {
      slidesPerView: 6,
      width: 1200
    }
  },
  navigation: {
    nextEl: '.swiper-button-next custom',
  },
//   on: {
//     slideChange: function ()  {
//       if (this.isEnd) {
//         this.slideToLoop(1); // Перемотка на початок списку
//       } else if (this.isBeginning) {
//         this.slideToLoop(this.slides.length - 2); // Перемотка на кінець списку
//       }
//     },
//   },
});


