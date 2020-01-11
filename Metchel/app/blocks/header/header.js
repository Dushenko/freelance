$(document).ready(function () {

	//burger
	if(document.querySelector('.burger-btn')){
		$('.burger-btn').click(function(){
			if($(this).hasClass('open')){
				$(this).removeClass('open');
				$('.nav').removeClass('active');
				$('body').removeClass('overflow');
			} else {
				$(this).addClass('open');
				$('.nav').addClass('active');
				$('body').addClass('overflow');
			}
		})
	}

	if ($(window).width() < 768) {
		$('.head-services').click(function(){
			$(this).toggleClass('arrow');
			$('.services-menu').slideToggle('active');
		});
	}

});