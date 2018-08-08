$(document).ready(function() {
	$("form#checkout").submit(function(event) {
	event.preventDefault();
	var name = $("#name").val();
	var address = $("#address").val();
	$("#pname").text(name);
  $("#paddress").text(address);
	});
});
