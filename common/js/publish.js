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
  slidesPerView:1.1,
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
          slidesPerView:1.3,
    spaceBetween: 25,
        },
        801: {
          slidesPerView:1.5,
    spaceBetween: 35,
        },
      1025: {
        slidesPerView:2,
  spaceBetween: 40,
      },
      1200: {
        slidesPerView:2.5,
  spaceBetween: 40,
      },
      1500: {
        slidesPerView:3,
  spaceBetween: 40,
      },
      3000: {
        slidesPerView:4,
  spaceBetween: 40,
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

  $(document).ready(function() {
    $('#fullpage').fullpage({
      //options here
      autoScrolling:true,
      scrollHorizontally: true,
      anchors: ['section1', 'section2', 'section3','section4'],
      menu: '#menu',
      scrollOverflow: true,
     //scrollOverflowReset: true,
      responsiveWidth: 1024, //너비가 1024일때 수동 원페이지 -> 스크롤
      //scrollBar: true
      normalScrollElements: '.scrollable-element',
      'afterLoad': function (anchorLink, index) {
        if (index == 3){
          //alert ('세번째 인덱스');
          bar.animate(0.9)
      bar2.animate(0.7)
      bar3.animate(0.7)
      bar4.animate(0.4)
      bar5.animate(0.8)
      bar6.animate(0.8)
      bar7.animate(0.7)
      bar8.animate(0.5)
        } else{
          bar.animate(0)
      bar2.animate(0)
      bar3.animate(0)
      bar4.animate(0)
      bar5.animate(0)
      bar6.animate(0)
      bar7.animate(0)
      bar8.animate(0)
        }
      },
    });
  });

  $(document).ready(function(){

    $(window).resize(function(){
      let wid=$(this).width()
      if(wid>1024){
        $('header').removeClass()
        
      }else{
        $('header').addClass('hd_bg')
        
      }

      if(wid>720){
        $('#da-thumbs .workwrap').hoverdir();
        $('#da-thumbs .workwrap').removeClass('mob_bg')
      }else{
        $('#da-thumbs .workwrap').hoverdir('destroy');
        $('#da-thumbs .workwrap').addClass('mob_bg')
      }
    })

    $(window).scroll(function(){
      let scrT=$(this).scrollTop()
      if(scrT<100){
        $('header').removeClass()
      }else{
        $('header').addClass('hd_bg')
      }
    })
  })

