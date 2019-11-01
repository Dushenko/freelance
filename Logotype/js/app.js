"use strict";

$(document).ready(function () {
  $('.burger').click(function () {
    $(this).toggleClass('active');
    $('.sidebar').toggleClass('show');
    $('body').addClass('overflow');
    $('html').addClass('overflow');
  });
  $('.burger-close').click(function () {
    $('.burger').toggleClass('active');
    $('.sidebar').toggleClass('show');
    $('body').removeClass('overflow');
    $('html').removeClass('overflow');
  }); //tabs

  $(function () {
    $("ul.tabs__caption").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq($(this).index()).addClass("active");
    });
  }); //game

  $(".game__btn").click(function () {
    $(this).parent().parent('.game').addClass('red');
  });
  $('.raiting-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".faq__question").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".faq__answer-wrap").slideUp(200);
    } else {
      $(".faq > .faq__question").removeClass("active");
      $(this).addClass("active");
      $(".faq__answer-wrap").slideUp(200);
      $(this).siblings(".faq__answer-wrap").slideDown(200);
    }
  });
});