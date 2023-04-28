// search 
// let availablekeywords = [
//   'HTML',
//   'CSS',
//   'JS',
//   'WEB TUTORIALS'
// ];

// const resutlBox = document.querySelector(".result-box");
// const inputBox = document.querySelector("input-box");

// inputBox.onkeyup = function (){
//   let result = [];
//   let input = inputBox.value;
//   if(input.length){
//     result = availablekeywords.filter((keyword) => {
//       return keyword.toLowerCase().includes(input.toLowerCase());
//     });
//     console.log(result);
//   }
// }

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