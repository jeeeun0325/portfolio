var swiper = new Swiper(".mySwiper", {
    loop: true,
    speed: 1500,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        },
    navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        
  });


$('.banner li a').click(function(e){
    e.preventDefault()
    var href = $(this).attr('href')

    var secT=$(href).offset().top
    $('html,body').animate({scrollTop:secT})
})
$('.nav li a').click(function(e){
    e.preventDefault()
    var href = $(this).attr('href')

    var secT=$(href).offset().top
    $('html,body').animate({scrollTop:secT})
})

var headerbg=['#1e2c5a','#ee781f','#ffe100','#7057a3','#eb6ea5','#c4d700','#00341f']

var color_y=['intro_y.png','yyd_y.png','banpo_y.png','ddp_y.png','chung_y.png','season_y.png','christ_y.png']
var color_n=['intro_n.png','yyd_n.png','banpo_n.png','ddp_n.png','chung_n.png','season_n.png','christ_n.png']
var color_w=['intro_w.png','yyd_w.png','banpo_w.png','ddp_w.png','chung_w.png','season_w.png','christ_w.png']

var sns_y=['sns_facebook_icon_y.png','sns_insta_icon_y.png','sns_twitter_icon_y.png','sns_youtube_icon_y.png']
var sns_n=['sns_facebook_icon_n.png','sns_insta_icon_n.png','sns_twitter_icon_n.png','sns_youtube_icon_n.png']
var sns_w=['sns_facebook_icon_w.png','sns_insta_icon_w.png','sns_twitter_icon_w.png','sns_youtube_icon_w.png']

$(window).scroll(function(){
    var set2offTop=$('#sect2').offset().top
    $('section').each(function(i){
        var secT=$(this).offset().top
        var scrT=$(window).scrollTop()

console.log(secT,scrT);

        if(secT<=scrT){
    $('header').css({'background':headerbg[i]})
    if(i==1 ||i==2|| i==4 || i==5){

        $('h1 img').attr({'src':'img/logo_n.png'})
        $('.nav > li').each(function(j){$(this).find('img').attr('src','img/'+color_n[j])})
        $('.sns > li').each(function(k){$(this).find('img').attr('src','img/'+sns_n[k])})
    }else if(i==0 || i==3){
        $('h1 img').attr({'src':'img/logo_y.png'})
        $('.nav > li').each(function(j){$(this).find('img').attr('src','img/'+color_y[j])})
        $('.sns > li').each(function(k){$(this).find('img').attr('src','img/'+sns_y[k])})
    }else{
        $('h1 img').attr({'src':'img/logo_w.png'})
        $('.nav > li').each(function(j){$(this).find('img').attr('src','img/'+color_w[j])})
        $('.sns > li').each(function(k){$(this).find('img').attr('src','img/'+sns_w[k])})
    }
}
    })
})


