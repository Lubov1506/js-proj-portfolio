const menuListElem = document.querySelector('.header-nav-list')
const menuOpenBtnElem = document.querySelector('.header-open-menu-btn')
// const menuMobileOpenBtn = document.querySelector('.header-btn-mobile-menu-open')

const toggleClass = () => {
  return  menuListElem.classList.toggle('is-hidden')
}
menuOpenBtnElem.addEventListener('click',toggleClass)
// menuMobileOpenBtn.addEventListener('.click',  )

