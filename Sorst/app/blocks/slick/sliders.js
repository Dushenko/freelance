$(document).ready(function () {

	$('.js-prod-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
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

	$('.js-product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		infinite: true
	});

	$('.js-product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		infinite: true
	});

	$('.js-tablet-slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		responsive: [
		{
			breakpoint: 3000,
			settings: "unslick"
		},
		{
			breakpoint: 1024,
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
		}
		]
	});

});