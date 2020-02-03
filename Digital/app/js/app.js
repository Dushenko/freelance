//=require ../blocks/**/*.js
$(document).ready(function () {

	//scroll to top
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('.btn-up').fadeIn();
			} else {
				$('.btn-up').fadeOut();
			}
		});
		$('.btn-up').click(function() {
			$('body,html').animate({scrollTop:0},1500);
		});
	});


	//animation
	$(window).scroll(function () {
		$('.mov').each(function () {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();

			if (imagePos < topOfWindow + 600) {
				$(this).addClass('anim');
			}
		});
	});
});






