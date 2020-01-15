$(document).ready(function () {

	//burger
	if(document.querySelector('.js-burger')){
		$('.js-burger').click(function(){
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				$('.js-nav').removeClass('active');
				$('body').removeClass('overflow');
				$('html').removeClass('overflow');
			} else {
				$(this).addClass('active');
				$('.js-nav').addClass('active');
				$('body').addClass('overflow');
				$('html').addClass('overflow');
			}
		})
	}

});