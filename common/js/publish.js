// home txt

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};




// work slide
var swiper2 = new Swiper(".work-swiper", {
  slidesPerView:2,
  spaceBetween: 5,
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
          slidesPerView:2,
    spaceBetween: 5,
        },
      1023: {
        slidesPerView:3,
  spaceBetween: 10,
      },
      3000: {
        slidesPerView:4,
  spaceBetween: 10,
      },
    },
});

var swiper = new Swiper(".sct2Bg-swiper", {
   effect:"fade",
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

// if ( jQuery().hoverdir ) {
// 	jQuery( '.hoverdir-container .hoverdir-item' ).each( function() {
// 		jQuery( this ).hoverdir();
// 	} );
// }

// scroll 제어
$('nav ul li a').click(function (e) {
  e.preventDefault()
  let href = $(this).attr('href')
  let secTop = $(href).offset().top
  // alert(secTop)
  $('html,body').stop().animate({ 'scrollTop': secTop }, 1000)
})

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

$(window).scroll(function () {
  
  let scrTop = $(this).scrollTop()
  $('section').each(function(i){
    let secTop=$(this).offset().top
    console.log(secTop);
    if(scrTop>=secTop){
        $('nav ul li').removeClass('on');
            $('nav ul li').eq(i).addClass('on');
            // $('header').removeClass()
            // $('header').addClass('bg'+i)
            // $('.txtBox').removeClass('on')
            // $(this).find('.txtBox').addClass('on')
    }
    
    })
})