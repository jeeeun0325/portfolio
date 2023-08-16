var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 50,
    effect:"fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});
var swiper3 = new Swiper(".mySwiper3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: -200,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
var swiper6 = new Swiper(".rosecel", {
    slidesPerView: 4,
    spaceBetween: 0,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
  el: ".swiper-pagination",
  type: "progressbar",
},


});


var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 4,
    spaceBetween: 0,
    
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
swiper4.controller.control = swiper6;
swiper6.controller.control = swiper4;

var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next.sw5",
        prevEl: ".swiper-button-prev.sw5",
    },
});

var swiper7 = new Swiper(".roseSlide", {
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
   
    
});

$(".youtube").colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 });

setInterval(function(){
$('.slideWrap').animate({marginLeft:'-100%'},function(){
$('.roseslide:first').appendTo('.slideWrap')
$('.slideWrap').css({marginLeft:'0px'})
})

},3000)

setInterval(function(){
    $('.slideWrap2').animate({marginTop:'-60vh'},function(){
    $('.roseslide2:first').appendTo('.slideWrap2')
    $('.slideWrap2').css({marginTop:'0px'})
    })
    
    },3000)