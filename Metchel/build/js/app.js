"use strict";

$(document).ready(function () {
  $('.js-intro-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    focusOnSelect: false,
    asNavFor: '.js-nav-slider'
  });
  $('.js-nav-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-main-slider',
    dots: false,
    arrows: true,
    infinite: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }]
  });
  $('.js-review-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true,
    appendDots: $('.dots'),
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
var countDown = new Date('Jan 15, 2020 00:00:00').getTime(),
    x = setInterval(function () {
  var now = new Date().getTime(),
      distance = countDown - now;
  document.getElementById('days').innerText = Math.floor(distance / day), document.getElementById('hours').innerText = Math.floor(distance % day / hour), document.getElementById('minutes').innerText = Math.floor(distance % hour / minute), document.getElementById('seconds').innerText = Math.floor(distance % minute / second);
}, second);
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