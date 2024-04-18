// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// document.addEventListener('DOMContentLoaded', function () {
//     const accordions = document.querySelectorAll('.my-information-item');
  
//     accordions.forEach((accordion) => {
//       const title = accordion.querySelector('.my-information-title');
//       const content = accordion.querySelector('.my-information-content');
  
//       title.addEventListener('click', () => {
//         accordion.classList.toggle('active');
  
//         if (accordion.classList.contains('active')) {
//           content.style.maxHeight = content.scrollHeight + 'px';
//         } else {
//           content.style.maxHeight = '0';
//         }
//       });
  
//       // Розкрити перший елемент за замовчуванням
//       if (accordion === accordions[0]) {
//         accordion.classList.add('active');
//         content.style.maxHeight = content.scrollHeight + 'px';
//       }
//     });
//   });
  



// const accordionItems = document.querySelectorAll('.my-information-item');
// document.addEventListener('DOMContentLoaded', function() {

//     // Закриває всі акордеони, окрім першого, який має клас 'active' за замовчуванням
//     for (let i = 1; i < accordionItems.length; i++) {
//         accordionItems[i].querySelector('.my-information-content').style.height = '0';
//     }
    
//     // Додає обробник подій для кожного елемента акордеону
//     accordionItems.forEach(function(item) {
//         item.addEventListener('click', function() {
//             // Закриває всі акордеони, які не мають клас 'active'
//             for (let i = 0; i < accordionItems.length; i++) {
//                 if (accordionItems[i] !== item) {
//                     accordionItems[i].classList.remove('active');
//                     accordionItems[i].querySelector('.my-information-content').style.height = '0';
//                 }
//             }
            
//             // Змінює стан активності поточного елемента і розкриває/закриває його контент
//             item.classList.toggle('active');
//             const content = item.querySelector('.my-information-content');
//             content.style.height = item.classList.contains('active') ? content.scrollHeight + 'px' : '0';
//         });
//     });
// });

