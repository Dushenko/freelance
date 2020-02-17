$(document).ready(function () {

	$('.js-reviews-slider').slick({
		slidesToShow: 3,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		rows: 1,
		swipeToSlide: true,
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
				slidesToShow: 2,
			}
		}
		]
	});

});