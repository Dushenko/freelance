$(document).ready(function () {

	$('.js-main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		asNavFor: '.js-slider-control'
	});
	$('.js-slider-control').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		focusOnSelect: true,
		asNavFor: '.js-main-slider',
		responsive: [
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 620,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.js-activity-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		responsive: [
		{
			breakpoint: 1320,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 1080,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	$('.js-partners-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

});