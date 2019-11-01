jQuery(document).on('ready', function() {
    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1 ,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    $(".books__slider").slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        captions: true,
        cssEase: 'linear'
    });

    $("#ramazan-slider").slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000
    });

    $("#articles-slider").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

(function ($) {
	$(function(){
		$('.icon').on('click', function(){
			$(this).closest('.nav').toggleClass('nav-open');
		});
	});
})(jQuery);

$('p#string').click(function(e) {
  e.preventDefault();
  $(this).find('span.span_icon').toggleClass('active');
});

$('.btn').on('click', function () {
    if ($(this).parent().height() >= 50) {
        $(this).parent().animate({
            height: 25 + 'px'
        });
        $(this).parent().parent().removeClass('active-animated').css('zIndex','1');
        $(this).parent().parent().parent().css('zIndex','1');
    } else {
        $(this).parent().animate({
            height: 100 + '%'
        });
        $(this).parent().parent().parent().css('zIndex','9999');
        $(this).parent().parent().addClass('active-animated');
    }
});
