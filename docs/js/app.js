import * as flsFunction from './modules/testweb.js';

flsFunction.isWeb();

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
} else {
  // код для обычных устройств
  body.classList.add('mouse');
  let nav = document.querySelector('.nav');
  nav.classList.remove('nav--closed');
  nav.classList.remove('nav--opened');
}
