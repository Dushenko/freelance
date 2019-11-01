const $ = require('jquery');
window.jQuery = window.$ = $;
require('../../js/vendors/maskedinput/jquery.maskedinput.min.js');

$(document).ready(function () {

  $("input[type='tel']").mask("+7(999) 999-9999");

});