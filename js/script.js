// looping events in input while user searches 
const search = () => {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const eventitems = document.getElementById("event-list")
  const event = document.querySelectorAll(".event")
  const ename = eventitems.getElementsByTagName("h3")

  for(var i = 0; i < ename.length; i++) {
    let match = event[i].getElementsByTagName('h3')[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        event[i].style.display = "";
      } else {
        event[i].style.display = "none";        
      }
    }
  }
} 

// jquery functions 
$(".sec-nav").hide();
$( document ).ready(function() {
$(".menu-icon").click(function(){
    $(".sec-nav").slideToggle();
});
});

// hiding content before typing
$(".search").on('keyup', function() {
  var searchValue = $(this).val();
  searchAndFilter(searchValue)
});

function searchAndFilter(searchTerm) {
  if (searchTerm == '') {
    $("#event-list").hide()
  } else {
    $("#event-list").each(function() {
      var currentText = $(this).text();
      currentText = currentText.toUpperCase();
      searchTerm = searchTerm.toUpperCase();
      if (currentText.indexOf(searchTerm) >= 0) {
        $(this).show();
      }
    });
  }
}

$(document).ready(function() {
  $("#event-list").hide();
});

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}