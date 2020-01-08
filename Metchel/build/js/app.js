"use strict";

$(document).ready(function () {
  $('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: false,
    // autoplay: true,
    asNavFor: '.js-nav-slider'
  });
  $('.js-nav-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.js-main-slider',
    dots: false,
    arrows: true,
    focusOnSelect: true
  });
  $('.js-review-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    appendDots: $('.dots'),
    prevArrow: $('.prev'),
    nextArrow: $('.next')
  });
  $('.js-news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    appendDots: $('.dots'),
    prevArrow: $('.prev'),
    nextArrow: $('.next') // autoplay: true

  }); // $('.js-intro-slider').slick({
  // 	slidesToShow: 1,
  // 	slidesToScroll: 1,
  // 	dots: true,
  // 	arrows: true,
  // 	infinite: true,
  // 	appendDots: $('.dots'),
  // 	prevArrow: $('.prev'),
  // 	nextArrow: $('.next')
  // });
  // $('.js-prod-slider').slick({
  // 	dots: false,
  // 	arrows: true,
  // 	infinite: true,
  // 	autoplay: true,
  // 	responsive: [
  // 	{
  // 		breakpoint: 3000,
  // 		settings: "unslick"
  // 	},
  // 	{
  // 		breakpoint: 768,
  // 		settings: {
  // 			slidesToShow: 1,
  // 			slidesToScroll: 1
  // 		}
  // 	}
  // 	]
  // });
  // $('.js-product-slider').each(function() {
  // 	$(this).slick({
  // 		slidesToShow: 1,
  // 		slidesToScroll: 1,
  // 		dots: true,
  // 		arrows: true,
  // 		infinite: true,
  // 		appendDots: $(this).closest('.slider-wrap').find('.dots'),
  // 		prevArrow: $(this).closest('.slider-wrap').find('.prev'),
  // 		nextArrow: $(this).closest('.slider-wrap').find('.next')
  // 	});
  // })
  // $('.js-tablet-slider').slick({
  // 	dots: false,
  // 	arrows: true,
  // 	infinite: true,
  // 	autoplay: true,
  // 	responsive: [
  // 	{
  // 		breakpoint: 3000,
  // 		settings: "unslick"
  // 	},
  // 	{
  // 		breakpoint: 1024,
  // 		settings: {
  // 			slidesToShow: 2,
  // 			slidesToScroll: 1
  // 		}
  // 	},
  // 	{
  // 		breakpoint: 768,
  // 		settings: {
  // 			slidesToShow: 1,
  // 			slidesToScroll: 1
  // 		}
  // 	}
  // 	]
  // });
});
$(document).ready(function () {
  $('.burger-btn').click(function () {
    $(this).toggleClass('open');
    $('.nav').toggleClass('active');
  });
  $('.category-wrap').click(function () {
    $('.left-bar').toggleClass('active');
  });
}); // // load event listeners
// loadEventListeners();
// function loadEventListeners() {
// 	document.addEventListener('DOMContentLoaded', function() { calcTime(); });
// };
// var timeTo = document.getElementById('time-to').value,
// date,
// now = new Date(),
// newYear = new Date('1.1.2020').getTime(),
// startTimer = '';
// // calculate date, hour, minute and second
// function calcTime(dates) {
// 	//ui variables
// 	clearInterval(startTimer);
// 	if(typeof(dates) == 'undefined'){
// 		date = new Date(newYear).getTime();
// 	}else {
// 		date = new Date(dates).getTime();
// 	}
// 	function updateTimer(date){
// 		var now = new Date().getTime();
// 		var distance = date - now;
// 		// Time calculations for days, hours, minutes and seconds
// 		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// 		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// 		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// 		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// 		// select element
// 		document.querySelector('.clock-day').innerHTML = days;
// 		document.querySelector('.clock-hours').innerHTML = hours;
// 		document.querySelector('.clock-minutes').innerHTML = minutes;
// 		document.querySelector('.clock-seconds').innerHTML = seconds;
// 		if(now >= date){
// 			clearInterval(startTimer);
// 			document.querySelector('.clock-day').innerHTML = '00';
// 			document.querySelector('.clock-hours').innerHTML = '00';
// 			document.querySelector('.clock-minutes').innerHTML = '00';
// 			document.querySelector('.clock-seconds').innerHTML = '00';
// 		}
// 	}
// 	startTimer = setInterval(function() { updateTimer(date); }, 1000);
// }