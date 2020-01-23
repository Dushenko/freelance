"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  // modal
  $('.burger-btn').click(function () {
    $(this).toggleClass('open');
    $('.side-bar').toggleClass('active');
  });
  $('.js-label').click(function () {
    $('.qr-wrap').slideToggle();
  });
  $('.js-element').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
  $('.js-signIn').click(function () {
    $('.js-modal').removeClass('active');
    $('.js-mask').removeClass('active');
  });
  $('.js-widthr').click(function () {
    $('.js-modal-widthr').addClass('active');
    $('.js-mask').addClass('active');
  });
  $('.js-mnIn').click(function () {
    $('.js-modal-mnIn').addClass('active');
    $('.js-mask').addClass('active');
  });
  $('.js-mask').click(function () {
    $(this).removeClass('active');
    $('.js-modal').removeClass('active');
  });
});