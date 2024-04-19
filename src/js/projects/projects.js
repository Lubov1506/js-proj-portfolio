import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.projectSwiper', {
  spaceBetween: 30,

  navigation: {
    nextEl: '.js-btn_arrow-right',
    prevEl: '.js-btn_arrow-left',
  },
});
