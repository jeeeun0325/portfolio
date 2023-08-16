
$('.bar li').click(function(){
    let idx=$(this).index()
    // alert(idx)
$('.bar li').removeClass('on')
$(this).addClass('on')
$('.slide').removeClass('on')
$('.slide').fadeOut(1000)
$('.slide').eq(idx).fadeIn(1000)

$('#sect1').removeClass()
$('#sect1').addClass('bg'+idx)
})

let set1=$('#sect1').offset().top;
let set2=$('#sect2').offset().top;
let set3=$('#sect3').offset().top;
let set4=$('#sect4').offset().top;
let set5=$('#sect5').offset().top;
let set6=$('#sect6').offset().top;

let scrT=0;
$(window).scroll(function(){
    scrT=$(this).scrollTop();

    $('section').each(function(i){
        let secTop=$(this).offset().top;
        if(i==5){
            scrT +=500;
        }
        if(scrT>=secTop){
            $('nav li').removeClass();
            $('h1').removeClass();
            if(i==0 || i==1 || i==3|| i==5){
                $('h1').addClass('red');
                $('nav li').eq(i).addClass('black')
            }else if(i==2 || i==4){
                $('h1').addClass('white');
                $('nav li').eq(i).addClass('white')
            }
        }
    })

})

$('section').on("mousewheel",function(event,delta){
    if(delta>0){
        var prev=$(this).prev().offset().top
        $('html').stop().animate({
            scrollTop:prev
        },1000)
    }else if(delta<0){
        let dh=$(document).height();
        let wh=$(window).height();
        if(scrT+wh<=dh){
        var next=$(this).next().offset().top
        $('html').stop().animate({
            scrollTop:next
        },1000)    
        }
        
    }

})