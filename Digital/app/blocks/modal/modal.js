$(document).ready(function () {

	$('.network').click(function(){
		$('.js-modal-step1').fadeIn();
		$('.js-mask').fadeIn();
	});

	$('.js-mask').click(function(){
		$('.modal').fadeOut();
		$(this).fadeOut();
	});

});