"use strict";

$(document).ready(function () {
  var accordion = function accordion() {
    var $id = $(".accordion");
    var $open = $id.data("open");
    $id.find(".title").on("click", function () {
      if ($open === false) {
        $id.find(".content:visible").slideUp();

        if ($(this).hasClass("active")) {
          $(this).toggleClass("active");
        } else {
          $id.find(".title").removeClass("active");
          $(this).toggleClass("active");
        }
      } else {
        $(this).toggleClass("active");
      }

      $(this).next(".content").not(":animated").slideToggle();
    });
  };

  accordion();
});
$(document).ready(function () {
  //select 
  $('.js-select').click(function () {
    $(this).toggleClass('active');
    $('.js-select-list').slideToggle();
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
    $('.select__text').text(selected);
  });
});
$(document).ready(function () {
  //service-nav
  $('.service-nav li').click(function () {
    $('.service-nav li').removeClass('active');
    $(this).addClass('active');
  });
});
$(document).ready(function () {
  $('.js-feedback-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    focusOnSelect: true,
    vertical: true,
    centerMode: true // autoplay: true

  });
});
$(document).ready(function () {
  //tabs
  $(function () {
    $("ul.js-tab-btn").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tab-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
});
$(document).ready(function () {});