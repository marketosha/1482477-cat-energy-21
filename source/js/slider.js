var root = document.querySelector(':root');
var leftButton = document.querySelector(".slider-filter__button--before");
var rightButton = document.querySelector(".slider-filter__button--after");

leftButton.addEventListener("click", function () {
  root.style.setProperty('--slide-shift', '0px');
  root.style.setProperty('--range-position', 'var(--range-position-left)');
});

rightButton.addEventListener("click", function () {
  root.style.setProperty('--slide-shift', 'var(--slide-width)');
  root.style.setProperty('--range-position', 'var(--range-position-right)');
});
