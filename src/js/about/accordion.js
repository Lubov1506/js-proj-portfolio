import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionItems = document.querySelectorAll('.my-information-item');
document.addEventListener('DOMContentLoaded', () => {
  // Закриває всі акордеони, окрім першого, який має клас 'active' за замовчуванням
  for (let i = 1; i < accordionItems.length; i++) {
    accordionItems[i].querySelector('.my-information-content').style.height = '0';
  }

  // Додає обробник подій для кожного елемента акордеону
  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      // Закриває всі акордеони, які не мають клас 'active'
      for (let i = 0; i < accordionItems.length; i++) {
        if (accordionItems[i] !== item) {
          accordionItems[i].classList.remove('active');
          accordionItems[i].querySelector(
            '.my-information-content'
          ).style.height = '0';
        }
      }

      // Змінює стан активності поточного елемента і розкриває/закриває його контент
      item.classList.toggle('active');
      const content = item.querySelector('.my-information-content');
      content.style.height = item.classList.contains('active')
        ? content.scrollHeight + 'px'
        : '0';
    });
  });
});
