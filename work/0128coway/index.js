// alert()
$('.bg li:gt(0)').hide()


$('.menu li a').mouseenter(function(){

$('span.title').removeClass('on')
$(this).find('span').addClass('on')

$('.underline').removeClass('on')
$(this).next().addClass('on')


let href=$(this).attr('href')
console.log(href);
$('.bg li').fadeOut()
$(href).fadeIn()
})



