const navSlide = () => {
  var burger = document.querySelector(".hamburger");
  var navbar = document.querySelector(".fullNavbar");
  var homeNavlink = document.querySelector(".homeNavlink");
  var aboutNavlink = document.querySelector(".aboutNavlink");
  var worksNavLink = document.querySelector(".worksNavlink");
  var contactNavLink = document.querySelector(".contactNavlink");

  burger.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  homeNavlink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  aboutNavlink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  worksNavLink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });

  contactNavLink.addEventListener("click", () => {
    navbar.classList.toggle("fullNavbarActive");
    burger.classList.toggle("toggle");
  });
};

const knowMore = () => {
  var buttonKnowMore = document.querySelector(".knowMoreAbout");
  var fullKnowMore = document.querySelector(".hiddenKnowMoreSection");
  var backAarrowMore = document.querySelector(
    ".hiddenKnowMoreSectionArrowBack"
  );

  buttonKnowMore.addEventListener("click", () => {
    fullKnowMore.classList.toggle("activeHiddenAbout");
  });

  backAarrowMore.addEventListener("click", () => {
    fullKnowMore.classList.toggle("activeHiddenAbout");
  });
};

$( document ).ready(function(){
        new WOW().init(); 
    });


//also at the window load event
$(window).on('load', function(){

     new WOW().init(); 
});

knowMore();
navSlide();

//Initialisation de la fonction de l'API Javascript
function initMap() {
  var epitech = { lat: 45.74671126902152, lng: 4.834958581829663 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: epitech,
  });
  var marker = new google.maps.Marker({
    position: epitech,
    map: map,
  });
}
