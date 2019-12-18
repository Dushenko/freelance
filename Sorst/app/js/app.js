//=require ../blocks/**/*.js
$(document).ready(function () {

	// $('.js-burger').click( function () {
	// 	$(this).toggleClass('active');
	// 	$('.js-nav').toggleClass('active');
	// 	$('html').toggleClass('overflow');
	// 	$('body').toggleClass('overflow');
	// });

	if(document.querySelector('.js-burger')){
		$('.js-burger').click(function(){
			if($(this).hasClass('active')){
				$('body').removeClass('overflow');
				$(this).removeClass('active');
				$('.js-nav').removeClass('active');
			} else {
				$('body').addClass('overflow');
				$(this).addClass('active');
				$('.js-nav').addClass('active');
			}
		})
	}

	//select 
	$('.js-select').click( function () {
		$(this).toggleClass('active');
		$('.js-scroll').toggleClass('active');
	});


	//lang
	$('.js-lang').click( function () {
		$('.langs').slideToggle('active');
	});

	//filter
	$('.js-filter-btn').click( function () {
		$('.js-filter-form').toggleClass('active');
	});

	//modal
	$(".js-open-modal").click( function () {
		$('.js-mask').fadeIn();
		$('.js-modal').fadeIn();
	});

	$(".js-modal-close").click( function () {
		$('.js-mask').fadeOut();
		$('.js-modal').fadeOut();
	});

	//video
	$(".js-open-video").click( function () {
		$('.js-video-mask').fadeIn();
		$('.js-video').fadeIn();
		$('body').addClass('overflow');
	});

	$('.js-close-video').click( function () {
		$('.js-video').fadeOut();
		$('.js-video-mask').fadeOut();
		$('body').removeClass('overflow');
		var videoURL = $('#video').prop('src');
		videoURL = videoURL.replace("&autoplay=1", "");
		$('#video').prop('src','');
		$('#video').prop('src',videoURL);
	});
	

	//close custom select
	jQuery(function($){
		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".js-select"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
		    	&& div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.removeClass('active'); // скрываем его
				$('.js-scroll').removeClass('active');
			}
		});
	});

	//wow animation
	new WOW().init();

});