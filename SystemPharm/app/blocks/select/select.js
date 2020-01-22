$(document).ready(function () {

	//select 
	$('.js-select').click( function () {
		$(this).toggleClass('active');
		$('.js-select-list').slideToggle();
	});

	//close custom select
	$(function($){
		$(document).mouseup(function (e){
			var div = $(".js-select"); 
			if (!div.is(e.target) 
				&& div.has(e.target).length === 0) {
				div.removeClass('active');
				$('.js-select-list').slideUp();
			}
		});
	});

	$('.select__list li').click(function () {
		var selected = $(this).text();
		$('.select__text').text(selected);
	});

});