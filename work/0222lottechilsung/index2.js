$('.connav ul li a').click(function(){
$('.connav ul li a').removeClass('on')
$(this).addClass('on')

let href=$(this).attr('href')
$('.tabcontent').fadeOut()
$(href).fadeIn()
})