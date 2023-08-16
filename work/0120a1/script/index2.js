// alert("안녕?")-연결 확인

$('.menu li a').click(function(){
let href=$(this).attr("href")
$('.board').hide()
$(href).show()
})
