var width = window.innerWidth;
var height = window.innerHeight;
var columns = 41;
var rows = 20;
var descrip_count = 0;
var array_data = [   [0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],  [0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0], [0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0], [1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0], [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0], [0,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0], [0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,2,1,1,1,1,1,1,0,1,1,0,0,0,0], [0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0], [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0], [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,2,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0], [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0], [0,0,0,0,0,0,0,1,1,1,2,1,1,1,0,0,0,0,0,0,1,1,2,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0], [0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0], [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1], [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0], [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var title = ["About Us", "Fetal Heartrate Monitor", "Otoau- costic Emissions Device", "Oxygen Analyzer (Recruiting)", "Untitled DT (Recruiting)", "Untitled DT (Recruiting)"];
var descriptions = ["We are the Johns Hopkins chapter of the Engineering World Health Society. We're a passionate group of students dedicated to helping improve the world. Our Design Teams create solutions to big problems in developing countries, many of which have won numerous awards for the devices they've created. The General body is responsible for planning and executing all of EWH's programs, including Build Day (twice a year), the Speaker Series, EWH's Community Outreach Initative, and the Student Activities Fair. On this site you will find the current design teams and their plans, as well as new teams open to applications. All Johns Hopkins undergraduate students are eligible to apply. Design teams will list specifically what they are looking for in new members, but gennerally the idea is 'Dedication over experience'! APPLICATIONS ARE DUE BY 5PM ON WEDNESDAY, 9/16.", "Hey! We're Victor and Emily, co-leaders of the toco design team! Our project focuses on developing a low-cost tocodynamometer and fetal heart rate monitor for smartphones. Our device would be used in developing countries for women in labor who do not have access to more advanced monitoring equipment. Our product is important for mothers-to-be since it will notify the patient of complications for both her and the fetus during labor that could potentially lead to neonatal mortality, giving doctors and nurses an early warning to circumvent the emergency. I've taken on a  very technical role on the project, working closely with Jordan, another programmer on the team, to develop the algorithm for fetal heart rate detection as well as creating the smartphone app. Our final product will be a super sensitive microphone apparatus attached to an arduino, which will feed data to the smartphone app to process and display for the patient and nurses.", "Hi, my name is Adarsha and I am the team leader of the Otoaucostic Emissions Device team. Our team is focused on developing a low-cost, easy-to-use Otoaucostic Emissions (OAE) device for pediatric hearing loss screening in developing countries. In most developing countries in Southeast Asia, there is no process of screening newborns in regard to their hearing. Since hearing loss is especially detrimental in the early stages of life when language and social development are still in early stages, it is instrumental that pediatrics and their families are aware of their hearing deficit. We are developing a novel OAE device that will be cheap, portable, and easy-to-use in the developing world health care setting.", "Hey everyone, my name is Zeyu. I'm a senior computer engineering major with a strong background in software development, chip design (VLSI), and machine level computing. My team is designing a highly efficient and low cost oxygen analyzer targeted towards use in 3rd world countries. For those of you who aren’t familiar with the primary purpose of these devices - oxygen analyzers measure the concentration of oxygen levels from an oxygen source (oxygen concentrator etc.). This is done in order for doctors to determine if an oxygen supply is safe enough for patient use. Our current design focuses on the use of a zinc-air battery reaction, where the battery will react with exposed oxygen to generate a voltage. From this voltage, we will be able to directly transform analog values into a digital (readable) oxygen concentration level through the use of a custom  designed circuit. Currently, we are redesigning this circuit in order to provide a digital display of the concentration value, as well as designing methods to shield our device from outside environmental factors. This device is rather expensive in the modern market, ranging from $100 to even $1000 dollars for multifunctional hospital grade devices. Successfully completing a design for such a valuable device that is also low cost (under $50) would be a great aid to under-funded health facilities all over the world. This project will challenge us to consider and learn all aspects of the engineering and business profession, from the initial proof of concept, to prototyping and marketing the device. I am not looking for people that belong to any specific majors - I believe passion, ambition, and the willingness to learn is the key to success here.", "My name is Vishnu and I am a BME junior in the Cell and Tissue Engineering focus area. I joined Engineering World Health as a freshman as a part of the Surgical Lamp team on which I spent one semester. After this first semester, my team switched projects and we began to work on the O2 concentrator analyzer team. I was on this team for a year and a half and while on this team I helped to redesign the original product and worked heavily on our business plan. We took our business plan to the JHU Business Plan Competition where we placed as finalists in the last round. I am currently interested in global surgery but am also open to any new ideas my team may be interested in pursuing.", "My name is Jack. I've been Co-President/President of EWH for three years now, and been on a Design Team for four. I enjoy long walks on the beach, playing with puppies, and building homes for the needy. If you join my team, plan to attend and win multiple business plan competitions. I'm not looking for experience; I'm looking for dedication.</br></br>Past DT awards: </br>Won CMU McGinnis Venture Competition (Stem Cell Delivery)</br>EWH National Competition(Oxygen Conc. Analyzer)</br>Medical Device Initiative - Prototype competition (O2 Analyzer)</br>Medical Device Initiative - Idea Competition (Non-electric Blood Pressure Monitor)Finalist/Semifinalist in Princeton University</br>TigerLaunch Competition</br>JHU Business Plan</br>Towson Incubator</br>the Big Sell</br>Tulane Business Model</br>ASME iShow</br>JHU Business Plan (another team)"];
var des_loc = new Array(rows);
var loc_des = new Array(descriptions.length);

$( document ).ready(function() {
	for(i = 0; i < rows; i++) {
		des_loc[i] = new Array(columns);
	}
	
	var box_cont = null;
	var description = null;
	var box = null;
	var box_width = ((height - 190) / rows);
	for(i = 0; i < columns; i++) {
    	for(j = 0; j < rows; j++) {
			box_cont = $("<div class='box-cont' id='" + i + "-" + j+ "'></div>");
			$(box_cont).css("width", box_width + "px");
			$(box_cont).css("padding-bottom", box_width + "px");
			
			$(box_cont).css("left", ((box_width + 10) * i) + "px")
			$(box_cont).css("top", ((box_width + 10) * j) + "px");
			
			$(box_cont).fadeIn(250);
			
			if(array_data[j][i] == 0) {
				$(box_cont).addClass("inactive");
			} else if(array_data[j][i] == 2) {
				$(box_cont).addClass("active");
				$(box_cont).html("<p class='title'>" + title[descrip_count] + "</p>");
				description = $("<div class='description' id='desp" + descrip_count + "'></div>");
				description.append("<p class='paragraph'>" + descriptions[descrip_count] + "</p>");
				description.css("left", (((box_width + 10) * i + box_width + 10) + (box_width * (3.0 - 1)/2) + 10) + "px");
				description.css("top", (((box_width + 10) * j) - (box_width * (3.0 - 1)/2) - 10) + "px");		
				des_loc[j][i] = descrip_count;
				loc_des[descrip_count] = i + "-" + j;
				descrip_count++;
			} else if(array_data[j][i] == 3) {
				$(box_cont).addClass("inactive");
				$(box_cont).addClass("active");
			} else if(array_data[j][i] == 4) {
				$(box_cont).addClass("inactive");
				$(box_cont).addClass("letter-black");
			}
			
			$("body").on("mousedown", ".box-cont", function(e){
				if(!$(this).hasClass("inactive")) {
					factor = 0.9;
					var x = $(this).attr('id').split("-")[0];
					var y = $(this).attr('id').split("-")[1];
					if(array_data[y][x] == 2) {
						factor = 3.0;
						var id = "#desp" + des_loc[y][x];
						$(id).css("width", ((box_width * factor + 20) * 4 + 30) + "px");
						$(id).css("height", ((box_width * factor + 20) * 3 + 20) + "px");
						$(id).css("left", (((box_width + 10) * x + box_width + 10) + (box_width * (factor - 1)/2) + 10) + "px");
						$(id).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");		
						$(id).css("opacity", 1);	
						$(id).css("transition-delay", "0.25s");	
						$(id).css("transition-duration", "0.25s");								
					}
					
					$(this).css("width", (box_width * factor + 20) + "px");
					$(this).css("padding-bottom", (box_width * factor + 20) + "px");
					$(this).css("left", (((box_width + 10) * x) - (box_width * (factor - 1)/2) - 10) + "px");
					$(this).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");				
					$(this).children().css("opacity", "1");
					$(this).children().css("transition-delay", "0.4s");
					$(".paragraph").css("transition-delay", "0.5s");
					$(".paragraph").css("opacity", 1);
				}
			});
			
			
			
			$("body").on("mouseover", ".description", function(e){	
				factor = 0.9;
				var id = "#" + loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)];
				
				var x = loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)].split("-")[0];
				var y = loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)].split("-")[1];
				
				factor = 3.0;
				$(this).css("width", ((box_width * factor + 20) * 4 + 30) + "px");
				$(this).css("height", ((box_width * factor + 20) * 3 + 20) + "px");
				$(this).css("left", (((box_width + 10) * x + box_width + 10) + (box_width * (factor - 1)/2) + 10) + "px");
				$(this).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");		
				$(this).css("opacity", 1);	
				$(this).css("transition-delay", "0.25s");	
				$(this).css("transition-duration", "0.25s");								
				
				
				$(id).css("width", (box_width * factor + 20) + "px");
				$(id).css("padding-bottom", (box_width * factor + 20) + "px");
				$(id).css("left", (((box_width + 10) * x) - (box_width * (factor - 1)/2) - 10) + "px");
				$(id).css("top", (((box_width + 10) * y) - (box_width * (factor - 1)/2) - 10) + "px");				
				$(id).children().css("opacity", "1");
				$(id).children().css("transition-delay", "0.4s");
				$(".paragraph").css("transition-delay", "0.5s");
				$(".paragraph").css("opacity", 1);
			});
			
			$("body").on("mouseout", ".description", function(e){
				var id = "#" + loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)];
				
				var x = loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)].split("-")[0];
				var y = loc_des[$(this).attr('id').charAt($(this).attr('id').length - 1)].split("-")[1];
				
				$(id).css("width", (box_width) + "px");
				$(id).css("padding-bottom", (box_width) + "px");
				
				$(id).css("left", ((box_width + 10) * x) + "px");
				$(id).css("top", ((box_width + 10) * y) + "px");
				
				$(id).children().css("opacity", "0");
				$(id).children().css("transition-delay", "0s");
				$(".paragraph").css("transition-delay", "0s");
				$(".paragraph").css("transition-duration", 0);
			
				$(".paragraph").css("opacity", 0);
			
				$(this).css("width", "0px");
				$(this).css("height", "0px");
				$(this).css("opacity", 0);		
				$(this).css("transition-delay", "0.05s");
				$(this).css("transition-duration", "0.25s");								
			});
			
			$("body").on("mouseout", ".box-cont", function(e){
				if(!$(this).hasClass("inactive")) {
					$(this).css("width", (box_width) + "px");
					$(this).css("padding-bottom", (box_width) + "px");
					
					var x = $(this).attr('id').split("-")[0];
					var y = $(this).attr('id').split("-")[1];
					
					$(this).css("left", ((box_width + 10) * x) + "px");
					$(this).css("top", ((box_width + 10) * y) + "px");
					
					if(array_data[y][x] == 2) {
					
						$(this).children().css("opacity", "0");
						$(this).children().css("transition-delay", "0s");
						$(".paragraph").css("transition-delay", "0s");
						$(".paragraph").css("transition-duration", 0);
					
						$(".paragraph").css("opacity", 0);
					
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
			if(description != null) {
				$("body").append(description);
			}
			description = null;
  		}
	}
});