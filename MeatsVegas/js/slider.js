$(document).ready(function () {
    $( ".hits-slider" ).click(function( event ) {
      event.preventDefault();
  });
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        focusOnSelect: false,
    });

    $('.hits-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows: true,
        dots: false,
        infinite: true,
        autoplay: true,
        focusOnSelect: false,
        responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
    });

});