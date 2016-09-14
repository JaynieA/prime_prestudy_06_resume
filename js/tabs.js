$(document).ready(function() {
	function changeTabText() {
		//Control tabs if window loaded on screen width <700 px
		var win = $(this); //this = window
	 	if (win.width() <= 700) { 
	 		$('#tab1').html("<span class='glyphicon glyphicon-user'></span>");
	 		$('#tab2').html("<i class='fa fa-suitcase' aria-hidden='true'></i>");
	 		$('#tab3').html("<i class='fa fa-university' aria-hidden='true'></i>");
	 		$('#tab4').html("<i class='fa fa-book' aria-hidden='true'></i>");
	 	}
		//Control tabs if window resized to smaller than 700 px width
	 	$(window).resize(function() {
	 		if (win.width() <= 700) { 
	 			$('#tab1').html("<span class='glyphicon glyphicon-user'></span>");
		 		$('#tab2').html("<i class='fa fa-suitcase' aria-hidden='true'></i>");
		 		$('#tab3').html("<i class='fa fa-university' aria-hidden='true'></i>");
		 		$('#tab4').html("<i class='fa fa-book' aria-hidden='true'></i>");
	 		}
	 		if (win.width() >= 700) { 
	 			$('#tab1').html("About Me");
		 		$('#tab2').html("Employment");
		 		$('#tab3').html("Professional Development");
		 		$('#tab4').html("Education");
	 		}
	 	});
	}
	
	changeTabText();
});

