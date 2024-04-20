import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';
const swiperContainerSkills = document.querySelector('.swiper-wrapper');
const skillsswiper = new Swiper('.skills-swiper', {
  direction: 'horizontal',
  spaceBetween: 0,
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
  on: {
    slideNextTransitionStart: swiper => {
      const activeIndex = swiper.activeIndex;
      const previousIndex =
        activeIndex === 0 ? swiper.slides.length - 1 : activeIndex - 1;
      swiper.slides[previousIndex].classList.remove('active');
      swiper.slides[activeIndex].classList.add('active');
    },
    slidePrevTransitionStart: swiper => {
      const activeIndex = swiper.activeIndex;
      const nextIndex =
        activeIndex === swiper.slides.length - 1 ? 0 : activeIndex + 1;
      swiper.slides[nextIndex].classList.remove('active');
      swiper.slides[activeIndex].classList.add('active');
    },
    keyPress: (swiper, keyCode) => {
      switch (keyCode) {
        case 9:
          swiper.slidePrev();
          break;
      }
    },
  },
});

swiperContainerSkills.addEventListener('click', event => {
  const clickX =
    event.clientX - swiperContainerSkills.getBoundingClientRect().left;
  const swiperWidth = swiperContainerSkills.offsetWidth;

  if (clickX < swiperWidth / 2) {
    skillsswiper.slidePrev();
  } else {
    skillsswiper.slideNext();
  }
});
