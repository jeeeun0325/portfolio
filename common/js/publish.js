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

$('#sct1,#sct2,#sct3').mousewheel(function (e, delta) {
  if (delta > 0) {
      //console.log('up')
      let prev = $(this).prev().offset().top
      $('html,body').stop().animate({ 'scrollTop': prev }, 1000)

  } else if (delta < 0) {
      //console.log('down')
      let next = $(this).next().offset().top
      $('html,body').stop().animate({ 'scrollTop': next }, 1000)
  }

 

})

$('#sct4').mousewheel(function (e, delta) {
  let scrTop = $(window).scrollTop()
let secTop4=$(this).offset().top
console.log(scrTop,secTop4)
if (delta > 0) {
  console.log(delta)
  if(scrTop===secTop4){

    console.log('up')
    let prev = $(this).prev().offset().top
    $('html,body').stop().animate({ 'scrollTop': prev }, 1000)
  } else if(scrTop>secTop4){
    console.log('up2')
    $('html,body').stop().animate({ 'scrollTop': secTop4}, 1000)
  }
}

})


$(window).scroll(function () {
  
  let scrTop = $(this).scrollTop()
  $('section').each(function(i){
    let secTop=$(this).offset().top
    let secTop3=$('#sct3').offset().top
    let secTop4=$('#sct4').offset().top
    //console.log(secTop);
    if(scrTop>=secTop){
        $('nav ul li').removeClass('on');
            $('nav ul li').eq(i).addClass('on');
            // $('header').removeClass()
            // $('header').addClass('bg'+i)
            // $('.txtBox').removeClass('on')
            // $(this).find('.txtBox').addClass('on')
    }
    // sct3에서 프로그레스 바 작동
    if(scrTop>=secTop3){
      bar.animate(0.9)
      bar2.animate(0.7)
      bar3.animate(0.7)
      bar4.animate(0.4)
      bar5.animate(0.4)
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
    
    if(scrTop>=secTop4){
      bar.animate(0)
      bar2.animate(0)
      bar3.animate(0)
      bar4.animate(0)
      bar5.animate(0)
      bar6.animate(0)
      bar7.animate(0)
      bar8.animate(0)
    }
    })
})

var bar=null;

// progress

var bar = new ProgressBar.Circle(progress1, {
    color: '#d1cdfa',
    trailColor: '#eee',
    trailWidth: 1,
    duration: 1400,
    easing: 'bounce',
    strokeWidth: 8,
    from: {color: '#7569cf', a:0},/* #b7e7f0 */
    to: {color: '#a3d6df;', a:1},
    // Set default step function for all animate calls
    step: function(state, circle) {
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
    from: {color: '#7569cf', a:0},
    to: {color: '#a3d6df;', a:1},
    step: function(state, circle) {
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
    from: {color: '#7569cf', a:0},
    to: {color: '#a3d6df', a:1},
    step: function(state, circle) {
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
    from: {color: '#7569cf', a:0},
    to: {color: '#a3d6df', a:1},
    step: function(state, circle) {
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
    from: {color: '#7569cf', a:0},
    to: {color: '#a3d6df', a:1},
    step: function(state, circle) {
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
    from: {color: '#7569cf', a:0},
    to: {color: '#a3d6df', a:1},
    step: function(state, circle) {
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
    from: {color: '#7569cf', a:0},
    to: {color: '#a3d6df', a:1},
    step: function(state, circle) {
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
    from: {color: '#7569cf', a:0},
    to: {color: '#a3d6df', a:1},/* #7569cf */
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
    }
  });
  
  bar8.animate(0); 