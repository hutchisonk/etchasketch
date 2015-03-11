$(document).ready(function() {
	
	var colorArray = ["white", "red", "orange", "yellow", "green", "blue", "purple", "pink", "gray"];
	
	function buildBoard(numberofrows) {
		$("#wrapper").empty();
		
		// pixels = 600 by 600;
		var rowwidth = 960;
		console.log("number of rows is "+numberofrows)
		var number = numberofrows + parseFloat(1);
		var squarewidth = rowwidth/(number) -4;
		//console.log("in bB number is " +number)
		//console.log("squarewidth is "+ squarewidth);
		//console.log("rowwidth is " + rowwidth)
		
		//Inserting the rows
		for (var k=1;k<number;k++) {
			var rowinfo = '<div class="row" id="row'+k+'"></div>';
			$("#wrapper").append(rowinfo);
		}
		//Appending squares to each row
		for (var j=1;j<number;j++) {
			console.log("j is "+j+ " number is "+number);
			for (var i=1;i<number;i++) {
				//var newdiv = "<div class='square' data-color='0'>"+i+"</div>";
				var newdiv = "<div class='square' data-color='0'></div>";
				$("#row"+j).append(newdiv);
			}	
		}
		//$(".row").width(rowwidth);
		$(".square").css({"height":squarewidth,
						   "width":squarewidth});
		
		
		//console.log("actual row width is "+$(".row").width());
		//console.log("actual square height and width is "+$(".square").width() +", "+ $(".square").height());
	
	
	
	//****************************************************************
		$(".square").hover(function() {
			var data = $(this).data("color");
			//console.log(data);
			
			if ($(this).data("color") == 0) {
				var r = Math.floor(Math.random()*255);
				var g = Math.floor(Math.random()*255);
				var b = Math.floor(Math.random()*255);
				//console.log("r g b " + r+" " + g+" " +b)
				$(this).css("background-color", "rgb("+r+","+g+","+b+")");
				console.log("color is "+$(this).css("background-color"));
			} else if ($(this).data("color") > 0) {
				
				var currentcolor= $(this).css('backgroundColor').replace('rgb(','').replace(')','').split(',');
				//console.log("replacing "+ $(this).css('backgroundColor'));
				//console.log("cc is "+currentcolor);
				var multiplier = .1;
				
				var r = parseInt(currentcolor[0]) - Math.floor(currentcolor[0]*multiplier);
				var g = parseInt(currentcolor[1]) - Math.floor(currentcolor[1]*multiplier);
				var b = parseInt(currentcolor[2]) - Math.floor(currentcolor[2]*multiplier);
				$(this).css("background-color", "rgb("+r+","+g+","+b+")");
				console.log("color is "+$(this).css("background-color"));
			}
			
			$(this).data("color", data + 1);
			console.log($(this).data("color"));
			
			//$(this).css("background-color", colorArray[$(this).data("color")]);
			//$(this).css("background-color", colorArray[$(this).data("color")]);
				
			$(this).css("border", "1px solid blue");
		}, function () {
			$(this).css("border", "1px solid red");
		});//hover
	//****************************************************************
	
	
	}//buildBoard function
	buildBoard(64);
	
	
	$("#newgrid").click(function() {
		var rowscolumns = prompt("How many rows and columns would you like?", "20");
		console.log("rowscolumns is" + rowscolumns);

		buildBoard(parseFloat(rowscolumns));
	});
	
});//doc ready function