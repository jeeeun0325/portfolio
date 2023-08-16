// 헤더메뉴
$('li.main').mouseenter(function(){
$('ul.sub').stop().fadeOut()
$(this).find('ul.sub').stop().fadeIn()
})


$('li.main').mouseleave(function(){
    $('ul.sub').stop().fadeOut()
    })


// 슬라이드

$('.slide:gt(0)').hide()
setInterval(function(){
$('.slide:first').fadeOut(3000).next().fadeIn(3000)
$('.slide:first').appendTo('.slidewrap')

},3000)