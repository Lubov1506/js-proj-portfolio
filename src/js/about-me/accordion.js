import Accordion from 'accordion-js';

const acContainer = document.querySelector('.accordion-container');
acContainer.children[0].classList.add('is-active');
console.log(acContainer);
new Accordion(acContainer, {
openOnInit:[0]});