var navMain = document.querySelector(".page-header");
var navToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("page-header--nojs");

navToggle.onclick = function () {
  navMain.classList.toggle("page-header--opened");
};
