$(document).ready(function () {

    // burger

    $('.burger-opener').on('click', function () {
        $('.burger-menu').toggleClass('show');
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

});

jQuery(function () {
    initSlickCarousel();
});

// slick init
function initSlickCarousel() {
    jQuery('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        // autoplay: true,
        focusOnSelect: true
    });

    jQuery('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        arrows: true,
        infinite: true,
        // autoplay: true,
        focusOnSelect: true
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
}