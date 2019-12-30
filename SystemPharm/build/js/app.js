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
$(document).ready(function () {});