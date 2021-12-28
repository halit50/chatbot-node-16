import Tchat from './tchat';

import './index.scss';

const bots = [{
  id: 1,
  name: 'Ronnie',
  avatar: 'https://www.startnplay.com/wp-content/uploads/2019/02/Ronaldinho.png',
  countMessage: 0,
  actions: [{
    name: 'hello',
    keywords: ['hello', 'bonjour'],
    action: () => 'Bonjour Halit'
  }]
}, {
  id: 2,
  name: 'Zizou',
  avatar: 'https://www.foot01.com/img/images/1200x/2021/Oct/26/zidane-et-le-psg-l-info-choc-icon_ecommercefotos-ecommerce2-112591191-326643.jpg',
  countMessage: 0
}, {
  id: 3,
  name: 'Messi',
  avatar: 'https://images.rtl.fr/~c/770v513/rtl/www/1441006-lionel-messi-le-16-mai-2021.jpg',
  countMessage: 0,
  actions: [{
    name: 'hello',
    keywords: ['hello', 'bonjour'],
    action: () => 'Bonjour Halit'
  }]
}];

const chatbot = new Tchat(bots);

chatbot.run();
