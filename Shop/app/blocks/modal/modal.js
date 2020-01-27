$(document).ready(function () {

	$('.modal__close').click(function(){
		$('.modal').fadeOut();
		$('.js-mask').fadeOut();
	});

	$('.js-mask').click(function(){
		$('.modal').fadeOut();
		$(this).fadeOut();
	});

});