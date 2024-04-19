const menuListElem = document.querySelector('.header-nav-list')
const menuOpenBtnElem = document.querySelector('.header-open-menu-btn')
const headMenuFixEl = document.querySelector('.head-menu-fixed')
const headerElem = document.querySelector('.header')

const heightWindow = 800
let lastScroll = 0


const toggleClassHidden = () => {
 menuListElem.classList.toggle('is-hidden')
}

const listenWindowScrollHeader = () => {
  let currentScroll = window.scrollY 
  
  if(window.scrollY >= heightWindow) {
    menuListElem.classList.add('is-hidden')
  }

  if(currentScroll <= 5) {
    return headerElem.classList.remove('head-menu-fixed') 
  }

  if(currentScroll < lastScroll) {
    headerElem.classList.add('head-menu-fixed')
  } else {
    headerElem.classList.remove('head-menu-fixed')
  }

  lastScroll = currentScroll
}


window.addEventListener('scroll', listenWindowScrollHeader)
menuOpenBtnElem.addEventListener('click',toggleClassHidden)
