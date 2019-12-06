//=require ../blocks/**/*.js

document.addEventListener('DOMContentLoaded', function(){
	'use strict';
	
	//video
	$('.js-video-open').click( function () {
		$('.js-video').fadeIn();
		$('.js-mask').fadeIn(1000);
	});

	$('.js-video-close').click( function () {
		$('.js-video').fadeOut();
		$('.js-mask').fadeOut();
		var videoURL = $('#video').prop('src');
		videoURL = videoURL.replace("&autoplay=1", "");
		$('#video').prop('src','');
		$('#video').prop('src',videoURL);
	});

	//footer
	$('.js-footer-open').click( function () {
		$('.js-footer').addClass('active');
	});

	$('.js-footer-close').click( function () {
		$('.js-footer').removeClass('active');
	});

	//fullpage
	$("#fullpage").fullpage({
		anchors:['1page','2page','3page','4page','5page','6page','7page','8page'],
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