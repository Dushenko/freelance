$(document).ready(function () {

	// burger
	$('.burger-opener').on('click', function () {
		$('.descktop-menu').toggleClass('show');
		$('.burger-opener').toggleClass('show');
	});

    $('.call-btn').on('click', function () {
        $('#openModal').fadeIn();
    });

    $('.close-modal').on('click', function () {
        $('#openModal').fadeOut();
        $('#openmod').fadeOut();
    });

    $('.btn-modal').on('click', function () {
        $('#openModal').fadeOut();
        $('#openmod').fadeIn();
    });


	// scrollTop
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});
		$('#toTop').click(function() {
			$('body,html').animate({scrollTop:0},800);
		});
	});
	// quantity
	$(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min1");
            var $quantityArrowPlus = $("#plus1");
            var $quantityNum = $("#num1");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min2");
            var $quantityArrowPlus = $("#plus2");
            var $quantityNum = $("#num2");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min3");
            var $quantityArrowPlus = $("#plus3");
            var $quantityNum = $("#num3");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min4");
            var $quantityArrowPlus = $("#plus4");
            var $quantityNum = $("#num4");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min5");
            var $quantityArrowPlus = $("#plus5");
            var $quantityNum = $("#num5");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min6");
            var $quantityArrowPlus = $("#plus6");
            var $quantityNum = $("#num6");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min7");
            var $quantityArrowPlus = $("#plus7");
            var $quantityNum = $("#num7");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min8");
            var $quantityArrowPlus = $("#plus8");
            var $quantityNum = $("#num8");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $("#min9");
            var $quantityArrowPlus = $("#plus9");
            var $quantityNum = $("#num9");

            $quantityArrowMinus.click(quantityMinus);
            $quantityArrowPlus.click(quantityPlus);

            function quantityMinus() {
                if ($quantityNum.val() > 1) {
                    $quantityNum.val(+$quantityNum.val() - 1);
                }
            }

            function quantityPlus() {
                $quantityNum.val(+$quantityNum.val() + 1);
            }
        })();
    });





    //filter
    $(function() {

        var newSelection = "";

        $("#flavor-nav a").click(function(){

            $("#all-flavors").fadeTo(3000);

            $("#flavor-nav a").removeClass("active");
            $(this).addClass("active");

            newSelection = $(this).attr("rel");

            $(".flavor").not("."+newSelection).slideUp();
            $("."+newSelection).slideDown();

            $("#all-flavors").fadeTo(3000);

        });

    });
});

