"use strict";

/*
let menuBtn = document.querySelector('.btn-menu');
let menu = document.querySelector('.menu');
let menu_btn = document.querySelector('.side-bar');

menuBtn.addEventListener('click',function(){
  menuBtn.classList.toggle('btn-menu--active');
  menu.classList.toggle('menu--open');
  menu_btn.classList.toggle('side-bar--desktop');
  document.body.classList.toggle('body-overflow');
})
*/
///////////___блокіровка кліка
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('menu--open');
  btnMenu.classList.toggle('btn-menu--active');
  document.body.classList.toggle('body-overflow');
};

btnMenu.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
});
document.addEventListener('click', function (e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_btnMenu = target == btnMenu;
  var menu_is_active = menu.classList.contains('menu--open');

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});
var accounBtn = document.querySelector('.account__btn'); //accounBtn.addEventListener('click',function(){

accounBtn.onclick = function (evt) {
  evt.preventDefault();
  document.querySelector('.account-list').classList.toggle('account-list--active');
  document.querySelector('.account__btn').classList.toggle('account__btn--rotate'); //.style.transform = 'rotate(180deg)';
};