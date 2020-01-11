//=require ../blocks/**/*.js
$(document).ready(function () {
	// modal
	$('.call').on('click', function () {
		$('.js-modal').toggleClass('active');
		$('.js-mask').toggleClass('active');
	});

	// close
	$('.modal__close').on('click', function () {
		$('.js-modal').removeClass('active');
		$('.js-mask').removeClass('active');
	});
	
	if ($(window).width() < 1024) {
		$('.category-wrap').click(function(){
			$('.left-bar').toggleClass('active');
		});
	}
});
