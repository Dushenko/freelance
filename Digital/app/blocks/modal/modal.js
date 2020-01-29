$(document).ready(function () {

	$('.network').click(function(){
		$('.js-modal-step1').fadeIn();
		$('.js-mask').fadeIn();
	});

	$('.js-step2').click(function(){
		$('.js-modal-step1').fadeOut();
		$('.js-modal-step2').fadeIn();
	});

	$('.lk-form__basket-btn').click(function(){
		$('.js-modal-step2').fadeOut();
		$('.js-modal-step3').fadeIn();
	});

	//open methods
	$('.js-method-btn ').click(function(){
		$('.methods').slideDown();
	});

	//sign-in
	$('.js-sign-in').click(function(){
		$('.js-modal-login').fadeIn();
		$('.js-mask').fadeIn();
	});

	//registration
	$('.js-reg-open').click(function(){
		$('.js-modal-reg').fadeIn();
		$('.js-modal-login').fadeOut();
		$('.js-mask').fadeIn();
	});

	$('.js-mask').click(function(){
		$('.modal').fadeOut();
		$(this).fadeOut();
	});

});