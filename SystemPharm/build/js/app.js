"use strict";

$(document).ready(function () {
  //burger
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
        $('body').removeClass('overflow');
        $('html').removeClass('overflow');
      } else {
        $(this).addClass('active');
        $('.js-nav').addClass('active');
        $('body').addClass('overflow');
        $('html').addClass('overflow');
      }
    });
  }
});
$(document).ready(function () {
  $('.js-vacancy-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1360,
      settings: {
        slidesToShow: 3
      }
    }]
  });
  $('.js-news-sliser').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true
  });
});
$(document).ready(function () {
  //tabs
  $(function () {
    $(".cart").on("click", "path:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.region-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
});
$(document).ready(function () {});