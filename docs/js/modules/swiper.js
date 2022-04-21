import Swiper from 'swiper/bundle';

export function isSwaper() {
  new Swiper('.help__foto', {
    // loop: true,
    // simulateTouch: true,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });
}
