$(document).ready(function () {

	//tabs
	$(function() {
		$(".cart").on("click", "path:not(.active)", function() {
			$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.js-tabs")
			.find("div.region-content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
		});
	});
});