$(document).ready(function () {
  $('.footer__title').click(function(e){
    e.preventDefault();

    $(this).toggleClass('footer__title--active');
    $(this).siblings('.menu-footer').toggleClass('menu-footer--active');
  });
});
  
var tl = gsap.timeline()
tl.from(".header", 0.5, {
  y:'-100%',
  opacity: 0,
})
gsap.from(".welcome__men", 1.5, {
  x:'100%',
  opacity: 0,
  scale: 0.3,
})
tl.from(".welcome__text", 1, {
  x:'-100%',
  opacity: 0,
  scale: 0.3,
})
tl.from(".welcome__btn", 0.5, {
  opacity: 0,
  scale: 0.3,
})

const text = document.querySelector(".welcome__title");
const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<div class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
			`</div>`;
	});
	return el;
};
const split = splitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
	TweenMax.from(el, 1.5, {
		opacity: 0,
		scale: .1,
		x: random(-500, 500),
		y: random(-500, 500),
		z: random(-500, 500),
		repeat: 0,
	})
});

gsap.timeline({
  scrollTrigger: {
    trigger: ".choice",
    start: "top 700px",
    end: "bottom center",
    markers: true,
    scrub: true
  }
})
.from(".choice__item-1", {x: "100%", opacity: 0})
.from(".choice__item-2", {x: "100%", opacity: 0})
.from(".choice__item-3", {x: "100%", opacity: 0})
.from(".choice__item-4", {x: "100%", opacity: 0})
.from(".choice__item-5", {x: "100%", opacity: 0})
.from(".choice__item-6", {x: "100%", opacity: 0})

