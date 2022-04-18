import * as flsFunction from './modules/testweb.js';

flsFunction.isWeb();
// import Swiper, { Scrollbar } from 'swiper';

// new Swiper('.swiper', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     hide: true,
//   },
// });

// Открытие, закрытие мобильного меню
let navMain = document.querySelector('.nav'),
  navToggle = document.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});

// Для мобильных устройств выпадающие меню языка
let body = document.querySelector('.body');
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  // код для мобильных устройств
  body.classList.add('touch');
  let arrowItem = document.querySelectorAll('.lang-list__item');
  for (let i = 0; i < arrowItem.length; i++) {
    let arrowActive = arrowItem[i].querySelector('.arrow');
    arrowItem[i].addEventListener('click', function () {
      arrowItem[i].classList.toggle('open');
      arrowActive.classList.toggle('active');
    });
  }
  let arrowItems = document.querySelector('.popup__item');
  let arrowsActive = arrowItems.querySelector('.arrow');
  arrowItems.addEventListener('click', function () {
    arrowItems.classList.toggle('open');
    arrowsActive.classList.toggle('active');
  });
} else {
  // код для обычных устройств
  body.classList.add('mouse');
  let nav = document.querySelector('.nav');
  nav.classList.remove('nav--closed');
  nav.classList.remove('nav--opened');
}

let linkItem = document.querySelectorAll('.nav__item');
for (let i = 0; i < linkItem.length; i++) {
  let linkActive = linkItem[i].querySelector('.menu__link');
  linkItem[i].addEventListener('click', function () {
    // linkItem[i].classList.toggle('open');
    linkActive.classList.toggle('active');
  });
}
// переключение при смене языка
let sublang = document.querySelector('.sub-lang');
let subItem = sublang.querySelectorAll('.sub-lang__item');

for (let i = 0; i < subItem.length; i++) {
  let subActive = subItem[i].querySelector('.sub-lang__link');
  subItem[i].addEventListener('click', function () {
    subActive.classList.toggle('active');
  });
}
