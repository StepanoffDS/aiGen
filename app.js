// Burger menu

document.querySelector('.nav__icon').addEventListener('click', function () {
  this.classList.toggle('_active');
  document.querySelector('.nav__list').classList.toggle('_open');
  document.querySelector('.header__button').classList.toggle('_open');
});

// Hide header

let lastScroll = 0;
const header = document.querySelector('.header');

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
  if (window.innerWidth >= 1023) {
    if (scrollPosition() > lastScroll && !containHide()) {
      //scroll down
      header.classList.add('hide');
    } else if (scrollPosition() < lastScroll && containHide()) {
      //scroll up
      header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
  }
});

function resizeDisplay() {
  const spanDescr = [
    document.querySelector('.table__items.item-1 .item__description span'),
    document.querySelector('.table__items.item-2 .item__description span'),
    document.querySelector('.table__items.item-3 .item__description span'),
    document.querySelector('.table__items.item-4 .item__description span'),
  ];

  if (window.innerWidth <= 540) {
    spanDescr.forEach((i) => i.classList.add('_text-hidden'));
  } else if (window.innerWidth > 540) {
    spanDescr.forEach((i) => i.classList.remove('_text-hidden'));
  }

  if (window.innerWidth <= 767) {
    document.querySelector('.intro__title').classList.remove('inner');
    document
      .querySelector('.footer__menu .row-3 span')
      .classList.add('_text-hidden');
  } else if (window.innerWidth > 767) {
    document.querySelector('.intro__title').classList.add('inner');
    document
      .querySelector('.footer__menu .row-3 span')
      .classList.remove('_text-hidden');
  }
}

resizeDisplay();

window.addEventListener('resize', () => resizeDisplay());

// Smooth Scroll

SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime: 600,
  // Размер шага в пикселях
  stepSize: 75,

  // Дополнительные настройки:

  // Ускорение
  accelerationDelta: 30,
  // Максимальное ускорение
  accelerationMax: 2,

  // Поддержка клавиатуры
  keyboardSupport: true,
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll: 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm: true,
  pulseScale: 4,
  pulseNormalize: 1,

  // Поддержка тачпада
  touchpadSupport: true,
});
