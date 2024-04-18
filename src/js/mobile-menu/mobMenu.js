const openMobMenuBtn = document.querySelector('.btn-close-mob-menu')
const mobMenuElem = document.querySelector('.mobile-menu-bg')

const showMobMenu = () => {
  return  mobMenuElem.classList.add('is-open')
}

openMobMenuBtn.addEventListener('click', showMobMenu)