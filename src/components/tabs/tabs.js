import Component from '@/js/component';

function tabClickHandler(event) {
  event.preventDefault();

  if (event.target.classList.contains('tabs__link')) {
    this.$el.querySelectorAll('.tabs__link').forEach((tab) => {
      tab.classList.remove('tabs__link_active');
    });

    event.target.classList.add('tabs__link_active');
    const activeTab = this.tabs.find((e) => e.name === event.target.dataset.name);
    this.$el.dataset.type = activeTab.name;
    this.tabs.forEach((e) => e.component.hide());
    activeTab.component.show();
  }
}

class Tabs extends Component {
  constructor(el) {
    super(el);
    this.tabs = [];
  }

  init() {
    this.$el.addEventListener('click', tabClickHandler.bind(this));
  }

  registerTabs(tabs) {
    this.tabs = tabs;
  }
}

export default Tabs;
