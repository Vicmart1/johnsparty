$(document).ready(function() {
    //$('#the_header').addClass('animated infinite bounce');
});
$("input").click(function(e){
    var idClicked = e.target.id;
    //alert("You clicked" + idClicked);
});

var sayThankYou = function () {
    $('#the_body').html('Thank you for your input.');
    $('#the_body').removeClass('animated fadeOut');
    $('#the_body').addClass('animated fadeIn');
}


$('#left_button').click(function() {
                        $('#the_header').addClass('animated fadeOut');
                        $('#the_body').addClass('animated fadeOut');
                        $('#the_body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', sayThankYou());
});


$('#right_button').click(function() {
                        $('#the_header').addClass('animated fadeOut');
                        $('#the_body').addClass('animated fadeOut');
                        $('#the_body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', sayThankYou());
                        //alert( "Handler for .click() called." );
});