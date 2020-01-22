$(document).ready(function () {
	const svgWidth = 1049;
	const regions = {1: "Автономная Республика Крым", 2: "Черкасская область", 3: "Черниговская область", 4: "Черновицкая область", 5: "Днепропетровская область", 6: "Донецкая область", 7: "Ивано-Франковская область", 8: "Харьковская область", 9: "Херсонская область", 10: "Хмельницкая область", 12: "Киевская область", 13: "Кировоградская область", 14: "Луганская область", 15: "Львовская область", 16: "Николаевская область", 17: "Одесская область", 18: "Полтавская область", 19: "Ровенская область", 20: "Сумская область", 21: "Тернопольская область", 22: "Закарпатская область", 23: "Винницкая область", 24: "Волынская область", 25: "Запорожская область", 26: "Житомирская область"}

	//tabs
	$(".cart").on("click", "path:not(.active)", function() {
		var region = $(this).attr('data-region');
		const { width, height } = this.getBBox();
		const { top, left } = $(this).position();
		const currentWidth = $('.cart').width();
		const k = svgWidth/currentWidth;
		
		$(this)
			.addClass("active")
			.siblings()
			.removeClass("active");
		$('svg ellipse, svg circle').show();	
		$(`svg ellipse[data-region="${region}"], svg circle[data-region="${region}"]`).hide();
		$('.cart-label').show()
			.css('left', left)
			.css('top', top)
			.css('width', width/k)
			.css('height', height/k)
		$('.cart-label p').text(regions[region])
	});
});