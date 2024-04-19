import axios from 'axios';
import iziToast from 'izitoast';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api-docs';
const workTogetherForm = document.querySelector('.work-together-form');
const emailInput = document.querySelector('#work-together-email');
const commentInput = document.querySelector('#work-together-comment');
const message = document.querySelector('.email-text');
const backdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.work-together-modal-window');
const closeModalBtn = document.querySelector('.work-together-modal-btn');
const scrollUpBtn = document.querySelector('.scroll-up-btn');

class UserComent {
  constructor(mail, comment) {
    this.email = mail;
    this.comment = comment;
    this.id = Date.now();
  }
}

const onClose = event => {
  if (
    event.target.classList.contains('backdrop') ||
    event.target.nodeName === 'svg'
  ) {
    scrollUpBtn.classList.add('visible');
    document.body.classList.remove('backdrop-opened');
    backdrop.classList.remove('backdrop-is-open');
    modalWindow.classList.remove('window-is-open');
    document.body.removeEventListener('click', onClose);
  }
};

const onEscClose = event => {
  console.log(event.key);
  if (event.key === 'Escape') {
    scrollUpBtn.classList.add('visible');
    document.body.classList.remove('backdrop-opened');
    backdrop.classList.remove('backdrop-is-open');
    modalWindow.classList.remove('window-is-open');
    window.removeEventListener('click', onEscClose);
  }
};

const submitHandler = async event => {
  try {
    event.preventDefault();
    document.body.classList.add('cursor-wait');
    const mail = emailInput.value;
    const comment = commentInput.value;
    scrollUpBtn.classList.remove('visible');
    await axios.post('/requests', new UserComent(mail, comment));
    event.target.reset();
    document.body.classList.add('backdrop-opened');
    backdrop.classList.add('backdrop-is-open');
    modalWindow.classList.add('window-is-open');
    document.body.addEventListener('click', onClose);
    window.addEventListener('keydown', onEscClose);
    document.body.classList.remove('cursor-wait');
  } catch (error) {
    console.log(error);
    iziToast.show({
      title: 'Error',
      message:
        'Unexpected error happend during submiting your review, please try again later',
      backgroundColor: '#ed3b44;',
      theme: 'dark',
      color: 'red',
      position: 'bottomRight',
    });
  }
};

const emailValidation = mail => {
  const validRegex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return mail.match(validRegex);
};
const inputCheckHandler = () => {
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
    }, 1500);
  } else {
    message.classList.add('incorrect-text');
    message.textContent = 'Invalid email, try again';
    emailInput.classList.add('incorrect-input');
    setTimeout(() => {
      message.classList.remove('incorrect-text');
      emailInput.classList.remove('incorrect-input');
    }, 1500);
  }
};

const onScroll = () => {
  if (window.scrollY > 200 && !scrollUpBtn.classList.contains('visible')) {
    scrollUpBtn.classList.add('visible');
  } else if (
    window.scrollY <= 200 &&
    scrollUpBtn.classList.contains('visible')
  ) {
    scrollUpBtn.classList.remove('visible');
  }
};

if (
  window.scrollY > 200 &&
  !scrollUpBtn.classList.contains('visible') &&
  !backdrop.classList.contains('backdrop-is-open')
) {
  scrollUpBtn.classList.add('visible');
}

document.addEventListener('scroll', onScroll);

workTogetherForm.addEventListener('submit', submitHandler);

emailInput.addEventListener('blur', inputCheckHandler);
