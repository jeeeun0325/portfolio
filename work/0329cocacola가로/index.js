$('li a').click(function (e) {
    e.preventDefault()
    let href = $(this).attr('href')
    let secLeft = $(href).offset().left
    // alert(secTop)
    $('html,body').stop().animate({ 'scrollLeft': secLeft }, 1000)
})

$(window).scroll(function () {
    let scrLeft = $(this).scrollLeft()
    $('h4').text(scrLeft);
    let winW = $(this).width()

   


// for each---------------
$('section').each(function(i){
let secLeft=$(this).offset().left
console.log(secLeft);
if(scrLeft>=secLeft){
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
        // console.log('left')
        let prev = $(this).prev().offset().left
        $('html,body').stop().animate({ 'scrollLeft': prev }, 1000)

    } else if (delta < 0) {
        // console.log('down')
        let next = $(this).next().offset().left
        $('html,body').stop().animate({ 'scrollLeft': next }, 1000)
    }



})
//각각의 섹션의 시작점을 질문한다.
// offset은 top 과  left만 사용



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