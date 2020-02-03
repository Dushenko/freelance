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

	if($(window).width() < 768){
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
				var div = $(".js-serv-select"); 
				if (!div.is(e.target) 
					&& div.has(e.target).length === 0) {
					div.removeClass('active');
					$('.js-serv-list').slideUp();
				}
			});
		});
	};
	
});