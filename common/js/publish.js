

// 헤더 메뉴 이동
$('nav li a').click(function (e) {
  e.preventDefault()
  let winH = $(window).height()
  let winW = $(window).outerWidth()
  let index = $(this).parent('li').index()
  //console.log(index)

  $('html,body').stop().animate({ 'scrollTop': winH * index }, 1000)
  $('nav li').removeClass()
  $(this).parent('li').addClass('active')
  if (winW < 1024) {
    if (index === 3) {
      $('html,body').stop().animate({ 'scrollTop': winH * 3 }, 1000)
    }

  } else {
    if (index === 3) {
      $('html,body').stop().animate({ 'scrollTop': winH * 2 + winW }, 1000)
    }
  }
})


$(window).scroll(function () {
  let scrTop = $(window).scrollTop()
  let winH = $(window).height()
  let winW = $(window).outerWidth()
  let secTop = $('#sct5').offset().top
 console.log(winH * 2 - winH / 2, scrTop, winH * 3)

  if (scrTop >= winH * 0 && scrTop < winH * 1) {

    $('nav li').removeClass()
    $('nav li').eq(0).addClass('active')
  }
  if (scrTop >= winH * 1 && scrTop < winH * 2) {

    $('nav li').removeClass()
    $('nav li').eq(1).addClass('active')
  }
  if (scrTop >= winH * 2 + winW) {

    $('nav li').removeClass()
    $('nav li').eq(3).addClass('active')
  }
  if (scrTop >= winH * 2 && scrTop < winH * 2 + winW) {
    $('nav li').removeClass()
    $('nav li').eq(2).addClass('active')
  } 

  if (scrTop >= winH * 2 - (winH / 2) && scrTop < winH * 2 + winW) {
    bar.animate(0.9)
    bar2.animate(0.7)
    bar3.animate(0.7)
    bar4.animate(0.5)
    bar5.animate(0.8)
    bar6.animate(0.8)
    bar7.animate(0.7)
    bar8.animate(0.5)
  }else{
     bar.animate(0)
    bar2.animate(0)
    bar3.animate(0)
    bar4.animate(0)
    bar5.animate(0)
    bar6.animate(0)
    bar7.animate(0)
    bar8.animate(0)
  }


  if (scrTop >= winH * 2 + winW + winH / 3) {
    $('#sct5').addClass('active')
  } else {
    $('#sct5').removeClass('active')
  }

  if (winW < 1024) {
    if (scrTop >= winH * 2 && scrTop < winH * 3) {
      $('nav li').removeClass()
      $('nav li').eq(2).addClass('active')
    } 

    if(scrTop >= winH * 2 - (winH / 2) && scrTop < winH * 3){
      bar.animate(0.9)
      bar2.animate(0.7)
      bar3.animate(0.7)
      bar4.animate(0.5)
      bar5.animate(0.8)
      bar6.animate(0.8)
      bar7.animate(0.7)
      bar8.animate(0.5)
    }else{
      bar.animate(0)
      bar2.animate(0)
      bar3.animate(0)
      bar4.animate(0)
      bar5.animate(0)
      bar6.animate(0)
      bar7.animate(0)
      bar8.animate(0)
    }
    if (scrTop >= winH * 3) {

      $('nav li').removeClass()
      $('nav li').eq(3).addClass('active')
    }

    if (scrTop >= secTop - winH / 1.2) {
      $('#sct5').addClass('active')
    } else {
      $('#sct5').removeClass('active')
    }

  }


})


//메인 flow text
let roller = document.querySelector('.flowList');
roller.id = 'roller1'; // 아이디부여

let clone = roller.cloneNode(true)
// 기본값은 false. 자식 노드까지 복제 할 경우 true
clone.id = 'roller2';
document.querySelector('.wrapBox').appendChild(clone);

//document.querySelector('#roller1').style.left = '0px';
//document.querySelector('#roller2').style.left = document.querySelector('.rolling-list').offsetWidth + 'px';
// offsetWidth는 요소의 너비를 픽셀 단위로 반환
// 요소의 내부 너비, 패딩, 테두리, 수직스크롤바의 너비를 모두 포함
// 부모요소에 flex를 주면 굳이 줄 필요 없음

roller.classList.add('original');
clone.classList.add('clone');


//section4 가로 스크롤

ScrollTrigger.matchMedia({

  "(min-width:1025px)": function () {
    gsap.registerPlugin(ScrollTrigger);

    const horizon = document.querySelector("#scrollWrap");

    const section = gsap.utils.toArray("#scrollWrap > section");
    gsap.to(section, {
      xPercent: -100 * (section.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizon,
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + (horizon.offsetWidth - innerWidth),
        invalidateOnRefresh: true // 남아있는 캐쉬 지우기
      }
    });
  }

});


// work slide
var swiper2 = new Swiper(".work-swiper", {
  slidesPerView: 1.1,
  spaceBetween: 25,
  pagination: {
    el: "swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // scrollbar: {
  //     el: ".swiper-scrollbar",
  //     hide: false,
  //   },
  //mousewheel: true,
  navigation: {
    nextEl: ".next_btn",
    prevEl: ".prev_btn",
  },

  breakpoints: {
    501: {
      slidesPerView: 1.3,
      spaceBetween: 25,
    },
    801: {
      slidesPerView: 1.5,
      spaceBetween: 35,
    },
    1025: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    3000: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".sct2Bg-swiper", {
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: "swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});


$(function () {

  $('#da-thumbs .workwrap').hoverdir();
  $('#da-thumbs .workwrap').mouseenter(function () {
    $('span.num').removeClass('on')
    $(this).find('p span.num').addClass('on')
    $(this).addClass('on')
  })
  $('#da-thumbs .workwrap').mouseleave(function () {
    $('span.num').removeClass('on')
    $('#da-thumbs .workwrap').removeClass('on')
  })

});


var bar = null;

// progress

var bar = new ProgressBar.Circle(progress1, {
  color: '#d1cdfa',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 8,
  from: { color: '#7569cf', a: 0 },/* #b7e7f0 */
  to: { color: '#a3d6df;', a: 1 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});
bar.animate(0);  // Number from 0.0 to 1.0

var bar2 = new ProgressBar.Circle(progress2, {
  color: '#d1cdfa',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 8,
  from: { color: '#7569cf', a: 0 },
  to: { color: '#a3d6df;', a: 1 },
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar2.animate(0);

var bar3 = new ProgressBar.Circle(progress3, {
  color: '#d1cdfa',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 8,
  from: { color: '#7569cf', a: 0 },
  to: { color: '#a3d6df', a: 1 },
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar3.animate(0);

var bar4 = new ProgressBar.Circle(progress4, {
  color: '#d1cdfa',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 8,
  from: { color: '#7569cf', a: 0 },
  to: { color: '#a3d6df', a: 1 },
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar4.animate(0);

var bar5 = new ProgressBar.Circle(progress5, {
  color: '#d1cdfa',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 8,
  from: { color: '#7569cf', a: 0 },
  to: { color: '#a3d6df', a: 1 },
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar5.animate(0);

var bar6 = new ProgressBar.Circle(progress6, {
  color: '#d1cdfa',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 8,
  from: { color: '#7569cf', a: 0 },
  to: { color: '#a3d6df', a: 1 },
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar6.animate(0);

var bar7 = new ProgressBar.Circle(progress7, {
  color: '#d1cdfa',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 8,
  from: { color: '#7569cf', a: 0 },
  to: { color: '#a3d6df', a: 1 },
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar7.animate(0);

var bar8 = new ProgressBar.Circle(progress8, {
  color: '#d1cdfa',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 8,
  from: { color: '#7569cf', a: 0 },
  to: { color: '#a3d6df', a: 1 },/* #7569cf */
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar8.animate(0);


$(document).ready(function () {
  let wid = $(this).width()
  if (wid > 720) {
    $('#da-thumbs .workwrap').hoverdir();
    $('#da-thumbs .workwrap').removeClass('mob_bg')
  } else {
    $('#da-thumbs .workwrap').hoverdir('destroy');
    $('#da-thumbs .workwrap').addClass('mob_bg')
  }



  $(window).resize(function () {
    let wwid = $(this).width()


    if (wwid > 720) {
      $('#da-thumbs .workwrap').hoverdir();
      $('#da-thumbs .workwrap').removeClass('mob_bg')
    } else {
      $('#da-thumbs .workwrap').hoverdir('destroy');
      $('#da-thumbs .workwrap').addClass('mob_bg')
    }
  })

  $(window).scroll(function () {
    let scrT = $(this).scrollTop()
    if (scrT < 100) {
      $('header').removeClass()
    } else {
      $('header').addClass('hd_bg')
    }
  })
})

