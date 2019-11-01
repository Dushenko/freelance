$(document).ready(function () {

    //gazon-arrow
    $('.gazon__arrow').on('click', function () {
        $(this).parent().find($('.gazon__hidden-wrap')).slideToggle();
        $(this).toggleClass('active');
    });
    
    // burger
    $('.burger-opener').on('click', function () {
        $('.nav').toggleClass('show');
        $('.burger-opener').toggleClass('show');

        $('.town-wrap-burger').show();
        $('.nav-burger').show();
        $('.contacts-burger').show();
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

    $('.projects-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1030,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },  
        ]
    });

});