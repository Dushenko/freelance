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
		var priceInputElement =  $('.skuBestPrice');
		if(!priceInputElement.length)return;
		var priceProduct = parseFloat($.trim(priceInputElement.html().replace(",", "").replace("R$", "")));  
		var convertion = ((priceProduct)).toFixed(0);
		var price = parseFloat($("#quantity").val());
		var total = ((convertion) * (price)).toFixed(0);
		window.totalPrice = total
		var finalPrice = total.toString().replace(/\./g, ',');
		var priceElement = document.querySelector("#total-price")
		priceElement.innerHTML = finalPrice
	}

	$(document).ready(function (){ 
		updatePrice();
	});

	$(document).on("click", "input", updatePrice);
	$(document).on("keyup", "input", updatePrice);
	$(document).on("change", "input", updatePrice);

	$('#quantity').on('change keyup focus', function() {
		var removeLetters = $(this).val().replace(/[^0-9]/g, '');
		$(this).val(removeLetters);
	});
});

// submit button
(function() {
	var submitButton = document.querySelector('.priceForm__btn')

	if(submitButton) {
		submitButton.addEventListener('click', function() {
			const formData = new FormData()
			formData.append('count', window.totalPrice)
			
			$.ajax({
				url: '#',
				type: 'post',
				dataType: 'multipart/form-data',
				data: formData,
				success: function(data) {
					console.log(data)
				}
			});
		})
	}
})()