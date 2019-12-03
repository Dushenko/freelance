$(document).ready(function() {
	$(".accordion > .accordion__head").on("click", function() {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this)
			.siblings(".accordion__content")
			.slideUp(200);
			$(".accordion > .accordion__head .accordion__btn")
			.removeClass("top")
			.addClass("down");
		} else {
			$(".accordion > .accordion__head .accordion__btn")
			.removeClass("top")
			.addClass("down");
			$(this)
			.find(".accordion__btn")
			.removeClass("down")
			.addClass("top");
			$(".accordion > .accordion__head").removeClass("active");
			$(this).addClass("active");
			$(".accordion__content").slideUp(200);
			$(this)
			.siblings(".accordion__content")
			.slideDown(200);
		}
	});
});
