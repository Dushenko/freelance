"use strict";

$(document).ready(function () {
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    arrows: true,
    infinite: true
  });
  $('.img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    infinite: true,
    focusOnSelect: false,
    // autoplay: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.img-slider',
    dots: false,
    arrows: true,
    centerMode: false,
    focusOnSelect: false,
    responsive: [{
      breakpoint: 850,
      settings: {
        vertical: false
      }
    }]
  });
  $('.scroll-down').on('click', function () {
    fullpage_api.moveSectionDown();
  });
  $('.scroll-up').on('click', function () {
    fullpage_api.moveSectionUp();
  });
  $('.js-form').on('click', function () {
    $('.js-mask').fadeIn('active');
    $('.js-modal').fadeIn('active');
  });
  $('.js-mask').on('click', function () {
    $(this).fadeOut('active');
    $('.js-modal').fadeOut('active');
  });

  if ($(window).width() < 1024) {
    fullpage_api.setResponsive(true);
  }

  $(window).resize(function () {
    if ($(window).width() < 1024) {
      fullpage_api.setResponsive(true);
    }
  });
});