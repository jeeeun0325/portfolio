// let a1st=$('.connav ul li').first('a').offset().left
// let aElemWid=$('.connav ul li').first('a').width()/2
// $('a.pointer').animate({'left':a1st+aElemWid-5})


// 구문이 반복되니까 펑션을 만든다 pointInit
function pointInit(me){
// li a를 클릭하면 a의 위치값을 알아야함
// offset으로 좌표를 구할수 있음 
let aPosX=me.offset().left
// a를 클릭하면 a의 width를 알아야함
let aElemWid=me.width()/2
// 중앙으로 보내기위해 a의 위치값+(너비/2)-(점의너비/2)
$('a.pointer').stop().animate({'left':aPosX+aElemWid-5})
}

// 맨처음 a의 첫번째 위치값으로 이동시켜줘야함
pointInit($('.connav ul li').first('a'))


$('.connav ul li a').click(function(e){
    e.preventDefault()
    pointInit($(this))

    let href=$(this).attr('href')

$('.tabcontent').fadeOut()
$('.tabcontent .box>*, .img>*').css({'opacity':'0'})

$('.tabcontent .box>*').css({'top':'300px'})
$(href).fadeIn()
$(href).find('h2').delay(300)
.animate({'opacity':'1','top':'8%'})
$(href).find('h3').delay(300)
.animate({'opacity':'1','top':'25%'})
$(href).find('p').delay(500)
.animate({'opacity':'1','top':'50%'})

$('.img img').css({'bottom':'-200px'})
$(href).find('.mainimg').delay(800)
.animate({'opacity':'1','bottom':'0px'},500,'easeOutBack')
$(href).find('.subimg').delay(1000)
.animate({'opacity':'1','bottom':'0px'},500,'easeOutBack')
$(href).find('.mbimg').delay(1000)
.animate({'opacity':'1','top':'173px'},500,'easeOutBack')




})

    


// let liposX=$(this).offset().left
// let aElemWid=$(this).width()/2
// console.log(liposX,aElemWid)
// $('a.pointer').animate({'left':liposX+aElemWid-5})

$(window).resize(function(){
pointInit($('.connav ul li').first('a'))


})








$('.connav ul li a').click(function(e){
    e.preventDefault()
$('.connav ul li a').removeClass('on')
$(this).addClass('on')


})

let $grid = $('.grid').imagesLoaded(function () {
    $grid.isotope({
        itemSelector: '.grid-item'
    })

})

$grid.isotope({filter:'.product1'})

$('.drinkMenu ul li').on( 'click',function(e) {
e.preventDefault()
$('.drinkMenu ul li').removeClass('on')
$(this).addClass('on')      

let filterValue = $(this).find('a').attr('data-filter');
$grid.isotope({ filter: filterValue });

let bgImg=$(this).find('a').attr('data-bg')
$('.sect2').css({'background-image':'url('+bgImg+')'})

let idx=$(this).index()
$('.drink ul li').removeClass('on')
$('.drink ul li').eq(idx).addClass('on')
});

