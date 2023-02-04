// jquery functions 
$(".sec-nav").hide();
$( document ).ready(function() {
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

// translations 
function loadGoogleTranslate(){
  new google.translate.TranslateElement (
      "google_element");
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}