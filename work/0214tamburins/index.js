function mainHide() {

    $('figure').animate({ 'top': '-750px' }, 1000)
    $('ul.btn').delay(400).animate({ 'bottom': '-344px' }, 1000)
        $('.left p').delay(400).fadeOut(1000)

    $('.right').delay(800).animate({ 'margin-left': '400px' }, 1000)
}

function mainHide2() {

    $('figure').animate({ 'top': '-750px' }, 1000)
    $('ul.btn').delay(400).animate({ 'bottom': '-344px' }, 1000)
        $('.left p').delay(400).fadeOut(1000)

    $('.right').delay(800).animate({ 'margin-left': '900px' }, 1000)
}
function mainShow() {
    $('figure').delay(1000).animate({ 'top': '0px' }, 1000)
    $('.left p').delay(1000).fadeIn(1000)
    $('ul.btn').delay(1000).animate({ 'bottom': '-100px' }, 1000)
    $('.right').delay(1000).animate({ 'margin-left': '260px' }, 1000)

}


function art1Show() {
    $('.art1').fadeIn(1000, function () {
        $('p.linetop').animate({ 'width': '100%' }, function () {
            $('p.lineright').animate({ 'height': '100%' }, function () {
                $('p.linebottom').animate({ 'width': '100%' }, function () {
                    $('p.lineleft').animate({ 'height': '100%' }, function () {
                        $('.art1bg').fadeIn()
                        $('.art1Imge').fadeIn()
                        $('.pro').fadeIn()
                        $('.ca').fadeIn()
                    })
                })
            })
        })
    })
}
function art2Show() {
    $('.art2').fadeIn(1000, function () {
        $('.art2 ul').animate({'margin-left':'0'},500)
    })
}


function art1Hide(){
    $('.art1Imge').fadeOut()
    $('.art1bg').fadeOut()
    $('.ca').fadeOut()
    $('.pro').fadeOut()
    $('.art1').fadeOut(500, function () {
        $('p.linetop').animate({ 'width': '0%' })
            $('p.lineright').animate({ 'height': '0%' })
                $('p.linebottom').animate({ 'width': '0%' })
                    $('p.lineleft').animate({ 'height': '0%' })

    })
}
function art2Hide(){
 
    $('.art2').fadeOut(500, function () {
        $('.art2 ul').animate({'margin-left':'150%'},500)
    })
}

$('.btn1 a').click(function () {
    mainHide()
    art1Show()

})
$('.btn2 a').click(function () {
    mainHide2()
    art2Show()

})
$('.art1 .close').click(function () {
    art1Hide()
    mainShow()

})
$('.art2 .close').click(function () {
    art2Hide()
    mainShow()

})
