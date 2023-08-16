let articleElem=$('article')

articleElem.mouseenter(function(){

let bgImg=$(this).find('h3').attr('data-bg')
$('#sect2').css({'background-image':'url('+bgImg+')'})
articleElem.removeClass('on')
$(this).stop().animate({'width':'400px'},function(){
$(this).addClass('on')
$(this).stop().find('.desc').fadeIn()

})
articleElem.not($(this)).stop().animate({'width':'330px'}, function(){
    $(this).stop().find('.desc').fadeOut();
})

})

articleElem.mouseleave(function(){
    
        $(this).stop().find('.desc').fadeOut()
    
    
    })
    

$('.desc button a').click(function(e){
    $('a.close').fadeIn()
    e.preventDefault()
    let href=$(this).attr('href')
    let sct = $(window).scrollTop()
    console.log(href)
    $('.detail').load(href)
    $('.detail').fadeIn()
    $('.detail').animate({'top':'120px'})
    $('html').animate({'scrollTop':'0'})
}) 

$('a.close').click(function(e){
    e.preventDefault()
$(this).fadeOut()
$('.detail').empty()

})
// $('.detail').load('signiel.html')

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
});