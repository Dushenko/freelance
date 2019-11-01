"use strict";

$(document).ready(function () {
  $('.bet__open-btn').click(function () {
    $(this).toggleClass('active');
    $('.bet').toggleClass('open');
    $('.mask-bet').toggleClass('active');
  });
});
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */

!function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s = t.next(),
          n = t.find("option"),
          i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
        var n = e(this),
            i = n.data("display");
        s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()));
      });
    }

    if ("string" == typeof t) return "update" == t ? this.each(function () {
      var t = e(this),
          n = e(this).next(".nice-select"),
          i = n.hasClass("open");
      n.length && (n.remove(), s(t), i && t.next().trigger("click"));
    }) : "destroy" == t ? (this.each(function () {
      var t = e(this),
          s = e(this).next(".nice-select");
      s.length && (s.remove(), t.css("display", ""));
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function () {
      var t = e(this);
      t.next().hasClass("nice-select") || s(t);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
      var s = e(this);
      e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus();
    }), e(document).on("click.nice_select", function (t) {
      0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
      var s = e(this),
          n = s.closest(".nice-select");
      n.find(".selected").removeClass("selected"), s.addClass("selected");
      var i = s.data("display") || s.text();
      n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
      var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
      if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;

      if (40 == t.keyCode) {
        if (s.hasClass("open")) {
          var i = n.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else s.trigger("click");

        return !1;
      }

      if (38 == t.keyCode) {
        if (s.hasClass("open")) {
          var l = n.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else s.trigger("click");

        return !1;
      }

      if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");else if (9 == t.keyCode && s.hasClass("open")) return !1;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}(jQuery);
$(document).ready(function () {
  $('.burger-opener').on('click', function () {
    $('.burger-menu').toggleClass('show');
    $('.burger-opener').toggleClass('show');
  });
});
$(document).ready(function () {
  $('.match__watch').click(function () {
    $('.twich-wrap').addClass('show');
    $('.mask-bet').addClass('active');
  });
  $('.twich-close').click(function () {
    $('.twich-wrap').removeClass('show');
    $('.mask-bet').removeClass('active');
  });
});
$(document).ready(function () {
  //main slider
  $('.js-main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,
    dots: false,
    infinite: true,
    mobileFirst: true,
    focusOnSelect: true
  }); //event-toggle

  $('.event__arrow').click(function () {
    $('.event__arrow.active').not(this).removeClass('active');
    $(this).toggleClass('active');
    $(this).parent().next('.event__hidden-wrap').slideToggle();
  }); //niceSelect

  $('.select-nice').niceSelect(); //profile nav arrow

  $('.profile-nav__arrow').click(function () {
    $('.profile-nav').toggleClass('slide');
    $(this).toggleClass('animation');
  }); //disabled / anabled

  $('.profile-form__edit').click(function (event) {
    event.preventDefault();
    $(this).parent().find($("input.profile-form__input")).prop('disabled', false);
  });
  $("input[name=allgame]").click(function () {
    $("input[type=checkbox].cbx").prop('checked', $(this).prop('checked'));

    if ($(this).prop('checked')) {
      $('input[type=checkbox].cbx').parent('.center').siblings('.games__img').addClass('checked');
    } else {
      $('input[type=checkbox].cbx').parent('.center').siblings('.games__img').removeClass('checked');
    }
  });
  $("input[type=checkbox].cbx").click(function () {
    var allCheckboxGame = $("input[type=checkbox].cbx").not('input[name=allgame]').length;
    var allCheckboxGameChecked = $("input[type=checkbox].cbx:checked").not('input[name=allgame]').length;

    if (allCheckboxGameChecked === allCheckboxGame) {
      $("input[name=allgame]").prop('checked', true);
    } else {
      $("input[name=allgame]").prop('checked', false);
    }

    if ($(this).prop('checked')) {
      $(this).parent('.center').siblings('.games__img').addClass('checked');
    } else {
      $(this).parent('.center').siblings('.games__img').removeClass('checked');
    }
  });
});