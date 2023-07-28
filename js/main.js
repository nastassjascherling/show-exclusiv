/* Nav: Menü einblenden */

$(".nav__hamburger__balken").click(function(){
    
    $(".nav__hamburger__menu").toggleClass("show-menu");
    $(".nav__hamburger__balken").toggleClass("balken-x");

});


/* Index: Autoscroll Banner/Karussel */

const carouselWrap = document.getElementsByClassName("carousel__wrap");
    
for (var i=0,l=carouselWrap.length;i<l;i++) {
    carouselWrap[i].appendChild(carouselWrap[i].firstChild.nextSibling.cloneNode(true));
}


/* Projekte: Projektübersicht ein-/ausblenden */


$(".twoCols__btn").click(function(){
    $(this).closest(".twoCols__container").toggleClass("projectDetails");
})


/* About: load more button*/

$(".loadMore").click(function(){

    $(".squareCard:nth-child(n+10)").toggle();

    if ($(".loadMore").text() == "Weniger anzeigen") {
        $(".loadMore").text("Mehr laden");
    } else {
        $(".loadMore").text("Weniger anzeigen");
    }
    
})

/* ESC zum Schließen */

document.addEventListener('keydown',function(ev) {
    if(ev.keyCode===27) {
      let projektDetail = document.querySelectorAll('.twoCols__container');
      for(var i=0,l=projektDetail.length;i<l;i++) {
        projektDetail[i].classList.remove("projectDetails");
      }

      let navMenu = document.querySelectorAll('.nav__hamburger__menu');
      for(var i=0,l=navMenu.length;i<l;i++) {
        navMenu[i].classList.remove("show-menu");
      }
    }
});

/* Swiper */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1250: {
          slidesPerView: 3,
          spaceBetween: 30,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },

    keyboard: {
    enabled: true,
    },
});

/* Animation on scroll */

AOS.init();
