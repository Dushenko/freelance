"use strict";

//=require ../blocks/**/*.js
$(document).ready(function () {
  //burger
  if (document.querySelector('.burger-btn')) {
    $('.burger-btn').click(function () {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $('.side-bar').removeClass('active');
        $('body').removeClass('overflow');
      } else {
        $(this).addClass('open');
        $('.side-bar').addClass('active');
        $('body').addClass('overflow');
      }
    });
  } // $('.burger-btn').click(function(){
  // 	$(this).toggleClass('open');
  // 	$('.side-bar').toggleClass('active');
  // });


  $('.js-label').click(function () {
    $('.qr-wrap').slideToggle();
  });
  $('.js-element').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  }); //withdrawal

  $('.js-widthr').click(function () {
    $('.js-modal-widthr').fadeIn('active');
    $('.js-mask').fadeIn('active');
  });
  $('.js-mnIn').click(function () {
    $('.js-modal-mnIn').fadeIn('active');
    $('.js-mask').fadeIn('active');
  }); //sing IN/UP

  $('.js-open-in').click(function () {
    $('.js-modal-in').fadeIn('active');
    $('.js-mask').fadeIn('active');
  });
  $('.js-open-up').click(function () {
    $('.js-modal-up').fadeIn('active');
    $('.js-mask').fadeIn('active');
  }); //close modal

  $('.js-mask').click(function () {
    $(this).fadeOut('active');
    $('.js-modal').fadeOut('active');
  });
});