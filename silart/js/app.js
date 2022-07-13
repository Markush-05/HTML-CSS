let menuBtn = document.querySelector('.header__btn-mob');

let menu = document.querySelector('.menu');



menuBtn.addEventListener('click',function(){
  menuBtn.classList.toggle('header__btn-mob--active');
  menu.classList.toggle('menu__open');
  document.body.classList.toggle('body-overflow');
})

$(document).ready(function(){
  $('.slider-w').slick({
    arrows:true,  // стрілки
    dots:true,
    adptiveHeight:true, /// адаптивний розмір слайдера відносно картинки
    slidesToShow:1, //кількість показуємих слайдерів
    slidesToScroll:1, // скальки проскролювати картин
    speed:500,   // швидкість пролистування
    initialSlide:0, /// Початковий слайдер
    autoplay:true, // авто слайдер 
    autoplaySpeed:1000, // інтервал авто прокручування
    pauseOnFocus:true, //зупинка при натисканні 
    pauseOnHover:true, /// пауза при наведенні 
    pauseOnDotsHover:true,// при наведені на точки
    draggable:true, // Виключає пролистування сишкою для ПК
    swipe: true, // Виключає пролистування сишкою для моба

  });
   
});


var header = $(".header");
var scrollChange = 2;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('bg-wit');
    } else {
        header.removeClass("bg-wit");
    }
});

$(document).ready(function(){
  $('.slider-news').slick({
    arrows:true,  // стрілки
    dots:false,    //номерація
    adptiveHeight:true, /// адаптивний розмір слайдера відносно картинки
    slidesToShow: 1, //кількість показуємих слайдерів
    slidesToScroll:1, // скальки проскролювати картин
    speed:1500,   // швидкість пролистування
    initialSlide:0, /// Початковий слайдер
  //  autoplay:true, // авто слайдер 
    autoplaySpeed:1000, // інтервал авто прокручування
    pauseOnFocus:true, //зупинка при натисканні 
    pauseOnHover:true, /// пауза при наведенні 
    pauseOnDotsHover:true,// при наведені на точки
    draggable:true, // Виключає пролистування сишкою для ПК
    swipe: true, // Виключає пролистування сишкою для моба
    variableWidth:true // не задає авто відстань  
    

 

  // dots: false,
  // arrows: false,
   //slide: '.slick-slideshow__slide',
  // slidesToShow: 1,
   //centerMode: true,
   //centerPadding: '250px',


    
  

  
    
  });
   
});






///// footer


//let menufooter = document.querySelector('.footer-menu__title');

//let listfooter = document.querySelector('.footer-menu__list');



//menufooter.addEventListener('click',function(){
//  menufooter.classList.toggle('footer-menu__title--active');
//  listfooter.classList.toggle('footer-menu__list--active');
  
//})



$(document).ready(function () {
  $('.footer-menu__title').click(function(e){
    e.preventDefault();

    $(this).toggleClass('footer-menu__title--active');
    $(this).siblings('.footer-menu__list').toggleClass('footer-menu__list--active');
  });
});
  



////- меню каталог
$(document).ready(function () {
  $('.menu-catalog__header').click(function(e){
    e.preventDefault();

    $(this).toggleClass('menu-catalog__header--active');
    $(this).siblings('.menu-catalog__list').toggleClass('menu-catalog__list--active');
  });
});



///////////////////////////////////// ___ slik slider ___ product-pag


$('.slider-product-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-product-nav'
  
});
$('.slider-product-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-product-for',
  dots: true,
  focusOnSelect: true,
  variableWidth:false, // не задає авто відстань 
  dots:false,    //номерація 
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-product-nav').slick('slickGoTo', slideno - 1);
});


//////////////////////////

