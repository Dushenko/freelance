"use strict";

$(document).ready(function () {});
$(document).ready(function () {
  $('.js-prod-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true
  });
});
$(document).ready(function () {
  $('.js-burger').click(function () {
    $(this).toggleClass('active');
    $('.js-nav').toggleClass('active');
    $('html').toggleClass('overflow');
    $('body').toggleClass('overflow');
  });
  $('.js-lang').click(function () {
    $('.langs').slideToggle('active');
  });
  new WOW().init();
});