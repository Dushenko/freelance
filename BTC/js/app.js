"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  //lang
  $(".lang__link").click(function () {
    var clicked = $(this).html();
    $('.lang__current').html(clicked);
  });
  $('.lang').click(function () {
    $('.lang__wrap').slideToggle();
  }); //show more

  $('.barMenu__title-wrap').click(function () {
    $('.barMenu').removeClass('active');
    $(this).parent().addClass('active');
  });
  $('.js-log-out').click(function () {
    $('.js-mask').addClass('active');
    $('.js-sing-in').addClass('active');
  });
  $('.js-log-out-2').click(function () {
    $('.js-mask').addClass('active');
    $('.js-sing-in-2').addClass('active');
    $('.js-sing-in').removeClass('active');
  });
  $('.js-sing-up-btn').click(function () {
    $('.js-mask').addClass('active');
    $('.js-sing-in-2').removeClass('active');
    $('.js-sing-in').removeClass('active');
    $('.js-sing-up').addClass('active');
  });
  $('.js-sing-up-btn-2').click(function () {
    $('.js-mask').addClass('active');
    $('.js-sing-up-2').addClass('active');
    $('.js-sing-up').removeClass('active');
  });
  $('.js-service-btn').click(function () {
    $('.js-mask').addClass('active');
    $('.js-service-modal').addClass('active');
  });
  $('.js-phone-btn').click(function () {
    $('.js-mask').addClass('active');
    $('.js-phone-modal').addClass('active');
  });
  $('.js-phone-btn-2').click(function () {
    $('.js-mask').addClass('active');
    $('.js-phone-modal-2').addClass('active');
    $('.js-phone-modal').removeClass('active');
  });
  $('.js-withdrawal-btn').click(function () {
    $('.js-mask').addClass('active');
    $('.js-withdrawal-modal').addClass('active');
  });
  $('.js-withdrawal-btn-2').click(function () {
    $('.js-mask').addClass('active');
    $('.js-withdrawal-modal-2').addClass('active');
    $('.js-withdrawal-modal').removeClass('active');
  });
  $('.js-mask').click(function () {
    $(this).removeClass('active');
    $('.js-modal').removeClass('active');
  });
});