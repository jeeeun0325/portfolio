var sw = 0
var scrTop = 0
var activeHeight = 0

$('nav.remote li a,.nav_pc li a,.mobNav ul li a').click(function (e) {
    e.preventDefault()
    let href = $(this).attr('href')
    let secTop = $(href).offset().top
    $('html,body').stop().animate({ 'scrollTop': secTop }, 1000)
})


$(window).scroll(function () {
    let scrTop = $(window).scrollTop();
    $('.subtit').removeClass('on')
    $('.banner').removeClass('on')


    $('section').each(function (i) {
        let sectTop = $(this).offset().top;
        console.log(i + '=>', sectTop);

        if (scrTop >= sectTop - 200) {
            $('.remote ul li a').removeClass('on')
            $('.remote ul li').removeClass('on')
            $('.remote ul li').eq(i).find('a').addClass('on')
            $('.remote ul li').eq(i).addClass('on')

            $(this).find('.subtit').addClass('on')
            $(this).find('.banner').addClass('on')

            $('section .inner').removeClass('on')
            $('section').eq(i).find('.inner').addClass('on')

            // banDesc 활성화 체크
            sw = $(this).hasClass('on')
            if (sw) {
                $('.fixedShrimp').removeClass('on')
                $('.fixedShrimp').addClass('left')
            } else {
                $('.fixedShrimp').removeClass('left')
                $('.fixedShrimp').addClass('on')
            }

        }
        
    }, 700)
    if (scrTop >= 200) {

            $('.fixedShrimp').addClass('on')
        } else {
            $('.fixedShrimp').removeClass('on')
        }
})

// 모바일 메뉴
let btn = 0;
$('.bar_mobile').click(function () {
    btn = !btn
    if (btn) {
        $('.wrap').animate({ 'right': '150px' })
    } else {
        $('.wrap').animate({ 'right': '0' })
    }

})

$(window).resize(function () {
    location.reload()
})

// banner 이미지 on off 이미지 주소를 변경
function toggleImg(imgElem, hover, leave) {
    let swImg = $(imgElem).attr('src').replace(hover, leave)
    $(imgElem).attr('src', swImg)
}

$('.banner ul li a').on({
    mouseenter: function () {

        let thisImg = $(this).find('img')
        toggleImg($(thisImg), 'Off', 'On')
    },
    mouseleave: function () {
        let thisImg = $(this).find('img')
        toggleImg($(thisImg), 'On', 'Off')
    },
    click: function (e) {
        e.preventDefault()
        //클릭한 타이틀에 해당하는 컨텐츠를 보여주기 위해 주소 추출
        let href = $(this).attr('href')
          $('section').removeClass('on')
          $(href).closest('section').addClass('on')
        // alert(href)
        //기존에 보여지는 상세페이지 숨겨라
        $('.banDesc >ul li').stop().fadeOut()
        //현재 active되어있는 상세내용 보여라
        $('.episode').stop().fadeOut()
        $(href).stop().fadeIn()
        //현재 active된 컨텐츠의 부모의 높이를 찾아 height을 지정한다.
             let active = $(href).closest('.banDesc')
        $(active).addClass('on')
        $('.banDesc').not((active)).css({ 'height': 0 })

        let sectHeight = $(href).height()
        $(href).closest('.banDesc').animate({ 'height': sectHeight })


    }
})

$('.btnclose').click(function(e){
    e.preventDefault()
    $('.banDesc').css({'height':'0'})
    $('section').removeClass('on')
})


$(window).scroll(function () {
    scrTop = $(window).scrollTop()
   
   
    $('.secTit').removeClass('on')
    $('.secMenu').removeClass('on')
   
   
    $('section').each(function (i) {
        var sectTop = $(this).offset().top
        ////SECTION 활성화 체크/////////////////////////////////////////////
        if (scrTop >= sectTop - 300) {
            // 스크롤 위치 따라 네비 on,off
            $('#remote ul li a').removeClass('on')
            $('#remote ul li').eq(i).find('a').addClass('on')

            // 텍스, 컨텐츠 서브 메뉴 move
            $(this).find('.secTit').addClass('on')
            $(this).find('.secMenu').addClass('on')

            $('section .inner').removeClass('moveBg')
            $('section').eq(i).find('.inner').addClass('moveBg')

      ////Desc 활성화 체크/////////////////////////////////////////////
         sw= $(this).hasClass('on')
          if(sw){
              $('.fixedshrimp').addClass('left')
          }else{
              $('.fixedshrimp').removeClass('left')
              $('.fixedshrimp').addClass('on')
          }
        }//uf
    }) //each

        if (scrTop >= 200) {
            $('.fixedshrimp').addClass('on')

        } else {

            $('.fixedshrimp').removeClass('on')

        }


}) //scroll

