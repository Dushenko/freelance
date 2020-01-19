"use strict";

$('..feedback-wrap').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
});
$(document).ready(function () {
  //select 
  $('.js-select').click(function () {
    $(this).toggleClass('active');
    $('.js-select-list').slideToggle();
  }); //close custom select

  $(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".js-select");

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.js-select-list').slideUp();
      }
    });
  });
  $('.js-select-list li').click(function () {
    var selected = $(this).text();
    $('.select__text').text(selected);
  });
});
$(document).ready(function () {
  //service-nav
  $('.service-nav li').click(function () {
    $('.service-nav li').removeClass('active');
    $(this).addClass('active');
  });
});
$(document).ready(function () {});