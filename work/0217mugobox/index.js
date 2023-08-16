$('.list li').click(function(){
    let idx=$(this).index()
    
    $('.list li').removeClass('on')
    $(this).addClass('on')
    
    $('.rightfr').fadeOut()
    $('.rightfr').eq(idx).fadeIn()
    
    $('article').fadeOut()
    $('article').eq(idx).fadeIn()
    })


// 퀵메뉴

let stopId
function bannerRotate(){
$('.ani').animate({rotate:'+=2deg'
},50,'linear')
}

$('.quick').mouseenter(function(){
    stopId= setInterval(bannerRotate,50)
          })

$('.quick').mouseleave(function(){
    
        clearInterval(stopId)
        
        })

// 
$('.story li a').click(function(){
$('.story li a').removeClass('on')
    $(this).addClass('on')

let href=$(this).attr('href')
$('.con').fadeOut()
$(href).fadeIn()

})

$('li.main').mouseenter(function(){
    /* 사용자 정의 속성값 data-의 값을 읽어 들인다. */
    let menu=$(this).find('span').attr('data-hover')
    /* 동적으로 a태그를 만들어 span뒤에 붙이고 data-값을 지정해라 */
    $(this).find('span.data-hover').append(`<a>${menu}</a>`)
    $(this).find('span').stop().animate({'bottom':'-30px'},50)
    $('ul.sub_menu').stop().slideUp()
    $(this).find('ul.sub_menu').slideDown()

})


$('li.main').mouseleave(function(){
    $(this).find('span').stop().animate({'bottom':'0px'},50)
    $(this).find('span a').remove()
    $('ul.sub_menu').stop().slideUp()

})