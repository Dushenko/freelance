$(document).ready(function () {

    //basket

    $('.label-title_regular').on('click', function () {
        $('.basket-white').toggleClass('active');
        $('.basket-orange').toggleClass('active');
        $('.header-info__count').toggleClass('active');
    });
    

    $('.burger-opener').on('click', function () {
        $('.nav').toggleClass('show');
        $('.burger-mask').toggleClass('show');
    });

    //checkboks

    $("#all").click(function() {
        $('input:checkbox').not(this).prop('checked', this.checked);
    });
    $("checkItem").click(function() {
        if ($('.abc:checked').length == $('.abc').length) {
            $("#checkAll").prop('checked', true);
        } else {
            $("#checkAll").prop('checked', false);
        }
    });

    $('[id^="user_"]').click(function() {
        if ($('[id^="user_"]:checked').length == $('[id^="user_"]').length) {
            $("#all").prop('checked', true);
        } else {
            $("#all").prop('checked', false);
        }
    });

    //input counter
    $(function() {

        (function quantityProducts() {
            var $quantityArrowMinus = $(".quantity-arrow-minus");
            var $quantityArrowPlus = $(".quantity-arrow-plus");
            var $quantityNum = $(".quantity-num");

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

    //sliders
    $('.intro-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        arrows: true,
        infinite: true,
        focusOnSelect: true
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, 
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, 
        ]
    });
    
});



