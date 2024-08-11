// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
});

//for carousel image
$(document).ready(function(){
    $(".gallery_wrapper").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
    });
});

//video carousel
$('#videoCarousel').on('slide.bs.carousel', function () {
    // Stop video playback on slide change
    $(this).find('iframe').each(function () {
        $(this).attr('src', $(this).attr('src'));
    });
});


//date integration
$(document).ready(function(){
    $("#date").datepicker();
    });

