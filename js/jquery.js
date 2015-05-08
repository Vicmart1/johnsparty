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
    $('#the_body').removeClass('animated fadeOut');
    $('#the_body').addClass('animated fadeIn');
    $('#right_button').remove();
    $('#left_button').html('Refresh Page');
    
    jQuery('#left_button').unbind('click');
    var TestObject = Parse.Object.extend("Result");
    var testObject = new TestObject();
    testObject.save({score: result}).then(function(object) { });
    
    var GameScore = Parse.Object.extend("Result");
    var query = new Parse.Query(GameScore);
    query.limit(1000);
    //query.equalTo("playerName", "Dan Stemkoski");
    query.find({
               success: function(results) {
               //alert("Successfully retrieved " + results.length + " scores.");
               // Do something with the returned Parse.Object values
               
               var left = 0;
               var right = 0;
               
               alert(results.length);
               for (var i = 0; i < results.length; i++) {
                var object = results[i];
               if(object.get('score')) {
                    if(object.get('score') == 1) {
                        left++;
                    } else {
                        right++;
                    }
               }
               }
               $('#the_body').html('Thank you for your input. The score is currently ' + left + '-' + right);
               
               },
               error: function(error) {
               alert("Error: " + error.code + " " + error.message);
               }
               });
    
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