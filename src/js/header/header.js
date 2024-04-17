const menuListElem = document.querySelector('.header-nav-list')
const menuOpenBtnElem = document.querySelector('.header-open-menu-btn')

function toggleClass() {
  return  menuListElem.classList.toggle('is-hidden')
    
}
menuOpenBtnElem.addEventListener('click',toggleClass)