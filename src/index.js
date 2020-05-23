import Tabs from '@/components/tabs/tabs';
import Input from '@/components/input/input';
import Form from '@/components/form/form';
import SwitchCurrency from '@/components/switch/switch';
import './scss/index.scss';

const tabs = new Tabs('.tabs');
const email = new Input('#email');
const phone = new Input('#phone');
const form = new Form('.form');
const switchCurrency = new SwitchCurrency('.switch');

tabs.registerTabs([
  { name: 'email', component: email },
  { name: 'phone', component: phone },
]);
