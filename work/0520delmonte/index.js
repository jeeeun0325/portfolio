
$('li.main').on(
   { 
       mouseenter:function(){
    $('ul.sub').stop().slideDown()
    $('.fullBg').stop().slideDown()
   },
   mouseleave:function(){
    $('ul.sub').stop().slideUp()
    $('.fullBg').stop().slideUp()
   }

}
)
$('.slideMenu li').on({
   mouseenter:function(){
      let idx=$(this).index()
     //alert(idx)
$('.slideWrap').stop().animate({'marginLeft':idx*-100+'%'})
   },
   click:function(){

   }
})
$('.content').load('item1.html')
$('.page').click(function(){
   let href=$(this).attr('href')
   $('.content').load(href)
})





// $('a.view').click(function(e){
//    e.preventDefault()
//    let href = $(this).attr('href')
//   //alert(href)
//    let descHeight=$(href).innerHeight()
// //alert(descHeight)
//    $('.itemDetailBox').stop().animate({'height': 0})
//    $('.itemDetail').hide()
//    $(href).show()
// $(href).parents('.itemDetailBox').stop().animate({'height': descHeight})


// })


