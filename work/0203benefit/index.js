// 선언 할당 
// let sw=0
// // 조건값이 참이면

// $('.bar').click(function(){
//     sw=!sw // 기존값에 반대값으로 지정
//     console.log(sw);
//     if(sw){// 조건값이 참이면
//         $(this).addClass('change') 
//            $('nav').addClass('on')
// }
//     else{// 조건값이 거짓이면
//         $(this).removeClass('change')
//     $('nav').removeClass('on')}


// })


let sw=0     // 초기값 설정
$('.bar').click(function(){
sw=!sw  // 클릭하면 반대값으로 만들어라
console.log(sw);
if(sw){
    $('nav').animate({'left':'0px'})
    $(this).addClass('change')
}else{
    $('nav').animate({'left':'-300px'})
    $(this).removeClass('change')

}

})

$(window).resize(function(){
sw=0  // 초기화
let wd=$(this).width()// 디바이스 width 보기 
$('bar').removeClass('change')// 기존의 x버튼 해제
// console.log(wd)
if(wd>=992){// 디바이스 너비가 992보다 크면
    $('nav').css({'left':'0'})// 네비의 위치를 0
}else{
    $('nav').css({'left':'-300px'})// 만족하지 않으면 네비의 위치를 -300으로 지정해라
}

})