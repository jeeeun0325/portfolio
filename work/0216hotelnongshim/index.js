$('nav li').click(function(){
    let idx=$(this).index()
    
    $('nav li').removeClass('on')
    $(this).addClass('on')
    
    $('article').fadeOut()
    $('article').eq(idx).fadeIn()
    
    $('.slide').fadeOut()
    $('.slide').eq(idx).fadeIn()
    })

