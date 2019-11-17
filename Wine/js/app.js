"use strict";

//=require ../blocks/**/*.js
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
});