var width = window.innerWidth;
var height = window.innerHeight;
var columns = 41;
var rows = 20;
var array_data = [   [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0], [0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0], [0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0], [1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0], [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0], [0,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0], [0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,2,1,1,1,1,1,1,0,1,1,0,0,0,0], [0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0], [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0], [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,2,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0], [0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,2,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1], [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

$( document ).ready(function() {
	var box_cont = null;
	var box = null;
	var box_width = ((height - 190) / rows);
	for(i = 0; i < columns; i++) {
    	for(j = 0; j < rows; j++) {
			box_cont = $("<div class='box-cont' id='" + i + "-" + j+ "'></div>");
			$(box_cont).css("width", box_width + "px");
			$(box_cont).css("padding-bottom", box_width + "px");
			
			$(box_cont).css("left", ((box_width + 10) * i) + "px");
			$(box_cont).css("top", ((box_width + 10) * j) + "px");
			if(array_data[j][i] == 0) {
				$(box_cont).addClass("inactive");
			} else if(array_data[j][i] == 2) {
				$(box_cont).addClass("active");
				$(box_cont).html("<p class='title'>Fetal Heartrate Monitor</p>");
			}
			
			$("body").on("mouseover", ".box-cont", function(e){
				if(!$(this).hasClass("inactive")) {
					factor = 0.9;
					var x = $(this).attr('id').split("-")[0];
					var y = $(this).attr('id').split("-")[1];
					if(array_data[y][x] == 2) {
						factor = 3.0;
						$(".description").css("width", ((box_width * factor + 20) * 4 + 30) + "px");
						$(".description").css("height", ((box_width * factor + 20) * 3 + 20) + "px");
						$(".description").css("left", (((box_width + 10) * x + box_width + 10) + (box_width * (factor - 1)/2) + 10) + "px");
						$(".description").css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");		
						$(".description").css("opacity", 1);	
						$(".description").css("transition-delay", "0.25s");	
						$(".description").css("transition-duration", "0.25s");	
						/**$(".active").each(function( index ) {
							$(this).css("z-index", "0");
						});
						$(this).css("z-index", "2");
						**/
						//$(this).css("z-index", 4);							
						//$(".description").css("z-index", 3);							
					}
					
					$(this).css("width", (box_width * factor + 20) + "px");
					$(this).css("padding-bottom", (box_width * factor + 20) + "px");
					$(this).css("left", (((box_width + 10) * x) - (box_width * (factor - 1)/2) - 10) + "px");
					$(this).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");				
					$(this).children().css("opacity", "1");
					$(this).children().css("transition-delay", "0.4s");
					$(".paragraph").css("transition-delay", "0.5s");
					$(".paragraph").css("opacity", 1);
					/**for(k = -2; k <= 2; k++) {
						for(l = -2; l <=2; l++) {
							//console.log(k);
							//console.log("#" + (1.0 * x + k) + "-" + y);
							if(k == 0 && l == 0) {
								l++
							}
							var neg = 1;
							var negl = 1;
							if (k > 0) {
								neg = -1;
							}
							if (l > 0) {
								negl = -1;
							}
							$("#" + (1.0 * x + k) + "-" + (1.0 * y + l)).css("left", (((box_width + 10) * (1.0 * x + k)) + (box_width/k) - (5 * neg)) + "px");
							$("#" + (1.0 * x + k) + "-" + (1.0 * y + l)).css("top", (((box_width + 10) * (1.0 * y + l)) + (box_width/l) - (5 * negl)) + "px");
						}
					}**/
				}
			});
			
			$("body").on("mousedown", ".box-cont", function(e){
				if(!$(this).hasClass("inactive")) {
					factor = 0.9;
					var x = $(this).attr('id').split("-")[0];
					var y = $(this).attr('id').split("-")[1];
					if(array_data[y][x] == 2) {
						factor = 3.0;
						$(".description").css("width", ((box_width * factor + 20) * 4 + 30) + "px");
						$(".description").css("height", ((box_width * factor + 20) * 3 + 20) + "px");
						$(".description").css("left", (((box_width + 10) * x + box_width + 10) + (box_width * (factor - 1)/2) + 10) + "px");
						$(".description").css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");		
						$(".description").css("opacity", 1);	
						$(".description").css("transition-delay", "0.25s");	
						$(".description").css("transition-duration", "0.25s");	
						/**$(".active").each(function( index ) {
							$(this).css("z-index", "0");
						});
						$(this).css("z-index", "2");
						**/
						//$(this).css("z-index", 4);							
						//$(".description").css("z-index", 3);							
					}
					
					$(this).css("width", (box_width * factor + 20) + "px");
					$(this).css("padding-bottom", (box_width * factor + 20) + "px");
					$(this).css("left", (((box_width + 10) * x) - (box_width * (factor - 1)/2) - 10) + "px");
					$(this).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");				
					$(this).children().css("opacity", "1");
					$(this).children().css("transition-delay", "0.4s");
					$(".paragraph").css("transition-delay", "0.5s");
					$(".paragraph").css("opacity", 1);
					/**for(k = -2; k <= 2; k++) {
						for(l = -2; l <=2; l++) {
							//console.log(k);
							//console.log("#" + (1.0 * x + k) + "-" + y);
							if(k == 0 && l == 0) {
								l++
							}
							var neg = 1;
							var negl = 1;
							if (k > 0) {
								neg = -1;
							}
							if (l > 0) {
								negl = -1;
							}
							$("#" + (1.0 * x + k) + "-" + (1.0 * y + l)).css("left", (((box_width + 10) * (1.0 * x + k)) + (box_width/k) - (5 * neg)) + "px");
							$("#" + (1.0 * x + k) + "-" + (1.0 * y + l)).css("top", (((box_width + 10) * (1.0 * y + l)) + (box_width/l) - (5 * negl)) + "px");
						}
					}**/
				}
			});
			
			$("body").on("mouseout", ".box-cont", function(e){
				if(!$(this).hasClass("inactive")) {
					$(this).css("width", (box_width) + "px");
					$(this).css("padding-bottom", (box_width) + "px");
					
					var x = $(this).attr('id').split("-")[0];
					var y = $(this).attr('id').split("-")[1];
					
					$(this).css("left", ((box_width + 10) * x) + "px");
					$(this).css("top", ((box_width + 10) * y) + "px");
					
					$(this).children().css("opacity", "0");
					$(this).children().css("transition-delay", "0s");
					$(".paragraph").css("transition-delay", "0s");
					$(".paragraph").css("transition-duration", 0);
					
					$(".paragraph").css("opacity", 0);
					
					if(array_data[y][x] == 2) {
						//$(this).css("z-index", 2);							
						//$(".description").css("z-index", 1);
						$(".description").css("width", "0px");
						$(".description").css("height", "0px");
						$(".description").css("opacity", 0);		
						$(".description").css("transition-delay", "0.05s");
						$(".description").css("transition-duration", "0.25s");								
					}
					/**for(k = -2; k <= 2; k++) {
						for(l = -2; l <= 2; l++) {
							//console.log(k);
							//console.log("#" + (1.0 * x + k) + "-" + y);
							if(k == 0 && l == 0) {
								l++
							}
							$("#" + (1.0 * x + k) + "-" + (1.0 * y + l)).css("left", (((box_width + 10) * (1.0 * x + k))) + "px");
							$("#" + (1.0 * x + k) + "-" + (1.0 * y + l)).css("top", (((box_width + 10) * (1.0 * y + l))) + "px");
						}	
					}**/
				}
			});
			$("body").append(box_cont);
  		}
	}
});