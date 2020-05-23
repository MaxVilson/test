import Component from '@/js/component';

function switchClickHandler(event) {
  event.preventDefault();
  const dollar = this.$el.querySelector('#switch_dollar');
  const pound = this.$el.querySelector('#switch_pound');
  this.$el.classList.toggle('switch_active');
  if (dollar.checked) {
    dollar.checked = false;
    pound.checked = true;
  } else {
    dollar.checked = true;
    pound.checked = false;
  }
}

class SwitchCurrency extends Component {
  init() {
    this.$el.querySelector('.switch__control').addEventListener('click', switchClickHandler.bind(this));
  }
}

export default SwitchCurrency;