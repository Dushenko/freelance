document.addEventListener('DOMContentLoaded', function(){
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

$(document).ready(function() {
  function updatePrice() {
  	var priceProduct = parseFloat($.trim($('.skuBestPrice').html().replace(",", "").replace("R$", "")));	
    var convertion = ((priceProduct)).toFixed(0);
    var price = parseFloat($("#quantity").val());
    var total = ((convertion) * (price)).toFixed(0);
    var finalPrice = total.toString().replace(/\./g, ',');
    $("#total-price").val(finalPrice);
  }
  $(document).ready(function (){ updatePrice();});
  $(document).on("click", "input", updatePrice);
  $(document).on("keyup", "input", updatePrice);
  $(document).on("change", "input", updatePrice);

  $('#quantity').on('change keyup focus', function() {
    var removeLetters = $(this).val().replace(/[^0-9]/g, '');
    $(this).val(removeLetters);
  });
});

