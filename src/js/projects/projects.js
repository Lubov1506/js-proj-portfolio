import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.projectSwiper', {
  spaceBetween: 30,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
    tabKeys: true,
  },
  mousewheel: {
    invert: true,
  },
  grabCursor: true,
  navigation: {
    nextEl: '.js-btn_arrow-right',
    prevEl: '.js-btn_arrow-left',
  },
});
