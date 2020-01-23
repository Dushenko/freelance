//=require ../blocks/**/*.js
$(document).ready(function () {
	// modal
	$('.call').on('click', function () {
		$('.js-modal').toggleClass('active');
		$('.js-mask').toggleClass('active');
	});

	// close
	$('.modal__close').on('click', function () {
		$('.js-modal').removeClass('active');
		$('.js-mask').removeClass('active');
	});

	$('.burger-btn').click(function(){
		$(this).toggleClass('open');
		$('.side-bar').toggleClass('active');
	});

	$('.js-label').click(function(){
		$('.qr-wrap').slideToggle();
	});

	$('.js-element').click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('active');
	});
});
