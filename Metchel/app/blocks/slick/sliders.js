$(document).ready(function () {

	$('.js-intro-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		responsive: [
		{
			breakpoint: 3000,
			settings: "unslick"
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	$('.js-main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		asNavFor: '.js-nav-slider'
	});

	$('.js-nav-slider').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.js-main-slider',
		dots: false,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 5,
			}
		}

		]
	});

	$('.js-review-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		infinite: true,
		appendDots: $('.dots'),
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				vertical: true
			}
		}
		]
	});

});