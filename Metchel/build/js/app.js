"use strict";

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

  if ($(window).width() < 768) {
    $('.head-services').click(function () {
      $(this).toggleClass('arrow');
      $('.services-menu').slideToggle('active');
    });
  }
});
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
    infinite: true,
    focusOnSelect: true,
    asNavFor: '.js-nav-slider'
  });
  $('.js-nav-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.js-main-slider',
    dots: false,
    arrows: true,
    infinite: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5
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
        slidesToShow: 2,
        vertical: true
      }
    }]
  });
});
var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
var countDown = new Date('Feb 15, 2020 00:00:00').getTime(),
    x = setInterval(function () {
  var now = new Date().getTime(),
      distance = countDown - now;
  document.getElementById('days').innerText = Math.floor(distance / day), document.getElementById('hours').innerText = Math.floor(distance % day / hour), document.getElementById('minutes').innerText = Math.floor(distance % hour / minute), document.getElementById('seconds').innerText = Math.floor(distance % minute / second);
}, second);
$(document).ready(function () {
  // modal
  $('.js-call').on('click', function () {
    $('.js-modal').fadeIn('active');
    $('.js-mask').fadeIn('active');
  }); // close

  $('.modal__close').on('click', function () {
    $('.js-modal').fadeOut('active');
    $('.js-mask').fadeOut('active');
  });

  if ($(window).width() < 1024) {
    $('.category-wrap').click(function () {
      $('.left-bar').toggleClass('active');
    });
  } //scroll


  $('.scroll-link').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});