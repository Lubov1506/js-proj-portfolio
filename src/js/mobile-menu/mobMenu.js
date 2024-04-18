const closeMobMenuBtn = document.querySelector('.btn-close-mob-menu')
const mobMenuElem = document.querySelector('.mobile-menu-bg')
const openMobMenuBtn = document.querySelector('.header-btn-mobile-menu-open')

const mobMenuList = document.querySelector('.mobile-nav-list')

const mobileLink = document.querySelector('.mobile-link')

const showMobMenu = () => {
    mobMenuElem.classList.add('is-open')
}

const closeMobMenu = () => {
     mobMenuElem.classList.remove('is-open')
}

// mobMenuList.addEventListener('click', closeMobMenu)

closeMobMenuBtn.addEventListener('click', closeMobMenu)

openMobMenuBtn.addEventListener('click', showMobMenu)

mobileLink.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    console.log(event.target.getAttribute('href'))
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
        mobMenuElem.classList.remove('is-open');
    }
});