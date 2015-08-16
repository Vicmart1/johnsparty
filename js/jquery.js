var questions = 0;
var left_buttons = new Array;
var right_buttons = new Array;

var createElement = function (element, where) {
    $( element ).appendTo( where );
}

var createButton = function(element, where, position, num) {
	createElement(element, where);
	var position_string;
	if(position == 1)
		position_string = "left";
	else
		position_string = "right";	
	$(document).on('click','#' + position_string + '_button' + num , function() {
                        $('#the_header').addClass('animated fadeOut');
                        $('#the_body').addClass('animated fadeOut');
                        $('#the_body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', sayThankYou(position,num));
	});
}

$("input").click(function(e){
    var idClicked = e.target.id;
});

var sayThankYou = function (result, num) {
    $('#the_body').removeClass('animated fadeOut');
    $('#the_body').addClass('animated fadeIn');
    $('#right_button'+num).remove();
	$('#left_button'+num).remove();
    //$('#left_button'+num).html('Refresh Page');

	
    var TestObject = Parse.Object.extend("Result"+num);
    var testObject = new TestObject();
    testObject.save({score: String(result)}).then(function(object) { });
    
    $( "<canvas id='myChart"+num+"' width='400' height='400'></canvas>" ).appendTo( "#question"+num );
    
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#myChart"+num).get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx);
    
    
    var GameScore = Parse.Object.extend("Result"+num);
    var query = new Parse.Query(GameScore);
    query.limit(1000);
    //query.equalTo("playerName", "Dan Stemkoski");
    var left = 0;
    var right = 0;
    
    
    query.find({
               success: function(results) {
               //alert("Successfully retrieved " + results.length + " scores.");
               // Do something with the returned Parse.Object values
               
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
               $('#the_body').html('Thank you for your input. This is what fellow students think about the matter.');
               
               var data = [
                           {
                           value: right,
                           color: "#E0E0E0",
                           highlight: "#FFFFFF",
                           label: "Right Shark"
                           },
                           {
                           value: left,
                           color:"#66B2FF",
                           highlight: "#3399FF",
                           label: "Left Shark"
                           }
                           ]
               // For a pie chart
               var myPieChart = new Chart(ctx).Pie(data);
               
               },
               error: function(error) {
               //alert("Errorrr: " + error.code + " " + error.message);
               }
               });
    
    	
        //$(document).on('click','#left_button'+num, function(){
        //               location.reload();
        //                });
}

var createPrompt = function(question, answer1, answer2) {
                  questions++;
                  createElement("<p class='lead' id='question"+questions+"'>"+question+"</p>","#cover");
                  createElement("<p class='lead' id='container"+questions+"'></p>","#cover");
                  left_buttons.push("<a href='#' class='btn btn-lg btn-default left' id='left_button"+questions+"'>"+answer1+"</a>");
                  right_buttons.push("<a href='#' class='btn btn-lg btn-default right' id='right_button"+questions+"'>"+answer2+"</a>");
                  createButton(left_buttons[questions-1],"#container"+questions, 1, questions);
                  createButton(right_buttons[questions-1],"#container"+questions, 2, questions);

}

$(document).ready(function() {
                  Parse.initialize("88lDbflAf4cF2dTqDwFHkv6N6EG6WtDXY0YVT2lR", "YIPG0FJNlDrGcG5EaKdXHe74xQNGASrem08Pr6to");
                  createPrompt("Are you a left shark or right shark?", "Left Shark", "Right Shark");
});