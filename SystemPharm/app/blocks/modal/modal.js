$(document).ready(function () {

	//modal 
	$('.js-open-modal').click( function () {
		$('.js-contacts').fadeIn();
		$('.js-mask').fadeIn();
	});

	$('.js-modal-close').click( function () {
		$('.modal').fadeOut();
		$('.js-mask').fadeOut();
	});

	$('.js-mask').click( function () {
		$(this).fadeOut();
		$('.modal').fadeOut();
	});


	//product popup
	$('.production').click( function() {
		$('.js-information').fadeIn();
		$('.js-mask').fadeIn();
	});

});