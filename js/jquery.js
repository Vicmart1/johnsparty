$(document).ready(function() {
    //$('#the_header').addClass('animated infinite bounce');
});
$("input").click(function(e){
    var idClicked = e.target.id;
    //alert("You clicked" + idClicked);
});
$('#left_button').click(function() {
                        $('#the_header').addClass('animated fadeOut');
                        $('#the_body').addClass('animated fadeOut');
                        //alert( "Handler for .click() called." );
});

$('#right_button').click(function() {
                        $('#the_header').addClass('animated fadeOut');
                        $('#the_body').addClass('animated fadeOut');
                        //alert( "Handler for .click() called." );
});