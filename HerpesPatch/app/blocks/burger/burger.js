document.addEventListener('DOMContentLoaded', function(){
	'use strict';

	$('.js-burger').click( function () {
		$(this).toggleClass('is-open');
		$(this).toggleClass('fixed-center');
		$('.js-nav').toggleClass('active');
		$('.header').toggleClass('index');
	});

});