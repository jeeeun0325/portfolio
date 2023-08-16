tabContent('#tab1')
tabContent('#tab2')

function tabContent(tab) {
    $(`${tab} .tabMenu li a`).click(function (e) {
        $(`${tab} .tabMenu li a`).removeClass('on')
        $(this).addClass('on')
        e.preventDefault()
        let href = $(this).attr('href')
        $(`${tab} .product`).removeClass('on')
        $(href).addClass('on')

    })

}
// 메인슬라이드
var swiper1 = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    effect: "fade",

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

});
// 사용자정의 prev next버튼
$('a.prev').click(function () {
    swiper1.slidePrev()

})
$('a.next').click(function () {
    swiper1.slideNext()
})


// 메뉴를 클릭하면 슬라이드가 바뀜
$('nav li').click(function (e) {
    e.preventDefault()
    let idx = $(this).index()
    $('nav li').removeClass('on')
    $(this).addClass('on')
    swiper1.slideTo(idx, 500)
})
// 슬라이드가 autoplay가 진행되면 메뉴가 바뀜
swiper1.on('slideChange', function () {
    let idx = swiper1.activeIndex
    $('nav li').removeClass('on')
    $('nav li').eq(idx).addClass('on')
})
// 인기슬라이드

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$("nav ul").mCustomScrollbar({
    theme: "dark",
});

// 알뜰쇼핑
var swiper3 = new Swiper(".shopwrap .swiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
speed:1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }

});