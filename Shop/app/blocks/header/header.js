$(document).ready(function () {

	
	$('.js-menu li').click(function(){
		$(this).find('.js-sub-menu').slideToggle();
		$(this).toggleClass('active');
	});

	if($(window).width() > 900){
		$('.js-main-menu li').hover(function(){
			$(this).find('.js-menu').toggleClass('active');
			// $('.header-bot').toggleClass('active');
		});
	};

	if($(window).width() < 900){
		$('.js-main-menu li').not('.js-menu').click(function(){
			$(this).find('.js-menu').slideToggle();
		});
	};


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