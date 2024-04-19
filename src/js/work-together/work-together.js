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

class UserComent {
  constructor(mail, comment) {
    this.email = mail;
    this.comment = comment;
    this.id = Date.now();
  }
}

const onCloseBtn = event => {
  document.body.classList.remove('backdrop-opened');
  backdrop.classList.remove('is-open');
  modalWindow.classList.remove('window-is-open');
  closeModalBtn.removeEventListener('click', onCloseBtn);
};

const submitHandler = event => {
  event.preventDefault();
  const mail = emailInput.value;
  const comment = commentInput.value;
  axios
    .post('/requests', new UserComent(mail, comment))
    .then(data => {
      event.target.reset();
      document.body.classList.add('backdrop-opened');
      backdrop.classList.add('is-open');
      modalWindow.classList.add('window-is-open');
      closeModalBtn.addEventListener('click', onCloseBtn);
    })
    .catch(error => {
      iziToast.show({
        title: 'Error',
        message:
          'Unexpected error happend during submiting your review, please try again later',
        backgroundColor: '#ed3b44;',
        theme: 'dark',
        color: 'red',
        position: 'bottomRight',
      });
    });
};

const emailValidation = mail => {
  const validRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return mail.match(validRegex);
};
const inputCheckHandler = event => {
  const mail = emailInput.value;
  if (mail === '') {
    return;
  }
  if (emailValidation(mail)) {
    message.classList.add('correct-text');
    emailInput.classList.add('correct-input');
    message.textContent = 'Succes!';
    setTimeout(() => {
      message.classList.remove('correct-text');
      emailInput.classList.remove('correct-input');
    }, 1000);
  } else {
    message.classList.add('incorrect-text');
    message.textContent = 'Invalid email, try again';
    emailInput.classList.add('incorrect-input');
    setTimeout(() => {
      message.classList.remove('incorrect-text');
      emailInput.classList.remove('incorrect-input');
    }, 1000);
  }
};

workTogetherForm.addEventListener('submit', submitHandler);

emailInput.addEventListener('blur', inputCheckHandler);
