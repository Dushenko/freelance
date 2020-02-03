$(document).ready(function () {

	//select 
	$('.js-select').click( function () {
		$(this).toggleClass('active');
		$('.js-select-list').slideToggle();
	});

	$('.js-select-list li').click(function () {
		var selected = $(this).text();
		$('.js-select-text').text(selected);
	});

	//select service
	$('.js-serv-select').click( function () {
		$(this).toggleClass('active');
		$('.js-serv-list').slideToggle();
	});

	$('.js-serv-list li').click(function () {
		var selectedServ = $(this).text();
		$('.js-serv-text').text(selectedServ);
	});

	//close custom select
	$(function($){
		$(document).mouseup(function (e){
			var div = $(".select__head"); 
			if (!div.is(e.target) 
				&& div.has(e.target).length === 0) {
				div.removeClass('active');
				$('.select__list').slideUp();
			}
		});
	});

});