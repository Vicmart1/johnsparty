$(document).ready(function() {
    $('#the_header').addClass('animated infinite bounce');
});
$("input").click(function(e){
    var idClicked = e.target.id;
    alert("You clicked" + idClicked);
});
$('#left_button').click(function() {
	$('#the_header').addClass('animated infinite fadeOut');
	alert( "Handler for .click() called." );
});