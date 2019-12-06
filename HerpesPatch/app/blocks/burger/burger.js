document.addEventListener('DOMContentLoaded', function(){
	'use strict';

	$('.js-burger').click( function () {
		$(this).toggleClass('is-open');
		$(this).toggleClass('fixed-center');
		$('.js-nav').toggleClass('active');
		$('.header').toggleClass('index');
	});

	$('.nav__link').click( function () {
		$('.js-burger').removeClass('is-open');
		$('.js-burger').removeClass('fixed-center');
		$('.js-nav').removeClass('active');
		$('.header').removeClass('index');
	});

});