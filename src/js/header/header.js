const menuListElem = document.querySelector('.header-nav-list');
const menuOpenBtnElem = document.querySelector('.header-open-menu-btn');
const heightWindow = 1000;

const listenWindowScroll = () => {
  if (window.scrollY >= heightWindow) {
    menuListElem.classList.add('is-hidden');
  }
};

window.addEventListener('scroll', listenWindowScroll);

const toggleClass = () => {
  return menuListElem.classList.toggle('is-hidden');
};
menuOpenBtnElem.addEventListener('click', toggleClass);
