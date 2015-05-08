$(document).ready(function() {
                  Parse.initialize("88lDbflAf4cF2dTqDwFHkv6N6EG6WtDXY0YVT2lR", "YIPG0FJNlDrGcG5EaKdXHe74xQNGASrem08Pr6to");
                  var TestObject = Parse.Object.extend("TestObject");
                  var testObject = new TestObject();
                  testObject.save({foo: "far"}).then(function(object) { });
});
$("input").click(function(e){
    var idClicked = e.target.id;
});

var sayThankYou = function (result) {
    $('#the_body').html('Thank you for your input.');
    $('#the_body').removeClass('animated fadeOut');
    $('#the_body').addClass('animated fadeIn');
    $('#right_button').remove();
    $('#left_button').html('Refresh Page');
    jQuery('#left_button').unbind('click');
    var TestObject = Parse.Object.extend("Result");
    var testObject = new TestObject();
    testObject.save({foo: result}).then(function(object) { });
    jQuery('#left_button').click(function(){
                        location.reload();
                        });
}

$('#left_button').click(function() {
                        var temp = "1";
                        $('#the_header').addClass('animated fadeOut');
                        $('#the_body').addClass('animated fadeOut');
                        $('#the_body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', sayThankYou(temp));
});


$('#right_button').click(function() {
                        var temp = "2";
                        $('#the_header').addClass('animated fadeOut');
                        $('#the_body').addClass('animated fadeOut');
                        $('#the_body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', sayThankYou(temp));
                        //alert( "Handler for .click() called." );
});