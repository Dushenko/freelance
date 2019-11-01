$(document).ready(function () {

    //call-popup
    $('.call').on('click', function () {
        $('.popup-form').toggleClass('show');
    });

    $('.form__close').on('click', function () {
        $('.popup-form').removeClass('show');
        $('.popup-thanks').removeClass('show');
    });

    $('.sell-btn_popup').on('click', function () {
        $('.popup-form').toggleClass('show');
        $('.popup-thanks').addClass('show');
    });

    $('.sell-btn-popup').on('click', function () {
        $('.popup-thanks').addClass('show');
    });

    //lang
    $(".translate").click(function () {
        var clicked = $(this).html();
        $('.current-lang').html(clicked);
    });

    //scroll
    $('a').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //to-top
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });
        $('.back-top').click(function() {
            $('body,html').animate({scrollTop:0},1500);
        });
    });

    //slider
    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        focusOnSelect: true
    });
});