$(document).ready(function () {

    // burger
    $('.burger-opener').on('click', function () {
        $('.nav').toggleClass('show');
        $('.burger-opener').toggleClass('show');

        $('.town-wrap-burger').show();
        $('.nav-burger').show();
        $('.contacts-burger').show();
    });


    //topFixed

    var element = $(".headerFixed");
    var golova  = $(".header");
    var section  = $(".intro-section");
    var height_el = element.offset().top;

    $(window).scroll(function() {

        if($(window).scrollTop() > height_el) {
            golova.addClass("fixed");
            section.addClass("active");
        } else {
            golova.removeClass("fixed");
            section.removeClass("active");
        }
    });



    $('.searchShow').on('click', function () {
        $('.search').fadeIn('');
    });
});