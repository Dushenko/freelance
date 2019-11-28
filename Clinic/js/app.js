"use strict";

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('.js-terminal-input').focus(function () {
    $('.keyboard').addClass('active');
    $('.statementForm__field').removeClass('active');
    $(this).parent().addClass('active');
  });
  $('.js-confirm').click(function () {
    $('.js-keyboard').removeClass('active');
    $('.statementForm__field').removeClass('active');
  });
  $('.js-filter').click(function () {
    $('.js-cal').addClass('active');
  });
  $('.js-mainbtn').click(function () {
    $('.js-cal').removeClass('active');
  });

  if ($('.js-keyboard').length) {
    var v = $('.statementForm__field.active input').val();
    var studentCard = $('#card-number');
    var policeNumber = $('#police-number');
    $('.numeral').on('click', function () {
      var v = $('.statementForm__field.active input').val();
      console.log(v);

      if (v.length > 15) {
        return;
      }

      var value = $(this).data('value');
      console.log();
      $('.statementForm__field.active input').val(v + value);
    });
  }

  $(".erasing").click(function () {
    var el = $(".statementForm__field.active input");
    var the_value = el.val();
    the_value = the_value.substring(0, the_value.length - 1);
    el.val(the_value);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  $('.js-tetminal-choose').click(function () {
    $('.js-mask').addClass('active');
  });
  $('.choose-data-close').click(function () {
    $('.js-mask').removeClass('active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var headers = document.querySelectorAll('.js-accordion .js-title');

  for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', openCurrAccordion);
  }

  function openAccordion(e) {
    var parent = this.parentElement;
    var article = this.nextElementSibling;

    if (!parent.classList.contains('open')) {
      parent.classList.add('open');
      article.style.maxHeight = article.scrollHeight + 'px';
    } else {
      parent.classList.remove('open');
      article.style.maxHeight = '0px';
    }
  }

  function openCurrAccordion(e) {
    for (var i = 0; i < headers.length; i++) {
      var parent = headers[i].parentElement;
      var article = headers[i].nextElementSibling;

      if (this === headers[i] && !parent.classList.contains('open')) {
        parent.classList.add('open');
        article.style.maxHeight = article.scrollHeight + 'px';
      } else {
        parent.classList.remove('open');
        article.style.maxHeight = '0px';
      }
    }
  }

  $(function () {
    $("ul.js-tab-btn").on("click", "li:not(.active)", function () {
      $(this).addClass("active").siblings().removeClass("active").closest("div.js-tabs").find("div.js-tab-content").removeClass("active").eq($(this).index()).addClass("active");
    });
  });
});