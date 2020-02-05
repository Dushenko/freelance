"use strict";

$(document).ready(function () {

  $(window).scroll(() => {
    const currentHeight = $(window).scrollTop() + $(window).height() + 100;

    if (currentHeight >= $('.instagram-section').offset().top) {
      $('.filter-form__buy-wrap').addClass('static');
    } else {
      $('.filter-form__buy-wrap').removeClass('static');
    }
  });

  $('.js-menu li').click(function () {
    $(this).find('.js-sub-menu').slideToggle();
    $(this).toggleClass('active');
  });


  if ($(window).width() > 900) {
    $('.js-main-menu li').hover(function () {
      $(this).find('.js-menu').toggleClass('active'); // $('.header-bot').toggleClass('active');
    });
  }

  ;

  if ($(window).width() < 900) {
    $('.js-main-menu li').not('.js-menu').click(function () {
      $(this).find('.js-menu').slideToggle();
    });
  }

  ; //burger

  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
        $('body').removeClass('overflow');
      } else {
        $(this).addClass('active');
        $('.js-nav').addClass('active');
        $('body').addClass('overflow');
      }
    });
  }
});
$(document).ready(function () {
  $('.modal__close').click(function () {
    $('.modal').fadeOut();
    $('.js-mask').fadeOut();
  });
  $('.js-mask').click(function () {
    $('.modal').fadeOut();
    $(this).fadeOut();
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
    var priceInputElement = $('.skuBestPrice');
    if (!priceInputElement.length) return;
    var priceProduct = parseFloat($.trim(priceInputElement.html().replace(",", "").replace("R$", "")));
    var convertion = priceProduct.toFixed(0);
    var price = parseFloat($("#quantity").val());
    var total = (convertion * price).toFixed(0);
    window.totalPrice = total;
    var finalPrice = total.toString().replace(/\./g, ',');
    var priceElement = document.querySelector("#total-price");
    priceElement.innerHTML = finalPrice;
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
}); // submit button

(function () {
  var submitButton = document.querySelector('.priceForm__btn');

  if (submitButton) {
    submitButton.addEventListener('click', function () {
      var formData = new FormData();
      formData.append('count', window.totalPrice);
      $.ajax({
        url: '#',
        type: 'post',
        dataType: 'multipart/form-data',
        data: formData,
        success: function success(data) {
          console.log(data);
        }
      });
    });
  }
})();

$(document).ready(function () {
  $('.js-intro-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: false
  });
  $('.js-product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: false
  });
  $('.js-images-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    focusOnSelect: false,
    responsive: [{
      breakpoint: 3000,
      settings: "unslick"
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
$(document).ready(function () {
  if ($(window).width() > 768) {
    $('.grid').masonry({
      itemSelector: '.grid__item',
      columnWidth: '.grid__sizer',
      gutter: 30,
      percentPosition: true
    });
  }

  ;
  $('.js-filter-name').click(function () {
    $(this).next().slideToggle();
  });
  $('.js-mob-filter').click(function () {
    $('.js-filter-form').slideToggle();
  });
  $('.filter-tab__head').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  }); //to-top

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() != 0) {
        $('.back-top').fadeIn();
        $('.header-bot').addClass('active');
        $('.logo').addClass('logo-black');
      } else {
        $('.back-top').fadeOut();
        $('.header-bot').removeClass('active');
        $('.logo').removeClass('logo-black');
      }
    });
    $('.back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 1500);
    });
  }); //Intense

  var elements = document.querySelectorAll('.demo-image');
  Intense(elements);
});