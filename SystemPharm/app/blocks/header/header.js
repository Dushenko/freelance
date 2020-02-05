$(document).ready(function () {

	//burger
	if(document.querySelector('.js-burger')){
		$('.js-burger').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('.js-nav').removeClass('active');
				$('.main').removeClass('opacity');
				$('body').removeClass('overflow');
				$('html').removeClass('overflow');
			} else {
				$(this).addClass('active');
				$('.js-nav').addClass('active');
				$('.main').addClass('opacity');
				$('body').addClass('overflow');
				$('html').addClass('overflow');
			}
		})
	}

	//lang
    $(".lang__wrap a").click(function () {
        var clicked = $(this).html();
        $('.lang__current').html(clicked);
        $('.lang__wrap').removeClass('active');
    });

    $('.lang__current').click(function () {
        $('.lang__wrap').toggleClass('active');
    });

});