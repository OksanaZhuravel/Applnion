export function isLanguage() {
  // переключение при смене языка
  let sublang = document.querySelector('.sub-lang');
  let subItem = sublang.querySelectorAll('.sub-lang__item');

  for (let i = 0; i < subItem.length; i++) {
    let subActive = subItem[i].querySelector('.sub-lang__link');
    subItem[i].addEventListener('click', function () {
      subActive.classList.toggle('active');
    });
  }
}
