$(".frames-component-2").addClass('frames-component-hover');
$(".frames-component-2 .circle-component").addClass('circle-component-img-hover');
$(".frames-component-2 h1").addClass('frames-component-h1-hover');
$(".frames-component-2 p").addClass('frames-component-p-hover');
$('.component .background-bonus .col-lg-4 .bounce').hover(function () {
    $('.component .background-bonus .col-lg-4 .bounce').removeClass("frames-component-hover");
    $('.component .background-bonus .col-lg-4 .bounce .circle-component').removeClass("circle-component-img-hover");
    $('.component .background-bonus .col-lg-4 .bounce h1').removeClass("frames-component-h1-hover");
    $('.component .background-bonus .col-lg-4 .bounce p').removeClass("frames-component-p-hover");
    $(this).addClass('frames-component-hover');
    $(this).find('.circle-component').addClass('circle-component-img-hover');
    $(this).find('h1').addClass('frames-component-h1-hover');
    $(this).find('p').addClass('frames-component-p-hover');
});
new WOW().init(); 
var btn = $('#button_scroll_top');
$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show')
    } else {
        btn.removeClass('show') 
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300')
})

$(document).ready(function () { $('.scrollorder').click(function () { $('html, body').animate({ scrollTop: $(".order-form").offset().top }, 3000) }) });
