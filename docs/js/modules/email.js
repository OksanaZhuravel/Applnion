export function isEmail() {
  let promo = document.querySelector('.promo__form');
  let promoEmail = promo.querySelector('[name=email]');
  let promoButton = promo.querySelector('.button');
  let form = document.querySelector('.contact');
  let formName = form.querySelector('[name=name]');
  let formEmail = form.querySelector('[name=email]');
  let formAddress = form.querySelector('[name=address]');
  let formComment = form.querySelector('[name=comment]');
  let button = form.querySelector('.button--contact');
  let isStorageSupport = true;
  let storage = '';

  try {
    storage = localStorage.getItem('formEmail');
  } catch (err) {
    isStorageSupport = false;
  }

  formEmail.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (storage) {
      formEmail.value = storage;
      formName.focus();
    } else {
      formEmail.focus();
    }
  });
  formName.addEventListener('click', function (evt) {
    evt.preventDefault();
    button.classList.add('button--show');
  });
  formAddress.addEventListener('click', function (evt) {
    evt.preventDefault();
    button.classList.add('button--show');
  });

  formComment.addEventListener('click', function (evt) {
    evt.preventDefault();
    button.classList.add('button--show');
  });

  form.addEventListener('submit', function (evt) {
    if (!formName.value || !formEmail.value || !formAddress.value) {
      evt.preventDefault();
      button.classList.toggle('button--show');
      formName.focus();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('formEmail', formEmail.value);
        button.classList.toggle('button--show');
        formEmail.classList.toggle('disabled');
        formName.classList.toggle('disabled');
        button.classList.toggle('disabled');
      }
    }
  });

  promoEmail.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log('Клик по ссылке email');
    if (storage) {
      promoEmail.value = storage;
    } else {
      promoEmail.focus();
    }
  });
  promo.addEventListener('submit', function (evt) {
    if (!promoEmail.value) {
      evt.preventDefault();
      promoButton.classList.toggle('button--show');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('promoEmail', promoEmail.value);
        promoButton.classList.toggle('disabled');
        promoButton.classList.toggle('button--show');
      }
    }
  });
}
