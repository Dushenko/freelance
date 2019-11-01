$(document).ready(function () {

	$('.js-call__order').on('click', function () {
		$('.js-popup-wrap').fadeIn();
	});

	$('.js-call__order').on('click', function () {
		$('.js-popup-wrap').fadeIn();
		$('body').css('overflow', 'hidden');
	});

	$('.mask-call').on('click', function () {
		$('.js-popup-wrap').fadeOut();
		$('body').css('overflow', 'auto');
	});

	$('.js-thanks-btn').on('click', function () {
		$('.js-form-call').fadeOut();
		$('.js-thanks-application').fadeIn();
		$('body').css('overflow', 'auto');
	});

});