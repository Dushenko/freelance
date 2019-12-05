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

	//scroll
	$('.nav__link').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$("#fullpage").fullpage({
		menu:'#menu',
		scrollBar:false,
		navigation:true,
		slidesNavigation:true,
		navigationPosition:'left',
		loopTop:true,
		loopBottom:true,
		loopHorizontal:false,
		responsive: 768,
	});

	//video
	$('.js-video-open').click( function () {
		$('.js-video').fadeIn();
	});

	$('.js-video-close').click( function () {
		$('.js-video').fadeOut();
	});
	

});