$(document).ready(function() {
    $('#the_header').addClass('animated infinite bounce');
});
$('#left_button').click(function() {
	$('#the_header').addClass('animated infinite fadeOut');
	alert( "Handler for .click() called." );
});