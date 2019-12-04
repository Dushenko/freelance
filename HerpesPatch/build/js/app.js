"use strict";

$(document).ready(function () {
  $(".accordion > .accordion__head").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).siblings(".accordion__content").slideUp(200);
      $(".accordion > .accordion__head .accordion__btn").removeClass("top").addClass("down");
    } else {
      $(".accordion > .accordion__head .accordion__btn").removeClass("top").addClass("down");
      $(this).find(".accordion__btn").removeClass("down").addClass("top");
      $(".accordion > .accordion__head").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this).siblings(".accordion__content").slideDown(200);
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('.js-burger').click(function () {
    $(this).toggleClass('is-open');
    $(this).toggleClass('fixed-center');
    $('.js-nav').toggleClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('#plus').click(function add() {
    var $qtde = $("#quantity");
    var a = $qtde.val();
    a++;
    $("#minus").attr("disabled", !a);
    $qtde.val(a);
  });
  $("#minus").attr("disabled", !$("#quantity").val());
  $('#minus').click(function minusButton() {
    var $qtde = $("#quantity");
    var b = $qtde.val();

    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $("#minus").attr("disabled", true);
    }
  });
});
$(document).ready(function () {
  function updatePrice() {
    var priceProduct = parseFloat($.trim($('.skuBestPrice').html().replace(",", "").replace("R$", "")));
    var convertion = priceProduct.toFixed(0);
    var price = parseFloat($("#quantity").val());
    var total = (convertion * price).toFixed(0);
    var finalPrice = total.toString().replace(/\./g, ',');
    $("#total-price").val(finalPrice);
  }

  $(document).ready(function () {
    updatePrice();
  });
  $(document).on("click", "input", updatePrice);
  $(document).on("keyup", "input", updatePrice);
  $(document).on("change", "input", updatePrice);
  $('#quantity').on('change keyup focus', function () {
    var removeLetters = $(this).val().replace(/[^0-9]/g, '');
    $(this).val(removeLetters);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('.scroll-down').on('click', function () {
    fullpage_api.moveSectionDown();
  });
  $('.scroll-up').on('click', function () {
    fullpage_api.moveSectionUp();
  });
  $('.js-form').on('click', function () {
    $('.js-mask').fadeIn('active');
    $('.js-modal').fadeIn('active');
  });
  $('.js-mask').on('click', function () {
    $(this).fadeOut('active');
    $('.js-modal').fadeOut('active');
  }); //footer

  $('.js-footer-open').click(function () {
    $('.js-footer').addClass('active');
  });
  $('.js-footer-close').click(function () {
    $('.js-footer').removeClass('active');
  }); //scroll

  $('.nav__link').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  }); // if ($(window).width() < 768) {
  // 	fullpage_api.setResponsive(true);
  // }
  // $(window).resize(function() {
  // 	if ($(window).width() < 768) {
  // 		fullpage_api.setResponsive(true);
  // 	}
  // });
});