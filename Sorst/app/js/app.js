//=require ../blocks/**/*.js
$(document).ready(function () {

	$('.js-burger').click( function () {
		$(this).toggleClass('active');
		$('.js-nav').toggleClass('active');
		$('html').toggleClass('overflow');
		$('body').toggleClass('overflow');
	});

	$('.js-lang').click( function () {
		$('.langs').slideToggle('active');
	});

	new WOW().init();

});