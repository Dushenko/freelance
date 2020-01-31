$(document).ready(function () {

	//burger
	if(document.querySelector('.js-burger')){
		$('.js-burger').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				// $('.js-mask').fadeOut('active');
				$('.js-burger-menu').removeClass('active');
				$('.main').removeClass('opacity');
				$('body').removeClass('overflow');
				$('html').removeClass('overflow');
			} else {
				$(this).addClass('active');
				// $('.js-mask').fadeIn('active');
				$('.js-burger-menu').addClass('active');
				$('.main').addClass('opacity');
				$('body').addClass('overflow');
				$('html').addClass('overflow');
			}
		})
	}

});