import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';


const accTrigger = document.querySelectorAll('.acc-trigger');

const accContent = document.querySelectorAll('.acc-content');


console.log(accContent);
console.log(accTrigger)

// accTrigger.forEach((item,index) => {
//     const contentItem=accContent[index] 
    
    
//     item.addEventListener('click', () => {
//         contentItem.classList.toggle('is-open');
//     });
// });

const faqList = document.querySelector('.faq-list')
const onButtonClick = (e) => {
    console.log(e.target.nodeName);
    if (e.target.nodeName === 'BUTTON' || e.target.nodeName === 'svg') {
         const faqBurger = e.target.closest('.faq-burger');
        if (faqBurger) {
          const accContent = faqBurger.nextElementSibling;
          accContent.classList.toggle('is-open');
        }
    }
}
faqList.addEventListener('click', onButtonClick)