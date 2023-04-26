// search 
const dataSiteSearch = document.querySelector("[data-site-search]")
const searchInput = document.querySelector("[data-search]")

searchInput.addEventListener("input", (e) => {
  const value = e.target.value 
  console.log(value)
});

// jquery functions 
$(".sec-nav").hide();
$( document ).ready(function() {
$(".menu-icon").click(function(){
    $(".sec-nav").slideToggle();
});
});

// translations 
// function loadGoogleTranslate(){
//   new google.translate.TranslateElement (
//       "google_element");
// }

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}