$(document).ready(function () {
    
    // burger
    $('.burger-opener').on('click', function () {
        $('.nav').toggleClass('show');
        $('.burger-opener').toggleClass('show');

        $('.town-wrap-burger').show();
        $('.nav-burger').show();
        $('.contacts-burger').show();
    });

    //scrollTop
    $('.nav__link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //lang
    $(".translate").click(function () {
        var clicked = $(this).html();
        $('.current-lang').html(clicked);
    });

    
    $('.translate').on('click', function () {
        $('.lang__drop').removeClass('show');
    });

    $('.lang__list_current').on('click', function () {
        $('.lang__drop').toggleClass('show');
    });



    //modal 
    $('.enter-btn').on('click', function () {
        $('.mask').fadeIn();
        $('.login-wrap').fadeIn();
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
    

});
