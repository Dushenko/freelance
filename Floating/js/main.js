$(document).ready(function () {

    $('.burger-opener').on('click', function () {
        $('.burger-menu').toggleClass('show');
        $('.town-wrap-burger').show();
        $('.nav-burger').show();
        $('.contacts-burger').show();
    });
    $('.main-menu__item').on('click', function () {
        $('.main-menu__link').addClass('active');
    });
    $('.load-more__btn').on('click', function () {
        $('.match-hidden').show();
    });

    $('.main-menu-burger__link').on('click', function () {
        if($(this).children('span.arrow').hasClass('active')){
            $(this).siblings('.sub').slideUp();
            $(this).children('span.arrow').removeClass('active');
        } else {
            $('.arrow').removeClass('active');
            $(this).children('span.arrow').addClass('active');
            $('.sub').slideUp();
            $(this).siblings('.sub').slideDown();
        }
    });

    $('.call-btn').on('click', function () {
        $('.js-popup-wrap').fadeIn();
    });

    $('.js-thanks-btn').on('click', function () {
        $('.js-form-call').fadeOut();
        $('.js-thanks-application').fadeIn();
    });

    $('.mask-call').on('click', function () {
        $('.js-popup-wrap').fadeOut();
    });

    $('a').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feedback-slider',
        dots: true,
        centerMode: true,
        vertical: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 850,
            settings: {
               vertical: false
           }
       },  
       ]
   });
});
