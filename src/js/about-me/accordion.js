import Accordion from 'accordion-js';

const acContainer = document.querySelector('.accordion-container');
acContainer.children[0].classList.add('is-active')
const acc = new Accordion(acContainer);
acc.open(0);