$(document).ready(function () {

    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        arrows: false,
        dots: true,
        infinite: true,
        focusOnSelect: true
    });

    $('.sliderCenter').slick({
        centerMode: true,
        dots: true,
        centerPadding: '360px',
        slidesToShow: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
    });
});