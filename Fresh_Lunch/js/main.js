(function ($) {
	$(function(){
		$('.icon').on('click', function(){
			$(this).closest('.nav').toggleClass('nav-open');
		});
	});
})(jQuery);