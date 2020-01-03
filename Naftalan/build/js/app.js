"use strict";

$(document).ready(function () {
  //burger
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
        $('body').removeClass('overflow');
      } else {
        $(this).addClass('active');
        $('body').addClass('overflow');
        $('.js-nav').addClass('active');
      }
    });
  }
});
$(document).ready(function () {
  $('.main-btn').click(function () {
    $('.mask').addClass('active');
    $('.tourModal').addClass('active');
    $('body').addClass('overflow');
  });
  $('.close-modal').click(function () {
    $('.mask').removeClass('active');
    $('.tourModal').removeClass('active');
    $('body').removeClass('overflow');
  });
});