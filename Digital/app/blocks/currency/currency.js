$(document).ready(function () {

	//select 
	$('.js-currency').click( function () {
		$(this).toggleClass('active');
		$('.js-currency-list').slideToggle();
	});

	$('.js-currency-list li').click(function () {
		var selectedCurrency = $(this).text();
		$('.js-currency-text').text(selectedCurrency);
	});

	//close custom select
	$(function($){
		$(document).mouseup(function (e){
			var div = $(".js-currency"); 
			if (!div.is(e.target) 
				&& div.has(e.target).length === 0) {
				div.removeClass('active');
				$('.js-currency-list').slideUp();
			}
		});
	});

});