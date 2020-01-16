"use strict";

$(document).ready(function () {
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: false
  });
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
});