$(document).ready(function () {

	$('.js-vacancy-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		// autoplay: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1360,
			settings: {
				slidesToShow: 3,
			}
		}
		]
	});

	// $('.js-vacancy-slider .slick-arrow').click(() => {
	// 	$('.vacancy-slider').addClass('bg--hidden');
	// })

	// $('.js-vacancy-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.vacancy-slider').removeClass('bg--hidden');
	// });

	$('.js-news-sliser').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true
	});

});