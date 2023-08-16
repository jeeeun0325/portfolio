//alert('안녕')

$('.menu li a').click(function(){
let href=$(this).attr("href")
//alert(href)
$('.board').hide()
$(href).show()
})

