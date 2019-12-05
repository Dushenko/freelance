//=require ../blocks/**/*.js

document.addEventListener('DOMContentLoaded', function(){
	'use strict';
	
	//video
	$('.js-video-open').click( function () {
		$('.js-video').fadeIn(1500);
		$('.main').fadeOut(1000);
	});

	$('.js-video-close').click( function () {
		$('.js-video').fadeOut();
		$('.main').fadeIn();
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
		$('body,html').animate({scrollTop: top}, 1000);
	});

	//fullpage
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

	// if ($(window).width() < 768) {
	// 	fullpage_api.destroy('all');
	// }

	//animation
	$(window).scroll(function() {
		$('.mov').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass('anim');
			}
		});
	});

	
	

});