import Swiper from 'swiper/bundle';
import axios from 'axios';
import { createReviewsList } from './render-functions';
import 'swiper/css/bundle';
const urlapi = 'https://portfolio-js.b.goit.study/api/reviews';
let reviewsswiper;

const reviewlist = document.querySelector('.reviews-list');
const swiperContainer = document.querySelector('.swiper-reviews');
const prevbtnEl = document.querySelector('.js-btn-prev');
4;
console.dir(prevbtnEl);
const nextbtnEl = document.querySelector('.js-btn-next');
console.dir(nextbtnEl);
const prevsvgbtn = document.querySelectorAll('.js-icon-prev');
console.dir(prevsvgbtn);
const nextsvgbtn = document.querySelectorAll('.js-icon-next');
console.dir(nextsvgbtn);
let theEnd = false;

const fetchReviews = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Помилка завантаження даних:', error);

    return {};
  }
};
fetchReviews(urlapi).then(reviews => {
  console.log('Отримані відгуки:', reviews);
  reviewlist.innerHTML = createReviewsList(reviews);

  reviewsswiper = new Swiper('.swiper-reviews', {
    modules: Navigation,
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 18,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
      tabKeys: true,
    },

    grabCursor: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: '.js-btn-next',
      prevEl: '.js-btn-prev',
    },
  });
});

swiperContainer.addEventListener('keydown', function (event) {
  if (event.keyCode === 9) {
    if (isInViewport(swiperContainer)) {
      event.preventDefault();
      if (!reviewsswiper.isEnd && !theEnd) {
        reviewsswiper.slideNext();
        if (reviewsswiper.isEnd) {
          prevbtnEl.focus();
          theEnd = true;
        }
      } else if (theEnd && !reviewsswiper.isBeginning) {
        reviewsswiper.slidePrev();
        if (reviewsswiper.isBeginning) {
          nextbtnEl.focus();
          theEnd = false;
        }
      }
    }
  }
});
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
