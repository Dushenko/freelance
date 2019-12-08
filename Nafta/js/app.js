"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  var $btnTop = $('.to-top');
  $btnTop.on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
});