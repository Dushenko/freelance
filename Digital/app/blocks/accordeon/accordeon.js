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