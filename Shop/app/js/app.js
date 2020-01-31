//=require ../blocks/**/*.js
$(document).ready(function () {

	if($(window).width() > 768){
		$('.grid').masonry({
			itemSelector: '.grid__item',
			columnWidth: '.grid__sizer',
			gutter: 30,
			percentPosition: true
		});
	};

	$('.js-filter-name').click(function(){
		$(this).next().slideToggle();
	});

	$('.js-mob-filter').click(function(){
		$('.js-filter-form').slideToggle();
	});

	$('.filter-tab__head').click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('active');
	});

	
	//to-top
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('.back-top').fadeIn();
				$('.header-bot').addClass('active');
				$('.logo').addClass('logo-black');
			} else {
				$('.back-top').fadeOut();
				$('.header-bot').removeClass('active');
				$('.logo').removeClass('logo-black');
				
			}
		});
		$('.back-top').click(function() {
			$('body,html').animate({scrollTop:0},1500);
		});
	});

	//Intense
	var elements = document.querySelectorAll( '.demo-image' );
	Intense( elements );

});
