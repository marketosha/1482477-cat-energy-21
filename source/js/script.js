var navMain = document.querySelector(".page-header");
var navToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("page-header--nojs");

navToggle.onclick = function () {
  navMain.classList.toggle("page-header--opened");
};

var elem = document.querySelector(".program-example__slider")
var root = document.querySelector(":root");
var leftButton = document.querySelector(".slider-filter__button--before");
var rightButton = document.querySelector(".slider-filter__button--after");

if (elem) {
  leftButton.addEventListener("click", function () {
    root.style.setProperty("--slide-shift", "0px");
    root.style.setProperty("--range-position", "var(--range-position-left)");
  });

  rightButton.addEventListener("click", function () {
    root.style.setProperty("--slide-shift", "var(--slide-width)");
    root.style.setProperty("--range-position", "var(--range-position-right)");
  });
}
