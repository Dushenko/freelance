document.addEventListener('DOMContentLoaded', function(){
	'use strict';

	$('.js-burger').click( function () {
		$(this).toggleClass('is-open');
		$('.js-nav').toggleClass('active');
	});

});