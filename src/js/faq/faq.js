import Accordion from 'accordion-js';

const accorContainer = document.querySelector('.accordion-container.faq');

const faqacc = new Accordion(accorContainer, {
  duration: 300,
});
