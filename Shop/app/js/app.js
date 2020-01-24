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

});
