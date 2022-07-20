console.log('hello');
// jquery functions 
$(".sec-nav").hide();
$( document ).ready(function() {
    console.log( "ready!" );

$(".menu-btn").click(function(){
    $(".sec-nav").fadeToggle();
});
});
// ==========================================================
//	HAMBURGER MENU
// ==========================================================
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// menu click away fix
// window.addEventListener('mouseup', function(event){
//     var box = document .getElementById('box1');
//     if(event.target = box && event.target.parentNode != box){
//         box.style.display = 'none';
//     }
// });

// slideshow 
var slideIndex = 0;
showSlides();
function showSlides() {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 3000); // Change image every 2 seconds
}