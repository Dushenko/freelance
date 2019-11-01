const $ = require('jquery');
window.jQuery = window.$ = $;
require('../../js/vendors/slick/slick-main.js');

$(document).ready(function () {

	$('.js-main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		arrows: true,
		infinite: true,
		focusOnSelect: true
	});

	$('.js-photo-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		arrows: true,
		infinite: true,
		focusOnSelect: true
	});

	$('.js-other-news-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		responsive: [{
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
		},
		]
	});

	$('.js-nearest-match-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		]
	});

	$('.js-meeting-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: true,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		responsive: [{
			breakpoint: 1024,
			settings: "slick",
		},
		{
			breakpoint: 4000,
			settings: "unslick",
		},
		]
	});

});

