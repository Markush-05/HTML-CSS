let menuBtn = document.querySelector('.header__btn-mob');

let menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click',function(){
  menuBtn.classList.toggle('header__btn-mob--active');
  menu.classList.toggle('header__menu-open');

})





console.log('Привет от JavaScript!');

console.log(window.location.hash);



// Получаем объект CSSStyleDeclaration 
let el = document.querySelector('.welcome__men');

// Выводим в консоль объект CSSStyleDeclaration 
let elStyles = el.style;
//console.log(elStyles);

var i = 0, howManyTimes = 2;

function f() {
    alert( i );
    i++;
    if( i < howManyTimes ){
        setTimeout( f, 3000 );
    }
    
    setTimeout( "elStyles.cssText = 'transform: translate( 0, 0);'", 3000 );
}


////// скрипти для відстаження розмірів екрану

function resize() {
  if ( $(window).width() < 739) {     
    console.log('розмір менше 800px');
    setTimeout( "elStyles.cssText = 'transform: translate( 0, 0);'", 3000 );
  }
  else {
    console.log('більше 800px');
  }
}
$(window).on("resize", resize);
resize(); // call once initially


//setTimeout( "f();", 1000 );

//

// Получаем инлайновые стили элемента (если таковые имеются) 
//let elStyles = el.style.cssText; 

// Удаляем существующие стили и заменяем их на новые 


// Добавляем новый инлайновый стиль к существующим 
//elStyles.cssText += 'color: green;';



