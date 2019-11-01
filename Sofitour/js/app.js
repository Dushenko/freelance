//=require ../blocks/**/*.js
$(document).ready(function() {

	// burger
	$('.burger-opener').on('click', function () {
		$('.nav').toggleClass('active');
		$('.burger-opener').toggleClass('show');
		$('body').toggleClass('hidden');
	});

	//lang
	$(".lang__link").click(function () {
		var clicked = $(this).html();
		$('.lang__current').html(clicked);
	});

	$('.lang').click(function () {
		$('.lang__wrap').slideToggle();
	});

	//show more
	$('.tour-more').click(function () {
		$('.hidden-tours').slideDown();
		$('.tour').addClass('slide-up');
		$(this).fadeOut();
	});


	//all tubs 
	$(function() {
		$("ul.js-tab-btn").on("click", "li:not(.active)", function() {
			$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.js-tabs")
			.find("div.js-tab-content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
		});
	});

	//map-btns
	$('.map-btn_open').click(function () {
		$(this).hide();
		$('.map-btn_hide').show();
		$('.hotel').show();
		$('.map-wrap').addClass('active');
	});
	$('.map-btn_hide').click(function () {
		$(this).hide();
		$('.map-btn_open').show();
		$('.hotel').hide();
		$('.map-wrap').removeClass('active');
	});

	//show-map
	$('.js-show-map').click(function () {
		$('.hotel').show();
		$('.map-wrap').addClass('active');
		$('.map-btn_hide').show();
		$('.map-btn_open').hide();
	});

	//user-lk
	$('.user').click(function () {
		$('.user__wrap').slideToggle();
	});
	
	$('.user__link').click(function () {
		$('.user__link').removeClass('active');
		$(this).addClass('active');
	});

	// smooth scroll
	$('.scroll-link').on('click', function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	//toursForm
	$('.toursForm__foodSelect').click(function () {
		$('.toursForm__foodWrap').toggleClass('active');
	});

    //accordion
    $(document).ready(function() {
    	$(".tabsFaq__content-wrap > span").on("click", function() {
    		if ($(this).hasClass("active")) {
    			$(this).removeClass("active");
    			$(this)
    			.siblings(".tabsFaq__content-text")
    			.slideUp(200);
    			$(".set > a i")
    			.removeClass("fa-minus")
    			.addClass("fa-plus");
    		} else {
    			$(".set > a i")
    			.removeClass("fa-minus")
    			.addClass("fa-plus");
    			$(this)
    			.find("i")
    			.removeClass("fa-plus")
    			.addClass("fa-minus");
    			$(".tabsFaq__content-wrap > span").removeClass("active");
    			$(this).addClass("active");
    			$(".tabsFaq__content-text").slideUp(200);
    			$(this)
    			.siblings(".tabsFaq__content-text")
    			.slideDown(200);
    		}
    	});
    });

    //calendar
    $('.calendar__more').click(function () {
    	$(this).parent().parent().find('.js-full-table').slideToggle();
    });

    $('.calendar__year-btn').click(function () {
    	$(this).parent().parent().find('.calendar__table.hidden').slideToggle();
    	$(this).toggleClass('active');
    });

	//plus - minus 
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	// mainForm inputs
	$('.js-quantity-input').focus(function () {
		$('.number').addClass('active');
		$('.tourists').removeClass('active');
	});

	$('.js-tourists-input').focus(function () {
		$('.tourists').addClass('active');
		$('.number').removeClass('active');
	});

	$('#datepicker-hereNew').focus(function () {
		$('.tourists').removeClass('active');
		$('.number').removeClass('active');
	});

	// datepicker
	$( "#datepicker-hereNew").datepicker({
		minDate: new Date(),
	});

	// sidebarBtn open
	$( ".sidebarBtn").click(function () {
		$('.search-wrap').slideToggle();
	});

	//scroll
	$('.tabsFaq__item').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    // //scroll
    $('.scroll-link').on('click', function (event) {
    	event.preventDefault();
    	var id  = $(this).attr('href'),
    	top = $(id).offset().top;
    	$('body,html').animate({scrollTop: top}, 1500);
    });

    //faq add/remove .active tab
    $( ".tabsFaq__item").click(function () {
    	$('.tabsFaq__item').removeClass('active');
    	$(this).addClass('active');
    });

	// tourists-input
	$('.js-tourists-input').focus(function() {
		$('.tourists').addClass('active');
	});

    // datepicker
    $("#datepicker-hereNew").datepicker({
    	minDate: new Date(),
    });

    // modal windows
    $('.js-modal-close').click(function() {
    	$('.modal').removeClass('active');
    	$('.js-mask').removeClass('active');
    	$('body').removeClass('hidden');
    });

    $('.js-buy-tour').click(function() {
    	$('.js-modal-contact').addClass('active');
    	$('.js-mask').addClass('active');
    	$('body').addClass('hidden');
    });

    $('.js-reg-btn').click(function() {
    	$('.js-modal-enter').removeClass('active');
    	$('.js-modal-register').addClass('active');
    	$('.js-mask').addClass('active');
    	$('body').addClass('hidden');
    });

    $('.js-enter-btn').click(function() {
    	$('.js-modal-register').removeClass('active');
    	$('.js-modal-enter').addClass('active');
    	$('.js-mask').addClass('active');
    	$('body').addClass('hidden');
    });

    $('.js-forgot-btn').click(function() {
    	$('.js-modal-enter').removeClass('active');
    	$('.js-modal-forgot').addClass('active');
    });

    $('.js-send-btn').click(function() {
    	$('.js-modal-forgot').removeClass('active');
    	$('.js-modal-send').addClass('active');
    });

	//funcybox
	$(".gallery a").attr("data-fancybox","mygallery");

	$(".gallery a").each(function(){
		$(this).attr("data-caption", $(this).find("img").attr("alt"));
		$(this).attr("title", $(this).find("img").attr("alt"));
	});

	$(".gallery a").fancybox();





	//sliders
	$('.carousel-partner').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay:true,
		mouseDrag: true,
		touchDrag: true,
		smartSpeed: 600,
		responsive: {
			500: {
				items: 2,
			},
			650: {
				items: 3,
			},
			800: {
				items: 4,
			},
			1024: {
				items: 5,
			}
		}
	});

	$('.carousel-clients').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: true,
		autoplay: true,
		smartSpeed: 600,
		responsive: {
			768: {
				items: 2,
			},
			1150: {
				items: 3,
			},
			1780: {
				items: 4,
			}
		}
	});

	$('.carousel-agents').owlCarousel({
		center: true,
		items: 1,
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		autoplay:true,
		mouseDrag: true,
		touchDrag: true,
		smartSpeed: 600,
		responsive: {
			600: {
				items: 2,
			},
			870: {
				items: 3,
			},
			1150: {
				items: 4,
			}
		}
	});

	$('.pay-slider').owlCarousel({
		items: 2,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		// autoplay: true,
		mouseDrag: true,
		touchDrag: true,
		smartSpeed: 600
	});

	$('.card-slider').owlCarousel({
		items: 3,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		autoplay:true,
		touchDrag: true,
		smartSpeed: 600,
		responsive: {
			440: {
				items: 4,
			},
			550: {
				items: 5,
			},
			650: {
				items: 6,
			},
			768: {
				items: 3,
			},
			840: {
				items: 4,
			},
			1024: {
				items: 5,
			},
			1200: {
				items: 6,
			}
		}
	});

	//first slide
	let rangeSlider = $(".pay-slider");

	checkClasses();
	rangeSlider.on('translated.owl.carousel', function (event) {
		checkClasses();
	});

	function checkClasses() {
		var total = $('.pay-slider .owl-stage .owl-item.active').length;
		$('.pay-slider .owl-stage .owl-item').removeClass('firstActiveItem');
		$('.pay-slider .owl-stage .owl-item.active').each(function (index) {
			if (index === 0) {
				$(this).addClass('firstActiveItem');
			}
		});
	}

	var owl_1 = $('#owl-1');
	var owl_2 = $('#owl-2');

	owl_1.owlCarousel({
		loop: true,
		margin: 5,
		nav: true,
		items: 1,
		dots: false,
		autoplay:true
	});

	owl_2.owlCarousel({
		margin: 15,
		nav: false,
		items: 3,
		dots: false
	});

	owl_2.find(".item").click(function(){
		var slide_index = owl_2.find(".item").index(this);
		owl_1.trigger('to.owl.carousel',[slide_index,300]);
	});

	$('.customNextBtn').click(function() {
		owl_1.trigger('next.owl.carousel',500);
	});
	$('.customPreviousBtn').click(function() {
		owl_1.trigger('prev.owl.carousel',500);
	});

});