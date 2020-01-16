$(document).ready(function () {

	$('.js-main-menu li').hover(function(){
		$(this).find('.js-menu').toggleClass('active');
	});

	$('.js-menu li').click(function(){
		$(this).find('.js-sub-menu').slideToggle();
		$(this).toggleClass('active');
	});

	//burger
	if(document.querySelector('.js-burger')){
		$('.js-burger').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('.js-nav').removeClass('active');
				$('body').removeClass('overflow');
			} else {
				$(this).addClass('active');
				$('.js-nav').addClass('active');
				$('body').addClass('overflow');
			}
		})
	}

});