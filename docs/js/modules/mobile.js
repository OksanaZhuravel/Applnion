export function isMobile() {
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
}
