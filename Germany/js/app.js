"use strict";

$(document).ready(function () {
  //burger
  $('.burger-btn').click(function () {
    $(this).toggleClass('active');
    $('.mask').toggleClass('active');
    $('.sidebar').toggleClass('active');
  });
  $('.js-call').click(function () {
    $('.mask').addClass('active');
    $('.modal').addClass('active');
    $('.burger-btn').addClass('show');
  });
  $('.mask').click(function () {
    $(this).removeClass('active');
    $('.modal').removeClass('active');
    $('.sidebar').removeClass('active');
    $('.burger-btn').removeClass('active');
    $('.burger-btn').removeClass('show');
  }); //slider

  var mySlider = $('.main-slider');
  mySlider.slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    vertical: true,
    swipeToSlide: true,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1024,
      settings: "unslick"
    }]
  });

  if (window.matchMedia('(min-width: 1024px)').matches) {
    mySlider.on('wheel', function (e) {
      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
      } else {
        $(this).slick('slickNext');
      }
    });
  }

  if (window.matchMedia('(min-width: 1024px)').matches) {
    $('a[data-slide]').click(function (e) {
      e.preventDefault();
      var slideno = $(this).data('slide');
      $('.burger-btn').removeClass('active');
      $('.mask').removeClass('active');
      $('.sidebar').removeClass('active');
      $('.main-slider').slick('slickGoTo', slideno - 1);
    });
  }

  $(".sidebarNav__list").find("a[href*='#']").each(function () {
    $(this).on('click', function(event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - "55" + "px"}, 1000);
      $('.burger-btn').removeClass('active');
      $('.mask').removeClass('active');
      $('.sidebar').removeClass('active');
      $('.main-slider').slick('slickGoTo', slideno - 1);          
    });
  });
  
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('.back-top').fadeIn();
      } else {
        $('.back-top').fadeOut();
      }
    });
    $('.back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1500);
    });
  }); //open content

  $('.plus-btn').click(function () {
    $(this).toggleClass('minus');
  });
  $('.plus-btn').click(function () {
    $(this).siblings('.advantages-wrap').toggleClass('auto-height');
  });
  $('.plus-btn').click(function () {
    $(this).siblings('.jobSearch-wrap').toggleClass('auto-height');
  });
});