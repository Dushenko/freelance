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

	$('.js-about-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		infinite: true,
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

	$('.js-big-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		pauseOnHover: true,
		infinite: true,
		focusOnSelect: false,
		asNavFor: '.js-small-slider'
	});
	$('.js-small-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.js-big-slider',
		dots: false,
		arrows: false,
		focusOnSelect: true
	});

});