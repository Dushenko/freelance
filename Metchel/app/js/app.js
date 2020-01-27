//=require ../blocks/**/*.js
$(document).ready(function () {
	// modal
	$('.js-call').on('click', function () {
		$('.js-modal').fadeIn('active');
		$('.js-mask').fadeIn('active');
	});

	// close
	$('.modal__close').on('click', function () {
		$('.js-modal').fadeOut('active');
		$('.js-mask').fadeOut('active');
	});
	
	if ($(window).width() < 1024) {
		$('.category-wrap').click(function(){
			$('.left-bar').toggleClass('active');
		});
	}

	  //scroll
    $('.scroll-link').on('click', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
