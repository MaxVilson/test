class Component {
  constructor(el) {
    this.$el = document.querySelector(el);
    this.init();
  }

  init() {}

  hide() {
    this.$el.classList.add('hide');
  }

  show() {
    this.$el.classList.remove('hide');
  }
}

export default Component;
