"use strict";

//=require ../blocks/**/*.js
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