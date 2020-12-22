const headerToggle= document.querySelector(".page-header__toogle");
const headerNavigation = document.querySelector(".page-header");
headerNavigation.classList.remove('.page-header--nojs');

headerToggle.addEventListener("click" ,function(evt){
  evt.preventDefault();
  headerNavigation.classList.toggle("page-header--opened");
});
