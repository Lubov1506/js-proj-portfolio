import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const accTrigger = document.querySelectorAll('.acc-trigger');

const accContent = document.querySelectorAll('.acc-content');


console.log(accContent);
console.log(accTrigger)

accTrigger.forEach((item,index) => {
    const contentItem=accContent[index] 
    
    
    item.addEventListener('click', () => {
        contentItem.classList.toggle('is-open');
    });
});

