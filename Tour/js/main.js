$(document).ready(function () {

	$('.burger-opener').on('click', function () {
		$('.nav-top').toggleClass('show');
		$('.burger-mask').toggleClass('show');
	});

	$('.main-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		pauseOnHover: false,
		dots: false,
		arrows: true,
		infinite: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1250,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 950,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 550,
			settings: {
				slidesToShow: 1,
			},
		},
		]
	});

	// datepicker
	$( function() {
		$( "#datepicker-hereNew, #datepicker-hereEnd").datepicker({
			minDate: new Date(),
		});
	});

	
	$('.colorbox').colorbox({rel:'gal'});
	
	if($(window).width() <= 768){
		$('.colorbox-youtube').colorbox({iframe:true, innerWidth:'90%', innerHeight:'50%'});
	} else {
		$('.colorbox-youtube').colorbox({iframe:true, innerWidth:640, innerHeight:390});
	}

	$('#cboxNext').on('click', function(){
		$('.js-galery-slider').slick('slickNext');
		$('.js-slider-nav').slick('slickNext');
	})

	$('#cboxPrevious').click( function(){
		$('.js-galery-slider').slick('slickPrev');
		$('.js-slider-nav').slick('slickPrev');
	})
});