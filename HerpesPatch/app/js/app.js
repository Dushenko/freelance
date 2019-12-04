//=require ../blocks/**/*.js

document.addEventListener('DOMContentLoaded', function(){
	'use strict';
	
	$('.scroll-down').on('click', () => {
		fullpage_api.moveSectionDown();
	})
	$('.scroll-up').on('click', () => {
		fullpage_api.moveSectionUp();
	})

	$('.js-form').on('click', function () {
		$('.js-mask').fadeIn('active');
		$('.js-modal').fadeIn('active');
	});

	$('.js-mask').on('click', function () {
		$(this).fadeOut('active');
		$('.js-modal').fadeOut('active');
	});

	//footer
	$('.js-footer-open').click( function () {
		$('.js-footer').addClass('active');
	});

	$('.js-footer-close').click( function () {
		$('.js-footer').removeClass('active');
	});




	if ($(window).width() < 768) {
		fullpage_api.setResponsive(true);
	}

	$(window).resize(function() {
		if ($(window).width() < 768) {
			fullpage_api.setResponsive(true);
		}
	});
	
});