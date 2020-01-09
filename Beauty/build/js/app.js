"use strict";

$(document).ready(function () {
  //select 
  $('.js-select').click(function () {
    $(this).toggleClass('active');
    $(this).next('.js-select-list').slideToggle();
  }); //close custom select

  $(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".js-select");

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.js-select-list').slideUp();
      }
    });
  });
  $('.js-select-list li').click(function () {
    var selected = $(this).text();
    $(this).parent().parent().parent().find('.select__text').text(selected);
  });
});
$(document).ready(function () {
  $('.js-modal-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }]
  });
});
$(document).ready(function () {
  //tabs
  $(function () {
    $("ul.js-tab-btn").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tab-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
  $('.js-tab-btn li a').click(function () {
    var selected = $(this).text();
    $('.select-text').text(selected);
  });
});
$(document).ready(function () {});