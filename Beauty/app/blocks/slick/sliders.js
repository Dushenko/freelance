$(document).ready(function () {

	$('.js-modal-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: false,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		}
		]
	});
});