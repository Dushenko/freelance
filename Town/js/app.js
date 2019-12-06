"use strict";

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('.js-open-modal').click(function () {
    $('.js-mask').fadeIn();
    $('.js-modal-form').fadeIn();
  });
  $('.js-modal-close').click(function () {
    $('.js-mask').fadeOut();
    $('.modal').fadeOut();
  });
  $('.js-mask').click(function () {
    $(this).fadeOut();
    $('.modal').fadeOut();
  });
  $('.js-thanks').click(function () {
    $('.js-modal-form').fadeOut();
    $('.js-modal-thanks').fadeIn();
  });
  $('.form__input').focus(function () {
    $(this).parent().addClass('active');
  });
  $('.form__input').focus(function () {
    $(this).addClass('active');
  });
});