'use strict';

(function () {

var menuBurgerBtn = document.querySelector('.menu-burger__btn');
var sidebarMenu = document.querySelector('.sidebar-menu');

var menuBurgerBtnClickHandler = function () {
  if (sidebarMenu.offsetLeft === -265) {
    sidebarMenu.setAttribute('style', 'left: 0');
    window.popupsmain.body.classList.add('modal-open');
  } else {
    sidebarMenu.removeAttribute('style');
    window.popupsmain.body.classList.remove('modal-open');
  }
};

menuBurgerBtn.addEventListener('click', menuBurgerBtnClickHandler);

window.popupsmain;

})();
