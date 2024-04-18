import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api-docs';
const workTogetherForm = document.querySelector('.work-together-form');
const emailInput = document.querySelector('#work-together-email');
const commentInput = document.querySelector('#work-together-comment');
const message = document.querySelector('.email-text');
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.work-together-modal-window');
const closeModalBtn = document.querySelector('.work-together-modal-btn');

const onCloseBtn = event => {
  backdrop.classList.remove('is-open');
  modalWindow.classList.remove('window-is-open');
  message.classList.add('correct-text');
  emailInput.classList.add('correct-input');
  message.textContent = 'Succes!';
  setTimeout(() => {
    message.classList.remove('correct-text');
    emailInput.classList.remove('correct-input');
  }, 2000);
  closeModalBtn.removeEventListener('click', onCloseBtn);
};

const submitHandler = event => {
  event.preventDefault();
  if (commentInput.value.trim() === '') {
    iziToast.show({
      title: 'Error',
      message: 'Wrong value in comment.',
      backgroundColor: 'tomato',
      theme: 'dark',
      color: 'red',
      position: 'bottomRight',
    });
    return;
  }
  axios
    .post('/requests', {
      email: emailInput.value,
      comment: commentInput.value,
    })
    .then(() => {
      backdrop.classList.add('is-open');
      modalWindow.classList.add('window-is-open');
      closeModalBtn.addEventListener('click', onCloseBtn);
    })
    .catch(() => {
      message.classList.add('incorrect-text');
      message.textContent = 'Invalid email, try again';
      emailInput.classList.add('incorrect-input');
      setTimeout(() => {
        message.classList.remove('incorrect-text');
        emailInput.classList.remove('incorrect-input');
      }, 2000);
    });
};

workTogetherForm.addEventListener('submit', submitHandler);
console.log(modalWindow);
