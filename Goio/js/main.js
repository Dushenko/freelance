$(document).ready(function () {

    $('.burger-opener').on('click', function () {
        $('.nav').toggleClass('show');
        $('.burger-mask').toggleClass('show');
        $('.search-form').removeClass('active');
        $('.search-btn').removeClass('hidden');
    });

    //more-btn
    $('.news__more').on('click', function () {
        $(this).parent().find('.news__hidden-content').slideDown();
        $(this).hide();
    });

    $('.more-news').on('click', function () {
        $(this).parent().find('.sidebar-news-hidden').slideDown();
        $(this).hide();
    });

    //forms
    
    $('.message').on('click', function () {
        $('.search-form').removeClass('active');
        $('.message-icon').toggleClass('active');
        $('.mail-form').toggleClass('active');
        $('.search-icon').removeClass('active');
        $('.search').toggleClass('active');
    });

    $('.search-btn').on('click', function () {
        var ww = $(window).width();
        $('.mail-form').removeClass('active');
        $('.search-icon').toggleClass('active');
        $('.search-form').toggleClass('active');
        $('.message-icon').removeClass('active');
        $('.search').toggleClass('active');
        $('.nav').removeClass('show');
        $('.burger-mask').removeClass('show');
        $('.ham').removeClass('active');
        if(ww < 1024) {
            $(this).toggleClass('hidden');
        }
    });

    $('.search-box').on('click', function () {
        $('.search-btn').removeClass('hidden');
        $('.search-form').removeClass('active');
    });

});