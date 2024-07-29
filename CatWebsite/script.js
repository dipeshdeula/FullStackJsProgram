// JavaScript code to toggle the hamburger menu animation
document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector(".hamburger-menu");

  // Add click event listener to the hamburger menu icon
  menuToggle.addEventListener("click", function () {
    this.classList.toggle("change"); // Toggle the 'change' class
  });
});

//for carousel image
$(document).ready(function () {
  $("cat-gallery").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

//for carousel image
$(document).ready(function () {
    $(".carousel-gallery").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });
  });
  