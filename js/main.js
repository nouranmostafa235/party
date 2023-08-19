
document.getElementById('nav').addEventListener('click', function () {
    $('.items').fadeIn()
    $('#nav').css('left', '240px')
})
document.getElementById('close').addEventListener('click', function () {
    $('.items').fadeOut()
    $('#nav').css('left', '0px')
})
$('#s1').find('.disc').css('display', 'flex')
function singer(e) {
    var singerId = e.id
    $('#' + singerId).find(".disc").fadeToggle()
    $('#' + singerId).siblings().find('.disc').css('display', 'none')
}
var countDown = new Date("Jan 5, 2024 15:37:25").getTime();
var update = setInterval(function () {
    var now = new Date().getTime();
    var diff = countDown - now
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById('days').innerHTML = days + ' D'
    document.getElementById('hours').innerHTML = hours + ' H'
    document.getElementById('mins').innerHTML = minutes + ' M'
    document.getElementById('seconds').innerHTML = seconds + ' S'
}, 1000);


var count = 100
$('#textarea').keydown(function (e) {
    if (e.key != 'ArrowUp' && e.key != 'ArrowDown' && e.key != 'ArrowLeft' && e.key != 'ArrowRight') {
        count--;
        document.getElementById('count').innerHTML = count
    }
    if (e.key == 'Backspace') {
        count += 2
        if (count > 100) {
            count = 100
        }
        document.getElementById('count').innerHTML = count
    }
    if (count < 0) {
        document.getElementById('count').innerHTML = '0'
    }
})



