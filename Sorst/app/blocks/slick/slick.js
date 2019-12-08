$(document).ready(function () {

	$('.js-prod-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		responsive: [
		{
			breakpoint: 3000,
			settings: "unslick"
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
});