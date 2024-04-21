import Swiper from 'swiper/bundle';
import axios from 'axios';
import iziToast from 'izitoast';
import { createReviewsList } from './render-functions';
import 'swiper/css/bundle';

const urlapi = 'https://portfolio-js.b.goit.study/api/reviews';
let reviewsswiper;
const reviewlist = document.querySelector('.reviews-list');
const swiperContainer = document.querySelector('.swiper-reviews');
const prevbtnEl = document.querySelector('.js-btn-prev');
const nextbtnEl = document.querySelector('.js-btn-next');
let theEnd = false;

const fetchReviews = async url => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    reviewlist.innerHTML =
      '<li class="not-found-item"><p class="not-found-message">Not found</p></li>';

    iziToast.show({
      title: 'Помилка завантаження!',
      message: 'Повторіть спробу пізніше.',
      messageSize: 'large',
      backgroundColor: '#242527',
      theme: 'dark',
      position: 'center',
      timeout: 4000,
      progressBar: false,
      progressBarColor: '#3b3b3b',
      onOpening: () => {
        nextbtnEl.style.display = 'none';
        prevbtnEl.style.display = 'none';
      },
    });

    return {};
  }
};
fetchReviews(urlapi).then(reviews => {
  reviewlist.innerHTML = createReviewsList(reviews);

  reviewsswiper = new Swiper('.swiper-reviews', {
    modules: [Navigation, Keyboard],
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    slidesPerView: 1,
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
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
    navigation: {
      nextEl: '.js-btn-next',
      prevEl: '.js-btn-prev',
    },
  });
});

swiperContainer.addEventListener('keydown', event => {
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
export const isInViewport = element => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
