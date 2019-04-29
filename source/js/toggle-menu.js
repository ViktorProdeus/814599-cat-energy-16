var toogleMenu = document.querySelector('.page-header__toggle');
var mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--no-js');
toogleMenu.classList.remove('page-header__toggle--no-js');

toogleMenu.addEventListener('click', function () {
  toogleMenu.classList.toggle('page-header__toggle--closed');
  toogleMenu.classList.toggle('page-header__toggle--open');
  mainNav.classList.toggle('main-nav--open');
});
