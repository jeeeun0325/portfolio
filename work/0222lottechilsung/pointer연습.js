// let a1st=$('.connav ul li a.on').offset().left
// let a2wid=$('.connav ul li a.on').width()/2
// $('a.pointer').stop().animate({'left':a1st+a2wid-5})

// $('.connav ul li a').click(function(e){
//     e.preventDefault()
// let aXpos=$(this).offset().left
// let wid=$(this).width()/2
// $('a.pointer').animate({'left':aXpos+wid-5})

// console.log(aXpos)
// })

// $(window).resize(function(){
// let a1st=$('.connav ul li a.on').offset().left
// let a2wid=$('.connav ul li a.on').width()/2
// $('a.pointer').stop().animate({'left':a1st+a2wid-5})

// })




// 구문이 반복되니까 함수를 이용하여 줄이자

function pointInit(aElem){
let aXpos=aElem.offset().left
let wid=aElem.width()/2
$('a.pointer').stop().animate({'left':aXpos+wid-5})


}

pointInit($('.connav ul li a.on')) //페이지가 로딩되면

$(window).resize(function(){
    pointInit($('.connav ul li a.on'))
    })

$('.connav ul li a.on').click(function(e){
    e.preventDefault()
pointInit($(this))
})