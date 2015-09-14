var width = window.innerWidth;
var height = window.innerHeight;
var mouse_x = -1;
var mouse_move = false;
var vel_x = 0;
var accel_x = 0;
var intervalHandle = null;

$(document).ready(function() {
	$(".globe-cont").css("width", Math.min(height, width) + "px");
	$(".globe-cont").css("height", Math.min(height, width) + "px");
});

$(document).mousedown(function(event) {
	clearInterval(intervalHandle);
	mouse_x = event.pageX;
	mouse_move = true;
	vel_x = 0;
});

$(document).mousemove(function(event) {
	if(mouse_move == true) {
		vel_x = event.pageX - mouse_x;
		$(".img-cont").css("left", (parseInt($(".img-cont").css("left")) + vel_x) + "px");
		mouse_x = event.pageX;
		
		
		console.log(parseInt($(".img-cont").css("left")) + parseInt($(".img-cont").css("width")));
	}
});

$(document).mouseup(function(event) {
	mouse_move = false;
	if(vel_x > 0) {
		accel_x = -0.01;
	} else {
		accel_x = 0.01;
	}
	if(vel_x != 0) {
		intervalHandle = setInterval(function(){
			vel_x = vel_x + accel_x;
			$(".img-cont").css("left", (parseInt($(".img-cont").css("left")) + vel_x) + "px");
			
			if(parseInt($(".img-cont").css("left")) < (parseInt($(".img-cont").css("width"))/-2.0)) {
				$(".img-cont").css("left", "0px");
			} else if (parseInt($(".img-cont").css("left")) < (parseInt($(".img-cont").css("width"))/-2.0)) {
				$(".img-cont").css("left", "0px");
			}
			
			if(Math.abs(vel_x) < 0.8) {
				vel_x = 0;
				clearInterval(intervalHandle);
			}
		}, 10);
	}
});

$(".globe-img").on('dragstart', function(event) { event.preventDefault(); });