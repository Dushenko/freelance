$(document).ready(function () {

    // burger
    if($(window).width() < 980) {
        $('.tarif__name').on('click', function () {
            $('.tarif__content').not($(this).next()).slideUp();
            $(this).next().slideToggle();
        });
    };

    //modal 
    $('.enter-btn').on('click', function () {
        $('.mask').fadeIn();
        $('.login-wrap').fadeIn();
        $('.reg-wrap').fadeOut();
    });

    $('.reg-btn').on('click', function () {
        $('.mask').fadeIn();
        $('.reg-wrap').fadeIn();
    });

    $('.reg-opener').on('click', function () {
        $('.login-wrap').fadeOut();
        $('.reg-wrap').fadeIn();
    });


    $('.user-form__close').on('click', function () {
        $('.mask').fadeOut();
        $('.login-wrap').fadeOut();
        $('.reg-wrap').fadeOut();
    });

    $('.mask').on('click', function () {
        $('.mask').fadeOut();
        $('.login-wrap').fadeOut();
        $('.reg-wrap').fadeOut();
    });

});
