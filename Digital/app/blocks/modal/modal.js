$(document).ready(function () {

	$('.network').click(function(){
		$('.js-modal-step1').fadeIn();
		$('.js-mask').fadeIn();
	});

	$('.lk-form__modal-btn').click(function(){
		$('.js-modal-step1').fadeOut();
		$('.js-modal-step2').fadeIn();
	});

	$('.lk-form__basket-btn').click(function(){
		$('.js-modal-step2').fadeOut();
		$('.js-modal-step3').fadeIn();
	});
	

	$('.js-mask').click(function(){
		$('.modal').fadeOut();
		$(this).fadeOut();
	});

});