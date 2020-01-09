$(document).ready(function () {

	//select 
	$('.js-select').click( function () {
		$(this).toggleClass('active');
		$(this).next('.js-select-list').slideToggle();
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

	$('.js-select-list li').click(function () {
		var selected = $(this).text();
		$(this).parent().parent().parent().find('.select__text').text(selected);
	});

});