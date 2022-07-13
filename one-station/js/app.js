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
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

const toggleMenu = function() {
    menu.classList.toggle('menu--open');
    btnMenu.classList.toggle('btn-menu--active');
    document.body.classList.toggle('body-overflow');
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('menu--open');
    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});


let accounBtn = document.querySelector('.account__btn');

//accounBtn.addEventListener('click',function(){

accounBtn.onclick = function (evt) { 
    evt.preventDefault();   
    document.querySelector('.account-list').classList.toggle('account-list--active');
    document.querySelector('.account__btn').classList.toggle('account__btn--rotate');//.style.transform = 'rotate(180deg)';
}

