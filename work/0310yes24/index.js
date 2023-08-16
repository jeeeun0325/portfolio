$('.tabmenu ul li a').click(function(e){
    e.preventDefault()
    $('.tabmenu ul li a').removeClass('on')
    $(this).addClass('on')

let href=$(this).attr('href')
$('.tab').fadeOut()
$(href).fadeIn()


})
$('.ranking ul li').mouseenter(function(){

$('.ranking ul li').removeClass('on')
$(this).addClass('on')


})


var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    speed:1000,
     autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 
    
  });

// 호버하면 썸네일 위로 올라옴
$('.thumbnail').mouseenter(function(){
$('.thumbnail').stop().animate({'bottom':'1px'})

})

$('.thumbnail').mouseleave(function(){
  $('.thumbnail').stop().animate({'bottom':'-142px'})
  
  })


  // 썸네일 클릭하면 슬라이드가 바뀜
$('#thumb ul li').click(function(e){
e.preventDefault()
var idx=$(this).index()
$('#thumb ul li').removeClass('on')
$(this).addClass('on')
swiper.slideTo(idx,500)

})
$('#thumb ul li').mouseenter(function(){
$('#thumb ul li').removeClass('on')
$('#thumb ul li span').removeClass('on')

$(this).addClass('on')



})


// 오토슬라이드 바뀌면 썸네일 on바뀜
swiper.on('slideChange',function(){
var activeIdx=swiper.activeIndex //오토슬라이드에서 현재의 index값
$('#thumb ul li').removeClass('on')
$('#thumb ul li span').removeClass('on')

$('#thumb ul li').eq(activeIdx).addClass('on')
$('#thumb ul li').eq(activeIdx).find('span').addClass('on')

})



// swiper.autoplay.stop('autopalypause')
// swiper.autoplay.start('autoplayResume')