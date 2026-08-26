// jquery functions
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $(".sec-nav").toggleClass("open");
    $(this).toggleClass("fa-bars fa-xmark");
  });

  $(".sec-nav a").on("click", function () {
    $(".sec-nav").removeClass("open");
    $(".menu-icon").removeClass("fa-xmark").addClass("fa-bars");
  });
});

// navbar bg change when scrolling
$(document).ready(function(){
  $(window).scroll(function(){
      if($(window).scrollTop() > 100){
          $(".home-nav").addClass("scrolled");
      }
      else{
          $(".home-nav").removeClass("scrolled");
      }

  })
})

// hero heading word-by-word reveal
document.addEventListener("DOMContentLoaded", function () {
  var heroHeading = document.querySelector(".js-hero-heading");
  if (heroHeading) {
    var words = heroHeading.textContent.trim().split(/\s+/);
    heroHeading.innerHTML = words
      .map(function (word) {
        return '<span class="hero-word">' + word + "</span>";
      })
      .join(" ");
    var spans = heroHeading.querySelectorAll(".hero-word");
    spans.forEach(function (span, i) {
      setTimeout(function () {
        span.classList.add("in-view");
      }, 200 + i * 120);
    });
  }

  // newsletter form -> whatsapp (no email backend configured)
  var newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = document.getElementById("newsletter-email").value.trim();
      var text = encodeURIComponent(
        "Hola! Quiero suscribirme a las novedades de Mastertouch. Mi correo es: " + email
      );
      window.open("https://api.whatsapp.com/send?phone=573239608399&text=" + text, "_blank");
      newsletterForm.reset();
    });
  }

  // faq accordion
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var head = item.querySelector(".faq-item__head");
    var body = item.querySelector(".faq-item__body");
    if (!head || !body) return;
    head.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-item__body").style.maxHeight = null;
        }
      });
      if (isOpen) {
        item.classList.remove("open");
        body.style.maxHeight = null;
      } else {
        item.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
});

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// aos animations
AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
});

// re-check aos when landing directly on a hash (e.g. nav link jump) so the
// target section isn't stuck invisible before the user scrolls again
if (window.location.hash) {
  window.addEventListener("load", function () {
    setTimeout(function () {
      AOS.refreshHard();
    }, 300);
  });
}