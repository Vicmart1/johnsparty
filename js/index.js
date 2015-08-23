var questions = 0;
var left_buttons = new Array;
var right_buttons = new Array;
var timeout = null;
var last_update;
var update_freq = 5000;

function componentFromStr(numStr, percent) {
    var num = Math.max(0, parseInt(numStr, 10));
    return percent ?
        Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

function rgbToHex(rgb) {
    var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
    var result, r, g, b, hex = "";
    if ( (result = rgbRegex.exec(rgb)) ) {
        r = componentFromStr(result[1], result[2]);
        g = componentFromStr(result[3], result[4]);
        b = componentFromStr(result[5], result[6]);

        hex = (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return hex;
}

function updateTweets(num, left_color, right_color, left_text, right_text) {
    var tweets = Parse.Object.extend("Tweets" + num);
    var query = new Parse.Query(tweets);
    query.limit(1000);

	var now = new Date();
	
    query.find({
    	success: function(results) {
			var counter = -1;
			var tweet = null;
			var object = null;
        	for (var i = results.length - 1; i >= 0; i--) {
             	object = results[i];
	            if(object.get('tweet') && object.get('Score')) {
					var seconds = (now.getTime() - object.createdAt.getTime())/1000;
					var timestamp = " ";
					if(seconds < 60) {
						timestamp = parseInt(seconds) + "s ago";
					} else if (seconds/60 < 60) {
						timestamp = parseInt(seconds/60) + "m ago";
					} else if (seconds/3600 < 24) {
						timestamp = parseInt(seconds/3600) + "h ago";
					} else if (seconds/(3600 * 24) < 7) {
						timestamp = parseInt(seconds/(3600 * 24)) + "d ago";
					} else if (seconds/(3600 * 24 * 7) < 52){
						timestamp = parseInt(seconds/(3600 * 24 * 7)) + "w ago";
					} else if (seconds/(3600 * 24 * 7 * 52)){
						timestamp = parseInt(seconds/(3600 * 24 * 7 * 52)) + "y ago";
					}
					if(object.createdAt.getTime() > last_update) {
						if(counter != -1) {
							$($(".tweet").get(counter)).after("<div class='icon-holder'><div class='icon' style='background-color: #" + ((object.get("Score") == 1) ? left_color : right_color) + "'></div></div><div class='tweet'><b>" + ((object.get("Score") == 1) ? left_text : right_text) + "</b> <span class='subtitle'>" + timestamp + "</span></br> <span class='subtitle'>" + object.get('tweet') + "</span></div>");
						} else {
							$(".tweeter").prepend("<div class='icon-holder'><div class='icon' style='background-color: #" + ((object.get("Score") == 1) ? left_color : right_color) + "'></div></div><div class='tweet'><b>" + ((object.get("Score") == 1) ? left_text : right_text) + "</b> <span class='subtitle'>" + timestamp + "</span></br> <span class='subtitle'>" + object.get('tweet') + "</span></div>");
						}

						counter++;
					} else {
						tweet = $($($(".tweet").get(results.length - 1 - i)).find(".subtitle")[0]);
						$(tweet).text(timestamp);
					}
				}
            }
			last_update = now.getTime();
        },
        error: function(error) {
               //alert("Error: " + error.code + " " + error.message);
        }
    });
	
	timeout = window.setTimeout(updateTweets, update_freq, num, left_color, right_color, left_text, right_text);
}

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
                        $('#the_header').html("Thank you.");
                        //$('#the_body').addClass('animated fadeOut');
                        $('#the_body').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', sayThankYou(position,num));
	});
}

$("input").click(function(e){
    var idClicked = e.target.id;
});

var sayThankYou = function (result, num) {
    //$('#the_body').removeClass('animated fadeOut');
    $('#the_header').addClass('animated fadeIn');
    $('#the_body').addClass('animated fadeIn');
	
	var left_text = $('#left_button'+num).html();
	var right_text = $('#right_button'+num).html();
	
	var left_color = $('#left_button'+num).css('background-color');
	var right_color = $('#right_button'+num).css('background-color');
	
	//left_color = left_color.substring(4, left_color.length-1).replace(/ /g, '').split(',');
	//var left_color2 = rgbToHex(left_color[0], left_color[1], left_color[2]);
	left_color = rgbToHex(left_color);
	right_color = rgbToHex(right_color);
	
	$('#right_button'+num).remove();
	$('#left_button'+num).remove();
	
    //$('#left_button'+num).html('Refresh Page');
	
    var TestObject = Parse.Object.extend("Result"+num);
    var testObject = new TestObject();
    testObject.save({score: String(result)}).then(function(object) { });
    
	var radius = 0;
	radius = Math.max(parseInt($(".cover-container").css("width")), parseInt($(".cover-container").css("height")))/2;
	
    $("<canvas id='myChart"+num+"' width='" + radius + "' height='" + radius + "'></canvas>").appendTo( "#container"+num );
    createElement("<p class='lead' id='question"+questions+"text'>Join the debate!</br>Write why did you picked the " + ((result == 1) ? left_text.toLowerCase() : right_text.toLowerCase()) + " party to represent you.</p>","#cover");
    createElement("<p class='lead' id='container"+questions+"text'></p>","#cover");
	$("<div class='textarea alpha60' id='typebox' contenteditable>Type here.</div>").appendTo( "#container"+num+"text" );
	$("<a href='#' class='btn btn-lg btn-default left' id='submit' style='background-color:#FFF; margin: 20px;' >Submit</a>").appendTo( "#container"+num+"text" );

	$(document).on('click','#submit', function() {
	    var TestObject = Parse.Object.extend("Tweets" + num);
	    var testObject = new TestObject();
	    testObject.save({tweet: String($("#typebox").text()), Score: result}).then(function(object) { });
		
		var scroll = $(window).scrollTop();
	
		$("#question"+questions+"text").html("Other people's responses are below.");
		$("<div class='tweeter' id='tweeter'></div>").appendTo( "#container"+num+"text" );
		
	    var tweets = Parse.Object.extend("Tweets" + num);
	    var query = new Parse.Query(tweets);
	    query.limit(1000);

		
		var now = new Date();
		
	    query.find({
	    	success: function(results) {
	        	for (var i = results.length - 1; i >= 0; i--) {
	            	var object = results[i];
	               	if(object.get('tweet') && object.get('Score')) {
						var seconds = (now.getTime() - object.createdAt.getTime())/1000;
						var timestamp = " ";
						if(seconds < 60) {
							timestamp = parseInt(seconds) + "s ago";
						} else if (seconds/60 < 60) {
							timestamp = parseInt(seconds/60) + "m ago";
						} else if (seconds/3600 < 24) {
							timestamp = parseInt(seconds/3600) + "h ago";
						} else if (seconds/(3600 * 24) < 7) {
							timestamp = parseInt(seconds/(3600 * 24)) + "d ago";
						} else if (seconds/(3600 * 24 * 7) < 52){
							timestamp = parseInt(seconds/(3600 * 24 * 7)) + "w ago";
						} else if (seconds/(3600 * 24 * 7 * 52)){
							timestamp = parseInt(seconds/(3600 * 24 * 7 * 52)) + "y ago";
						}
	                    $("<div class='icon-holder'><div class='icon' style='background-color: #" + ((object.get("Score") == 1) ? left_color : right_color) + "'></div></div><div class='tweet' id='tweet" + i + "'><b>" + ((object.get("Score") == 1) ? left_text : right_text) + "</b> <span class='subtitle'>" + timestamp + "</span></br> <span class='subtitle'>" + object.get('tweet') + "</span></div>").appendTo( "#tweeter" );
	               	}
	            }
				
				last_update = now.getTime();
	        },
	        error: function(error) {
	               //alert("Error: " + error.code + " " + error.message);
	        }
	    });

		$(window).scrollTop(scroll);
		$("#typebox").remove();
		$("#submit").remove();
		timeout = window.setTimeout(updateTweets, update_freq, num, left_color, right_color, left_text, right_text);
	});
    
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#myChart"+num).get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var myNewChart = new Chart(ctx);
    
    
    var GameScore = Parse.Object.extend("Result"+num);
    query = new Parse.Query(GameScore);
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
               $('#the_body').html('Your vote has been cast. This is what other students think about the matter.');
               
               var data = [
                           {
                           value: right,
                           color: "#E0E0E0",
                           highlight: "#FFFFFF",
                           label: right_text
                           },
                           {
                           value: left,
                           color: left_color,
                           highlight: "#000",
                           label: left_text
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


var createPrompt = function(question, answer1, answer2, color1, color2) {
	questions++;
	createElement("<p class='lead' id='question"+questions+"'>"+question+"</p>","#cover");
	createElement("<p class='lead' id='container"+questions+"'></p>","#cover");
	left_buttons.push("<a href='#' class='btn btn-lg btn-default left' id='left_button"+questions+"' style='background-color:" + color1 + "' >"+answer1+"</a>");
	right_buttons.push("<a href='#' class='btn btn-lg btn-default right' id='right_button"+questions+"'>"+answer2+"</a>");
	createButton(left_buttons[questions-1],"#container"+questions, 1, questions);
	createButton(right_buttons[questions-1],"#container"+questions, 2, questions);

}

$(document).ready(function() {
	Parse.initialize("88lDbflAf4cF2dTqDwFHkv6N6EG6WtDXY0YVT2lR", "YIPG0FJNlDrGcG5EaKdXHe74xQNGASrem08Pr6to");
	createPrompt("Are you a left shark or right shark?", "Left Shark", "Right Shark", "#66B2FF", "#E0E0E0");
});