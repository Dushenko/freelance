$(document).ready(function () {

	//service-nav
	$('.service-nav li').click( function () {
		$('.service-nav li').removeClass('active');
		$(this).addClass('active');
	});

});