$(document).ready(function() {
	//Control tabs if window loaded on screen width <700 px
	var win = $(this); //this = window
 	if (win.width() <= 700) { 
 		console.log("window is loaded under 700 px");
 	}
	//Control tabs if window resized to smaller than 700 px width
 	$(window).resize(function() {
 		if (win.width() <= 700) { 
 			console.log("window has been resized to under 700 px");
 		}
 	});
});

