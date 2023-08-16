let ht=$('.VslideContainer').height()
let wd=$('.HslideContainer').width()
console.log(ht,wd)
$('.VslideContainer .slideWrap').css({marginTop:-ht})
$('.HslideContainer .slideWrap').css({marginLeft:-wd})

// 
$('a.next').click(function(e){
e.preventDefault();
$('.VslideContainer .slideWrap').stop().animate({marginTop:-ht*2},700,
    function(){
$('.VslideContainer .slideWrap .slide:first').appendTo('.VslideContainer .slideWrap')
$('.VslideContainer .slideWrap').css({marginTop:-ht})

    });

$('.HslideContainer .slideWrap').stop().animate({marginLeft:-wd*2},700,
    function(){
        $('.HslideContainer .slideWrap .slide:first').appendTo('.HslideContainer .slideWrap')
        $('.HslideContainer .slideWrap').css({marginLeft:-wd})
        
            });
    


})
// 
$('a.prev').click(function(e){
    e.preventDefault();
    $('.VslideContainer .slideWrap').stop().animate({marginTop:0},700,
        function(){
    $('.VslideContainer .slideWrap .slide:last').prependTo('.VslideContainer .slideWrap')
    $('.VslideContainer .slideWrap').css({marginTop:-ht})
    
        });
    
    $('.HslideContainer .slideWrap').stop().animate({marginLeft:0},700,
        function(){
            $('.HslideContainer .slideWrap .slide:last').prependTo('.HslideContainer .slideWrap')
            $('.HslideContainer .slideWrap').css({marginLeft:-wd})
            
                });
        
    
    })

    $('.productInner ul li a').click(function(e){
        e.preventDefault()
        let idx=$(this).parents().index()
        // alert(idx)
        $(this).parents('.productInner').prev().find('ul li').removeClass('on')
        $(this).parents('.productInner').prev().find('ul li').eq(idx).addClass('on')

        $(this).parents('.productInner ul li').siblings().removeClass('on')
        $(this).parents('.productInner ul li').addClass('on')


        let href=$(this).attr('href');

        let idx_slide=$(this).parents('.slide').index();
        $('.VslideContainer .slide').eq(idx_slide).find('img').attr('src',href)

    })


