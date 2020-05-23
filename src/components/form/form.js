import Component from '@/js/component';
import validator from 'validator';

const spinner = document.querySelector('.spinner');

const showSpinner = () => {
  spinner.classList.add('spinner_show');
};

const hideSpinner = () => {
  spinner.classList.remove('spinner_show');
};

const clearErrorFetch = () => {
  const err = document.querySelector('.error');
  if (err) {
    err.remove();
  }
};

const errorFetch = (text) => {
  const form = document.querySelector('.form');
  const div = document.createElement('div');
  div.classList.add('error');
  div.innerText = text;
  form.appendChild(div);
};

const successFetch = () => {
  const page = document.querySelector('.page__wrapper')
  const form = document.querySelector('.form');
  const tabs = document.querySelector('.tabs');
  const h1 = document.createElement('h1');
  form.classList.add('hide');
  tabs.classList.add('hide');
  h1.classList.add('success');
  h1.innerText = 'Account is created, and you can proceed to login.';
  page.appendChild(h1);
}

function submitHandler(event) {
  event.preventDefault();
  let formData = {};

  if (document.querySelector('.tabs').dataset.type === 'email') {
    formData = {
      email: this.$el.email.value,
      terms: this.$el.terms.checked,
      promo: this.$el.promo.checked,
      switch: this.$el.switch_currency.value,
    };

    if (!validator.isEmail(formData.email)) {
      this.$el.email.nextElementSibling.classList.add('show');
      return;
    }
    this.$el.email.nextElementSibling.classList.remove('show');
  } else if (document.querySelector('.tabs').dataset.type === 'phone') {
    formData = {
      phone: this.$el.phone.value,
      terms: this.$el.terms.checked,
      promo: this.$el.promo.checked,
      switch: this.$el.switch_currency.value,
    };

    if (!validator.isMobilePhone(formData.phone)) {
      this.$el.phone.nextElementSibling.classList.add('show');
      return;
    }
    this.$el.phone.nextElementSibling.classList.remove('show');
  }

  clearErrorFetch();

  if (!formData.terms) {
    errorFetch('Please confirm terms and conditions!');
    return;
  }

  showSpinner();

  fetch('http://www.mocky.io/v2/5ec9922d3000009700a6ce1c', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      hideSpinner();
      successFetch();
    })
    .catch((error) => {
      hideSpinner();
      errorFetch('Error! Please try again');
    });
};

class Form extends Component {
  init() {
    this.$el.addEventListener('submit', submitHandler.bind(this));
  }
}

export default Form;
