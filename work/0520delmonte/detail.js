$('.thumb li').click(function(){
    let idx=$(this).index()
    //alert(idx)
    $(this).parents('.itemDetail').find('.col1 ul.itemTab li').removeClass('on')
    $(this).parents('.itemDetail').find('.col1 ul.itemTab li').eq(idx).addClass('on')
    $(this).parents('.itemsubSummary').find('ul.desc li').removeClass('on')
    $(this).parents('.itemsubSummary').find('ul.desc li').eq(idx).addClass('on')
 
 })
 
 

$('.close').click(function(e){
    e.preventDefault()
    $('.itemDetailBox').stop().animate({'height': 0})
 })
 
 $('a.view').click(function(e){
    e.preventDefault()
    let href = $(this).attr('href')
   //alert(href)
    let descHeight=$(href).innerHeight()
 //alert(descHeight)
   let sw=$(this).hasClass('on')
 if(sw){
 $('.itemDetailBox').stop().animate({'height':0})
 $('a.view').removeClass('on')
 return false
 }else{
 $('a.view').removeClass('on')
 $(this).addClass('on')
 }
 $('.itemDetailBox').stop().animate({'height':0})
 $(href).closest('.itemDetailBox').stop().animate({'height':descHeight})
 $('.itemDetail').hide()
 $(href).show()
 
 })

//  $('.itemDetail').css({'opacity':'0'})
//  $(href).css({'opacity':'1'})
//마지막 두줄 css로하니까 탭메뉴가 안눌리고 잔상이 남아서 하이드 쇼로 바꿈!