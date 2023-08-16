$('li a').click(function (e) {
    e.preventDefault()
    let href = $(this).attr('href')
    let secTop = $(href).offset().top
    // alert(secTop)
    $('html,body').stop().animate({ 'scrollTop': secTop }, 1000)
})

$(window).scroll(function () {
    let scrTop = $(this).scrollTop()
    $('h4').text(scrTop);
    let winH = $(this).height()

    // if (scrTop >= winH * 0 && scrTop < winH * 1) {

    //     $('nav li').removeClass('on')
    //     $('nav li').eq(0).addClass('on')
    // } 
    // if (scrTop >= winH * 1 && scrTop < winH * 2) {

    //     $('nav li').removeClass('on')
    //     $('nav li').eq(1).addClass('on')
    // }
    // if (scrTop >= winH * 2 && scrTop < winH * 3) {

    //     $('nav li').removeClass('on')
    //     $('nav li').eq(2).addClass('on')
    // }
    // if (scrTop >= winH * 3 && scrTop < winH * 4) {

    //     $('nav li').removeClass('on')
    //     $('nav li').eq(3).addClass('on')
    // }
    // if (scrTop >= winH * 4) {

    //     $('nav li').removeClass('on')
    //     $('nav li').eq(4).addClass('on')
    // }

    // for문--------
// for(let i = 0; i < 5;i++){
//     if (scrTop >= winH * i && scrTop < winH * (i+1)){
//     $('nav li').removeClass('on')
//         $('nav li').eq(i).addClass('on')
//     }
// }

// for each---------------
$('section').each(function(i){
let secTop=$(this).offset().top
console.log(secTop);
if(scrTop>=secTop){
    $('nav li').removeClass('on');
        $('nav li').eq(i).addClass('on');
        $('header').removeClass()
        $('header').addClass('bg'+i)
        $('.txtBox').removeClass('on')
        $(this).find('.txtBox').addClass('on')
}

})
});

$('section').mousewheel(function (e, delta) {
    if (delta > 0) {
        // console.log('up')
        let prev = $(this).prev().offset().top
        $('html,body').stop().animate({ 'scrollTop': prev }, 1000)

    } else if (delta < 0) {
        // console.log('down')
        let next = $(this).next().offset().top
        $('html,body').stop().animate({ 'scrollTop': next }, 1000)
    }



})
//각각의 섹션의 시작점을 질문한다.
// 



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: 'true',
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});