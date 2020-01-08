"use strict";

$(document).ready(function () {
  $('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
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
    infinite: false,
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
  }); // $('.js-tablet-slider').slick({
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
  //burger
  if (document.querySelector('.burger-btn')) {
    $('.burger-btn').click(function () {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.nav').removeClass('active');
        $('body').removeClass('overflow');
      } else {
        $(this).addClass('open');
        $('.nav').addClass('active');
        $('body').addClass('overflow');
      }
    });
  }

  $('.category-wrap').click(function () {
    $('.left-bar').toggleClass('active');
  });
});