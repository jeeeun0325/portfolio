

$('article').mouseenter(function(){
    let v=$(this).find('video').get(0)
    $(this).css({'width':'40%'})
    v.play()
    $(this).find('video').css({'display':'block'})
$(this).find('.txt p').fadeIn()
})
$('article').mouseleave(function(){
    let v=$(this).find('video').get(0)
    $(this).css({'width':'25%'})
    v.currentTime = 0
    $(this).find('video').css({'display':'none'})
    $(this).find('.txt p').fadeOut()

})

$('.desc a').click(function(){
let href=$(this).attr('href')
$('.product').removeClass('on')

$(href).addClass('on')

})

