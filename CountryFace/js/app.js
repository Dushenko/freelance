"use strict";

$(document).ready(function () {
  $('.js-count-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    dots: true,
    infinite: true,
    mobileFirst: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: 'unslick'
    }]
  });
});
$(document).ready(function () {
  // burger
  $('.burger-opener').on('click', function () {
    $('.nav').toggleClass('show');
    $('.burger-opener').toggleClass('show');
  });
});
$(document).ready(function () {
  //input-title
  $('.add-form__input').on('focus', function () {
    $(this).parent().find($('.add-form__input-title')).addClass('active');
  }); //mask-tel

  $("input[type='tel']").mask("+9(999)999-99-99");
});
$(document).ready(function () {
  /* Checking textaera length START */
  var targetDiv = $('.add-form__textarea'),
      totalLenght = parseInt(targetDiv.attr('data-length'));

  function innerLen(curr, total) {
    $('.add-form__textarea-current').text(curr);
    $('.add-form__textarea-limit').text(total);
    curr > total ? $('.add-form__textarea-current').addClass('color-red') : $('.add-form__textarea-current').removeClass('color-red');
  }

  innerLen(0, totalLenght);

  function checkLenght(target) {
    var html = target.innerHTML,
        text = target.innerText.trim(),
        len = text.split('').length;

    if (len > totalLenght) {
      var goodLen = text.slice(0, totalLenght),
          badLen = text.slice(totalLenght),
          fullText = goodLen.concat("<span class='color-red'>", badLen, "</span>");
      target.innerHTML = fullText;
    }

    function placeCaretAtEnd(el) {
      el.focus();

      if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
      }
    }

    placeCaretAtEnd(document.querySelector('.add-form__textarea'));
    innerLen(len, totalLenght);
  }

  targetDiv.on('input', function () {
    checkLenght(this);
  });
});
$(document).ready(function () {
  $('.js-winner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    dots: true,
    infinite: true,
    mobileFirst: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: 'unslick'
    }]
  });
});
$(document).ready(function () {
  $('.add-form__textarea').on('focus', function () {
    $(this).parent().find($('.add-form__input-title')).addClass('active');
    $('.add-form__textarea-placeholder').addClass('add-form__textarea-placeholder_hidden');
  }); //variant-active

  $('.variant').on('click', function () {
    $('.variant').removeClass('variant_active');
    $(this).addClass('variant_active');
  }); //pay-active

  $('.pay').on('click', function () {
    $('.pay').removeClass('pay_active');
    $(this).addClass('pay_active');
  }); //scroll

  $('.scroll-link').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});