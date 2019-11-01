$(document).ready(function () {

    $('.new-order__button').on('click', function () {
        $('.popup').fadeToggle();
        $('.popup__button').on('click', function () {
            $('.popup').removeClass();
        });
    });

    // $('.header__tab').first().addClass('active');
    $('.header__tab').on('click', function () {
        $('.header__tab').removeClass('active');
        $(this).addClass('active');
    });

    $('.request__button').on('click', function () {
        $('.request__popup').fadeToggle();
    });


    $('.orders-opener').on('click', function () {
        $('.orders-section').addClass('show');
        $('.orders-opener').addClass('header__tab');
        $('.couriers-section').removeClass('show');
    });

    $('.request-opener').on('click', function () {
        $('.requests').addClass('active');
        // $('.orders-opener').addClass('header__tab');
        // $('.couriers-section').removeClass('show');
    });


    $('.chat-opener').on('click', function () {
        $('.chat-section').addClass('show');
    });


    $('.couriers-opener').on('click', function () {
        $('.couriers-section').addClass('show');
        $('.orders-section').removeClass('show');
    });

    $('.courier-opener').on('click', function () {
        $('.couriers').addClass('show');
    });

    

    $('document').ready(function(){
        $('.header__tgSwitch').each(function(){
            if ($(this).find('input').attr('checked')) {
                $(this).addClass('active');
                $(this).find('.slider').css({"-webkit-transform" : "translateX(30px)"});
            }
        });
    });

    $('.header__tgSwitch').click(function(){
        if ($(this).find('input').attr('checked')) {
            $(this).removeClass('active');
            $(this).find('input').attr('checked', false);
            $(this).find('.slider').css({"-webkit-transform" : "translateX(0px)"});
        } else {
            $(this).addClass('active');
            $(this).find('input').attr('checked', true);
            $(this).find('.slider').css({"-webkit-transform" : "translateX(30px)"});
        }
    });

    $('document').ready(function(){
        $('.orders-header__tgSwitch').each(function(){
            if ($(this).find('input').attr('checked')) {
                $(this).addClass('active');
                $(this).find('.slider').css({"-webkit-transform" : "translateX(30px)"});
            }
        });
    });

    $('.orders-header__tgSwitch').click(function(){
        if ($(this).find('input').attr('checked')) {
            $(this).removeClass('active');
            $(this).find('input').attr('checked', false);
            $(this).find('.slider').css({"-webkit-transform" : "translateX(0px)"});
        } else {
            $(this).addClass('active');
            $(this).find('input').attr('checked', true);
            $(this).find('.slider').css({"-webkit-transform" : "translateX(30px)"});
        }
    });

    $('.title-tab').first().addClass('active')
    $('.title-tab').on('click',function(){
        $('.title-tab').removeClass('active');
        $(this).addClass('active');
    });

});