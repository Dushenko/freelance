//=require ../blocks/**/*.js
$(document).ready(function () {

	$('.js-burger').click( function () {
		$(this).toggleClass('active');
		$('.js-nav').toggleClass('active');
	});

	$('.js-lang').click( function () {
		$('.langs').slideToggle('active');
	});

});