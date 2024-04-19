import Accordion from 'accordion-js';

const accorContainer = document.querySelector('.accordion-container.faq');

new Accordion(accorContainer, {
    openOnInit: [0]
})

