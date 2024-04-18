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
  document.body.classList.remove('backdrop-opened');
  backdrop.classList.remove('is-open');
  modalWindow.classList.remove('window-is-open');
  closeModalBtn.removeEventListener('click', onCloseBtn);
};

const submitHandler = event => {
  event.preventDefault();
  event.target.reset();
  axios
    .post('/requests', {
      email: emailInput.value,
      comment: commentInput.value,
    })
    .then(data => {
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
  return (
    mail.includes('@') &&
    mail.indexOf('@') !== 0 &&
    mail.includes('.') &&
    mail.indexOf('@') === mail.lastIndexOf('@') &&
    mail.lastIndexOf('.') > mail.lastIndexOf('@') &&
    mail.indexOf('.') !== mail.length - 1 &&
    mail.lastIndexOf('.') - mail.indexOf('@') > 1
  );
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
