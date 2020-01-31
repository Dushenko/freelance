$(document).ready(function () {

	$('.js-feedback-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		vertical: true,
		centerMode: true,
		// autoplay: true
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				vertical: false,
				slidesToShow: 1,
				centerMode: false,
			}
		}
		]
	});

});