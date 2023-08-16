

    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        mousewheel: true,

    });
    
    swiper.on('slideChange', function () {
        let idx = swiper.activeIndex
        // alert(idx)
        $('ul.num li').removeClass('on')
        $('ul.num li').eq(idx).addClass('on')
        $('ul.info>li').removeClass('on')
        $('ul.info>li').eq(idx).addClass('on')

    })
    $('ul.num li').click(function () {
        $('ul.num li').removeClass('on')
        $(this).addClass('on')
        let idx = $(this).index()
        swiper.slideTo(idx, 500)
    })


    var swiper2 = new Swiper(".mobileSwiper", {
        navigation: {
            nextEl: ".mbtn.swiper-button-next",
            prevEl: ".mbtn.swiper-button-prev",
        },
    })
    swiper2.on('slideChange', function () {
        let idx = swiper2.activeIndex
        // alert(idx)
        
        $('ul.info>li').removeClass('on')
        $('ul.info>li').eq(idx).addClass('on')
        $('.thumbWrap li').removeClass('on')
        $('.thumbWrap li').eq(idx).addClass('on')
    })
    $('li.thumbNail').click(function(){
        $('li.thumbNail').removeClass('on')
        $(this).addClass('on')
        let idx=$(this).index()
        swiper2.slideTo(idx, 500)

    })




var swiper3 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".tab1.swiper-button-next",
        prevEl: ".tab1.swiper-button-prev",
    },
});
var swiper4 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".tab2.swiper-button-next",
        prevEl: ".tab2.swiper-button-prev",
    },
});

$('.tabMenu li a').click(function (e) {
    e.preventDefault()
    $('.tabMenu li a').removeClass('on')
    $(this).addClass('on')

    let href = $(this).attr('href')
    $('.content').fadeOut()
    $(href).fadeIn()
})