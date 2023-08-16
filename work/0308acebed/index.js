$('.scMenu li').click(function(e){
    e.preventDefault()
    $('.scMenu li').removeClass('on')
    $(this).addClass('on')
let idx=$(this).index()
let wt=$('.hSlideWrap .slide').outerWidth()

let ht=$('.vSlideWrap .slide').outerHeight()
// alert(ht)
// alert(idx)
$('.vSlideWrap .slide').removeClass('on')
$('.vSlideWrap .slide').eq(idx).addClass('on')

$('.hSlideWrap').stop().animate({'margin-left':-idx*wt},1000)

$('.vSlideWrap').stop().animate({'margin-top':-idx*ht},1000)

})

// sect3 슬라이드
var swiper = new Swiper("#sect3 .swiper", {
    slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
  
//   sect3 탭
$('.tab ul li').click(function(e){
    e.preventDefault()
    $('.tab ul li').removeClass('on')
    $(this).addClass('on')
let idx=$(this).index()

    $('.con').removeClass('on')
    $('.con').eq(idx).addClass('on')



})

// sect1 메인슬라이드
var swiper2 = new Swiper(".mySwiper", {


  navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
}
})

// sect4
var swiper3 = new Swiper(".mySwiper2")
$('.event li').click(function(e){
e.preventDefault()
let idx=$(this).index()
$('.event li').removeClass('on')
$(this).addClass('on')
swiper3.slideTo(idx,500)

})
swiper3.on('slideChange',function(){
let idx=swiper3.activeIndex
$('.event li').removeClass('on')
$('.event li').eq(idx).addClass('on')

})
